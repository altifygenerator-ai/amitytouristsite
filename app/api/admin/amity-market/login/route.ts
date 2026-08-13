import { NextRequest, NextResponse } from "next/server";
import {
  createMarketAdminSession,
  MARKET_ADMIN_COOKIE,
  marketAdminConfigured,
  marketAdminPasswordMatches,
} from "@/lib/marketAdminAuth";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = String(form.get("password") || "");

  if (!marketAdminConfigured()) {
    return NextResponse.redirect(new URL("/admin/amity-market/login?error=config", request.url), 303);
  }
  if (!marketAdminPasswordMatches(password)) {
    return NextResponse.redirect(new URL("/admin/amity-market/login?error=password", request.url), 303);
  }

  const response = NextResponse.redirect(new URL("/admin/amity-market", request.url), 303);
  response.cookies.set(MARKET_ADMIN_COOKIE, createMarketAdminSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
