import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Vendor Applications Paused | Amity Saturday Market",
  description:
    "Vendor applications for the Amity Saturday Market are currently paused because the September 19, 2026 market was postponed and no replacement date has been announced.",
  alternates: { canonical: `${siteUrl}/amity-saturday-market/vendor-registration` },
  robots: { index: false, follow: true },
};

export default function VendorRegistrationPage() {
  return (
    <main>
      <section className="section section-warm vendor-registration-intro">
        <div className="container narrow-container">
          <span className="eyebrow">Amity Saturday Market</span>
          <h1>Vendor applications are paused.</h1>
          <p className="lead">
            The September 19 market was postponed, and there is no replacement date yet. We have closed the public vendor form so nobody applies or sends information for an event that is not currently scheduled.
          </p>
          <div className="vendor-payment-pending">
            <strong>No vendor payment or permit action is due.</strong>
            <p>
              The previous $25 booth fee, permit-pickup instructions, setup details, and September deadlines are not active. If a new market date is confirmed later, this page will be updated before applications reopen.
            </p>
          </div>
          <div className="button-row" style={{ marginTop: 26 }}>
            <Link href="/amity-saturday-market" className="btn-primary">Read the Market Update</Link>
            <Link href="/events" className="btn-secondary">See Amity Events</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-container">
          <div className="note-card">
            <span className="eyebrow small">Future vendors</span>
            <h2>Check back after a new date is confirmed.</h2>
            <p>
              A future vendor application will include the actual event date, hours, booth size options, electricity information, food-vendor requirements, fees, permit details, parking, and setup expectations for that specific market.
            </p>
            <p>
              For another Amity event, business listing, or general project question, use the contact or event-submission pages instead of the paused market application.
            </p>
            <div className="button-row" style={{ marginTop: 20 }}>
              <Link href="/submit-event" className="btn-primary">Submit Another Event</Link>
              <Link href="/contact" className="btn-secondary">Contact the Project</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
