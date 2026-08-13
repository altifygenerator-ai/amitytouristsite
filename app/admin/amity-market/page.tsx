import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MarketVendorAdmin from "@/components/MarketVendorAdmin";
import { MARKET_ADMIN_COOKIE, marketAdminSessionValid } from "@/lib/marketAdminAuth";

export const metadata: Metadata = {
  title: "Amity Market Vendor Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function MarketAdminPage() {
  const store = await cookies();
  if (!marketAdminSessionValid(store.get(MARKET_ADMIN_COOKIE)?.value)) {
    redirect("/admin/amity-market/login");
  }
  return <main className="market-admin-page"><MarketVendorAdmin /></main>;
}
