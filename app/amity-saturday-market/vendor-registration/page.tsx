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
              We’re finalizing the booth charge and the City of Amity’s $25 vendor-permit process. Approved vendors will get the final amount and payment instructions by email before anything is due.
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
              <div><strong>Confirmation comes later</strong><p>An application puts you in the review list. Your booth is confirmed after approval and the final payment/permit steps are completed.</p></div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
