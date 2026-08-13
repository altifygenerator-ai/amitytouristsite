import { NextRequest, NextResponse } from "next/server";
import { MARKET_ADMIN_COOKIE, marketAdminSessionValid } from "@/lib/marketAdminAuth";
import { MARKET_VENDOR_STATUSES, type MarketVendorRow } from "@/lib/marketVendor";
import { supabaseRest } from "@/lib/supabaseRest";

function authorized(request: NextRequest) {
  return marketAdminSessionValid(request.cookies.get(MARKET_ADMIN_COOKIE)?.value);
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "RESEND_API_KEY is not configured." }, { status: 503 });

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const subject = clean(body.subject, 180);
    const message = clean(body.message, 5000);
    const target = clean(body.target, 50);
    if (!subject || !message) return NextResponse.json({ error: "Add a subject and message." }, { status: 400 });
    if (target !== "all" && !MARKET_VENDOR_STATUSES.includes(target as (typeof MARKET_VENDOR_STATUSES)[number])) {
      return NextResponse.json({ error: "Choose a valid recipient group." }, { status: 400 });
    }

    const filter = target === "all" ? "" : `&status=eq.${encodeURIComponent(target)}`;
    const rows = await supabaseRest<MarketVendorRow[]>(
      `amity_market_vendor_applications?select=id,contact_name,business_name,email,status&email=not.is.null${filter}&order=created_at.asc`,
    );
    const recipients = rows.filter((row) => row.email && !["declined", "cancelled"].includes(row.status));
    if (!recipients.length) return NextResponse.json({ error: "No vendors match that group." }, { status: 400 });

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL ?? "promote@naturalstatetourismproject.org";
    const replyTo = process.env.NATURAL_STATE_CONTACT_EMAIL ?? "naturalstatetourismproject@gmail.com";

    const emails = recipients.map((vendor) => ({
      from,
      to: vendor.email,
      replyTo,
      subject,
      text: message
        .replaceAll("{{name}}", vendor.contact_name)
        .replaceAll("{{business}}", vendor.business_name || vendor.contact_name),
    }));

    const result = await resend.batch.send(emails);
    if (result.error) {
      throw new Error(result.error.message || "The vendor email batch could not be sent.");
    }

    const sent = recipients.length;
    const failed: string[] = [];

    if (/payment|permit/i.test(`${subject} ${message}`)) {
      const sentAt = new Date().toISOString();
      for (const vendor of recipients) {
        await supabaseRest(`amity_market_vendor_applications?id=eq.${encodeURIComponent(vendor.id)}`, {
          method: "PATCH",
          headers: { Prefer: "return=minimal" },
          body: JSON.stringify({ payment_email_sent_at: sentAt, updated_at: sentAt }),
        });
      }
    }

    return NextResponse.json({ ok: true, sent, failed });
  } catch (error) {
    console.error("Vendor email error", error);
    return NextResponse.json({ error: "The vendor email could not be sent." }, { status: 500 });
  }
}
