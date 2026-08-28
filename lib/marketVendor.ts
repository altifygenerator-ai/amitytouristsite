export const MARKET_VENDOR_STATUSES = [
  "new",
  "contacted",
  "approved",
  "payment_pending",
  "confirmed",
  "waitlisted",
  "declined",
  "cancelled",
] as const;

export const MARKET_PAYMENT_STATUSES = [
  "pending_details",
  "payment_pending",
  "paid",
  "waived",
] as const;

export const MARKET_PERMIT_STATUSES = [
  "pending_details",
  "vendor_responsible",
  "sponsor_covered",
  "paid",
  "not_required",
] as const;

export const MARKET_VENDOR_CATEGORIES = [
  "Handmade / crafts",
  "Farm / produce / homestead",
  "Food / drink",
  "Boutique / clothing",
  "Antiques / resale / flea market",
  "Jewelry / stones / metalwork",
  "Home / bath / beauty",
  "Local service",
  "Church / school / community group",
  "Direct sales",
  "Other",
] as const;

export type MarketVendorStatus = (typeof MARKET_VENDOR_STATUSES)[number];
export type MarketPaymentStatus = (typeof MARKET_PAYMENT_STATUSES)[number];
export type MarketPermitStatus = (typeof MARKET_PERMIT_STATUSES)[number];

export type MarketVendorRow = {
  id: string;
  created_at: string;
  updated_at: string;
  contact_name: string;
  business_name: string | null;
  phone: string;
  email: string;
  website: string | null;
  vendor_category: string;
  products_description: string;
  booth_size: string;
  is_food_vendor: boolean;
  food_setup_details: string | null;
  needs_electricity: boolean;
  electricity_details: string | null;
  has_canopy: boolean;
  has_tables_chairs: boolean;
  interested_table_chair_rental: boolean;
  direct_sales_company: string | null;
  special_setup_needs: string | null;
  notes: string | null;
  status: MarketVendorStatus;
  payment_status: MarketPaymentStatus;
  permit_status: MarketPermitStatus;
  booth_number: string | null;
  admin_notes: string | null;
  payment_email_sent_at: string | null;
};

export function vendorStatusLabel(status: MarketVendorStatus) {
  const labels: Record<MarketVendorStatus, string> = {
    new: "New",
    contacted: "Contacted",
    approved: "Approved",
    payment_pending: "Payment Pending",
    confirmed: "Confirmed",
    waitlisted: "Waitlisted",
    declined: "Declined",
    cancelled: "Cancelled",
  };
  return labels[status];
}

export function paymentStatusLabel(status: MarketPaymentStatus) {
  const labels: Record<MarketPaymentStatus, string> = {
    pending_details: "Details Pending",
    payment_pending: "Payment Pending",
    paid: "Paid",
    waived: "Waived",
  };
  return labels[status];
}

export function permitStatusLabel(status: MarketPermitStatus) {
  const labels: Record<MarketPermitStatus, string> = {
    pending_details: "Details Pending",
    vendor_responsible: "Pickup Required",
    sponsor_covered: "Cost Covered",
    paid: "Paid",
    not_required: "Not Required",
  };
  return labels[status];
}
