import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { MARKET_VENDOR_CATEGORIES } from "@/lib/marketVendor";
import { getSupabaseConfig, supabaseRest } from "@/lib/supabaseRest";

export const dynamic = "force-dynamic";

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function bool(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "yes";
}

function requestIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || request.nextUrl.host;
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendApplicationEmails(payload: {
  contactName: string;
  businessName: string;
  email: string;
  phone: string;
  category: string;
  products: string;
  needsElectricity: boolean;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL ?? "promote@naturalstatetourismproject.org";
    const organizer = process.env.NATURAL_STATE_CONTACT_EMAIL ?? "naturalstatetourismproject@gmail.com";
    const displayName = payload.businessName || payload.contactName;

    await Promise.allSettled([
      resend.emails.send({
        from,
        to: organizer,
        subject: `New Amity Market vendor application: ${displayName}`,
        text: [
          `Vendor: ${displayName}`,
          `Contact: ${payload.contactName}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone}`,
          `Category: ${payload.category}`,
          `Needs electricity: ${payload.needsElectricity ? "Yes" : "No"}`,
          "",
          payload.products,
          "",
          "Review in the Amity market admin dashboard.",
        ].join("\n"),
      }),
      resend.emails.send({
        from,
        to: payload.email,
        replyTo: organizer,
        subject: "We received your Amity Saturday Market vendor application",
        text: [
          `Hi ${payload.contactName},`,
          "",
          "Thanks for putting your name in for the first Amity Saturday Market.",
          "",
          "We have your application. We are finalizing booth payment and the City of Amity vendor-permit details now, so there is nothing to pay today. Once those pieces are settled, approved vendors will get the final amount, payment instructions, setup rules, and booth confirmation by email.",
          "",
          "The working event date is Saturday, September 19, 2026 from 9 a.m. to 2 p.m.",
          "",
          "Natural State Tourism Project",
          "Amity Arkansas Guide",
        ].join("\n"),
      }),
    ]);
  } catch (error) {
    console.error("Vendor application email error", error);
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  if (!getSupabaseConfig()) {
    return NextResponse.json({ error: "Vendor registration is not configured yet." }, { status: 503 });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const honeypot = cleanText(body.websiteField, 200);
    if (honeypot) return NextResponse.json({ ok: true });

    const contactName = cleanText(body.contactName, 100);
    const businessName = cleanText(body.businessName, 140);
    const phone = cleanText(body.phone, 50);
    const email = cleanText(body.email, 180).toLowerCase();
    const website = cleanText(body.website, 240);
    const vendorCategory = cleanText(body.vendorCategory, 100);
    const productsDescription = cleanText(body.productsDescription, 1200);
    const boothSize = cleanText(body.boothSize, 80) || "10x10";
    const foodSetupDetails = cleanText(body.foodSetupDetails, 500);
    const electricityDetails = cleanText(body.electricityDetails, 500);
    const directSalesCompany = cleanText(body.directSalesCompany, 160);
    const specialSetupNeeds = cleanText(body.specialSetupNeeds, 600);
    const notes = cleanText(body.notes, 800);

    if (!contactName || !phone || !email || !vendorCategory || !productsDescription) {
      return NextResponse.json(
        { error: "Please include your name, phone, email, vendor category, and what you plan to sell." },
        { status: 400 },
      );
    }
    if (!validEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!MARKET_VENDOR_CATEGORIES.includes(vendorCategory as (typeof MARKET_VENDOR_CATEGORIES)[number])) {
      return NextResponse.json({ error: "Choose one of the listed vendor categories." }, { status: 400 });
    }

    const needsElectricity = bool(body.needsElectricity);
    const isFoodVendor = bool(body.isFoodVendor);
    if (needsElectricity && !electricityDetails) {
      return NextResponse.json({ error: "Tell us what you would need electricity for." }, { status: 400 });
    }
    if (isFoodVendor && !foodSetupDetails) {
      return NextResponse.json({ error: "Tell us a little about your food setup or trailer." }, { status: 400 });
    }

    const ipHash = createHash("sha256")
      .update(`${requestIp(request)}:${process.env.MARKET_VOTE_HASH_SALT ?? "amity-market-vendors"}`)
      .digest("hex");

    const since = new Date(Date.now() - 30 * 60 * 1000).toISOString();
    const recent = await supabaseRest<{ id: string }[]>(
      `amity_market_vendor_applications?select=id&ip_hash=eq.${encodeURIComponent(ipHash)}&created_at=gte.${encodeURIComponent(since)}&limit=6`,
    );
    if (recent.length >= 5) {
      return NextResponse.json({ error: "Too many applications were submitted from this connection. Please try again later." }, { status: 429 });
    }

    const payload = {
      contact_name: contactName,
      business_name: businessName || null,
      phone,
      email,
      website: website || null,
      vendor_category: vendorCategory,
      products_description: productsDescription,
      booth_size: boothSize,
      is_food_vendor: isFoodVendor,
      food_setup_details: foodSetupDetails || null,
      needs_electricity: needsElectricity,
      electricity_details: electricityDetails || null,
      has_canopy: bool(body.hasCanopy),
      has_tables_chairs: bool(body.hasTablesChairs),
      interested_table_chair_rental: bool(body.interestedTableChairRental),
      direct_sales_company: directSalesCompany || null,
      special_setup_needs: specialSetupNeeds || null,
      notes: notes || null,
      status: "new",
      payment_status: "pending_details",
      permit_status: "pending_details",
      ip_hash: ipHash,
      source: "website",
    };

    const inserted = await supabaseRest<{ id: string }[]>("amity_market_vendor_applications", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(payload),
    });

    await sendApplicationEmails({
      contactName,
      businessName,
      email,
      phone,
      category: vendorCategory,
      products: productsDescription,
      needsElectricity,
    });

    return NextResponse.json({ ok: true, id: inserted[0]?.id ?? null });
  } catch (error) {
    console.error("Vendor application error", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "The application could not be saved right now." },
      { status: 500 },
    );
  }
}
