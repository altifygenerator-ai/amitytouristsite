import { NextRequest, NextResponse } from "next/server";
import { MARKET_ADMIN_COOKIE, marketAdminSessionValid } from "@/lib/marketAdminAuth";
import {
  MARKET_PAYMENT_STATUSES,
  MARKET_PERMIT_STATUSES,
  MARKET_VENDOR_STATUSES,
  type MarketPaymentStatus,
  type MarketPermitStatus,
  type MarketVendorRow,
  type MarketVendorStatus,
} from "@/lib/marketVendor";
import { getSupabaseConfig, supabaseRest } from "@/lib/supabaseRest";

export const dynamic = "force-dynamic";

function authorized(request: NextRequest) {
  return marketAdminSessionValid(request.cookies.get(MARKET_ADMIN_COOKIE)?.value);
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function GET(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!getSupabaseConfig()) return NextResponse.json({ error: "Supabase is not configured." }, { status: 503 });

  try {
    const rows = await supabaseRest<MarketVendorRow[]>(
      "amity_market_vendor_applications?select=*&order=created_at.desc",
    );
    return NextResponse.json({ rows }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Vendor applications could not be loaded." }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const id = clean(body.id, 80);
    if (!/^[0-9a-f-]{36}$/i.test(id)) return NextResponse.json({ error: "Invalid vendor id." }, { status: 400 });

    const status = clean(body.status, 40) as MarketVendorStatus;
    const paymentStatus = clean(body.paymentStatus, 40) as MarketPaymentStatus;
    const permitStatus = clean(body.permitStatus, 40) as MarketPermitStatus;
    if (!MARKET_VENDOR_STATUSES.includes(status)) return NextResponse.json({ error: "Invalid vendor status." }, { status: 400 });
    if (!MARKET_PAYMENT_STATUSES.includes(paymentStatus)) return NextResponse.json({ error: "Invalid payment status." }, { status: 400 });
    if (!MARKET_PERMIT_STATUSES.includes(permitStatus)) return NextResponse.json({ error: "Invalid permit status." }, { status: 400 });

    const payload = {
      status,
      payment_status: paymentStatus,
      permit_status: permitStatus,
      booth_number: clean(body.boothNumber, 50) || null,
      admin_notes: clean(body.adminNotes, 1200) || null,
      updated_at: new Date().toISOString(),
    };

    const rows = await supabaseRest<MarketVendorRow[]>(
      `amity_market_vendor_applications?id=eq.${encodeURIComponent(id)}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(payload),
      },
    );

    return NextResponse.json({ ok: true, row: rows[0] ?? null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Vendor update could not be saved." }, { status: 500 });
  }
}
