import { NextRequest, NextResponse } from "next/server";
import { MARKET_ADMIN_COOKIE } from "@/lib/marketAdminAuth";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/admin/amity-market/login", request.url), 303);
  response.cookies.set(MARKET_ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}
