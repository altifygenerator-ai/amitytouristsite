import type { Metadata } from "next";
import Link from "next/link";
import VendorApplicationForm from "@/components/VendorApplicationForm";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Vendor Application | Amity Saturday Market",
  description: "Apply to be a vendor at the first Amity Saturday Market planned for September 19, 2026.",
  alternates: { canonical: `${siteUrl}/amity-saturday-market/vendor-registration` },
  robots: { index: false, follow: true },
};

export default function VendorRegistrationPage() {
  return (
    <main>
      <section className="section section-warm vendor-registration-intro">
        <div className="container narrow-container">
          <span className="eyebrow">September 19 · Amity, Arkansas</span>
          <h1>Apply for a vendor space.</h1>
          <p className="lead">
            We’re putting together the first Amity Saturday Market around the town square. If you make it, grow it, bake it, collect it, sell it, or have a local service people should know about, tell us what you’d like to bring.
          </p>
          <div className="vendor-payment-pending">
            <strong>No payment is due with this application.</strong>
            <p>
              There is no payment due with the application. Approved vendors will pay one flat $25 market fee per booth. There is no additional City of Amity permit charge to approved vendors for this first market. Natural State Tourism Project will cover the permit cost, and vendors who need one will pick it up from Amity City Hall before market day.
            </p>
          </div>
          <Link href="/amity-saturday-market" className="text-link">← Back to market details</Link>
        </div>
      </section>

      <section className="section">
        <div className="container vendor-registration-layout">
          <VendorApplicationForm />
          <aside className="vendor-registration-aside">
            <span className="eyebrow small">Good to know</span>
            <h2>Keep the setup simple.</h2>
            <div className="vendor-side-list">
              <div><strong>Standard space</strong><p>We’re planning around 10×10 vendor spaces. Ask if you need more room.</p></div>
              <div><strong>Bring your setup</strong><p>Most vendors should bring their own canopy, proper weights, tables, chairs, displays, and payment setup.</p></div>
              <div><strong>Power is limited</strong><p>If you need electricity, tell us exactly what you plan to plug in so we can place powered booths carefully.</p></div>
              <div><strong>Food vendors</strong><p>Food trucks and food booths are welcome to apply. We’ll follow up about space and any permit requirements that apply to your setup.</p></div>
              <div><strong>Direct sales</strong><p>We plan to limit duplicate direct-sales companies so two vendors are not selling the exact same brand.</p></div>
              <div><strong>Simple $25 market fee</strong><p>An application puts you in the review list. Approved vendors pay one flat $25 market fee per booth. There is no separate City permit charge to the vendor for this first market.</p></div>
              <div><strong>Permit pickup</strong><p>If you need a City of Amity vendor permit, Natural State Tourism Project will cover the cost and send you pickup details. You will just need to pick it up from Amity City Hall before the market.</p></div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
