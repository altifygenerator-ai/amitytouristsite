import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Saturday Market | Project Update",
  description:
    "The September 19, 2026 Amity Saturday Market was postponed. No replacement date has been announced, and new vendor applications are paused while the project is revisited.",
  alternates: { canonical: `${siteUrl}/amity-saturday-market` },
  openGraph: {
    title: "Amity Saturday Market | Project Update",
    description:
      "The September 19 market was postponed. No replacement date is set yet, and vendor applications are paused for now.",
    url: `${siteUrl}/amity-saturday-market`,
    type: "website",
    images: [
      {
        url: "/images/amity/TownSquare.jpg",
        width: 1200,
        height: 630,
        alt: "Amity Arkansas town square",
      },
    ],
  },
};

export default function AmitySaturdayMarketPage() {
  return (
    <main>
      <section className="section section-warm market-event-hero">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Amity Saturday Market update</span>
            <h1>The market project is postponed for now.</h1>
            <p className="market-event-date">September 19, 2026 plan · postponed · new date TBD</p>
            <p className="lead">
              The first Amity Saturday Market did not move forward on September 19 as originally planned. The project is paused while timing, layout, vendor needs, and the practical pieces around the town square are revisited.
            </p>
            <p>
              There is no new market date to announce right now. New vendor applications are paused, and the site will not collect vendor fees or send permit instructions until a future date is actually confirmed.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/events" className="btn-primary">See Amity Event Updates</Link>
              <Link href="/contact" className="btn-secondary">Contact the Project</Link>
            </div>
          </div>

          <div className="image-panel market-event-image">
            <Image
              src="/images/amity/TownSquare.jpg"
              alt="Amity Arkansas town square"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="market-event-image-note">
              <span>Current status</span>
              <strong>Postponed · New date TBD</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Where things stand</span>
            <h2>The interest was real. The old date is not.</h2>
            <p className="lead">
              The original September plan drew strong vendor interest, but leaving an expired date online would only create confusion. This page is being kept as the permanent home for the project so any future market announcement can start from accurate information.
            </p>
          </div>

          <div className="three-grid market-event-cards">
            <article className="note-card">
              <span className="eyebrow small">Date</span>
              <h3>No replacement date yet</h3>
              <p>A new date will not be posted until the location, timing, and core operating details are confirmed.</p>
            </article>

            <article className="note-card">
              <span className="eyebrow small">Vendors</span>
              <h3>Applications are paused</h3>
              <p>The public vendor form is closed for now so nobody applies or pays toward an event that does not have a confirmed date.</p>
            </article>

            <article className="note-card">
              <span className="eyebrow small">Future plans</span>
              <h3>The idea can still be revisited</h3>
              <p>The goal is still a manageable local market that works with Amity businesses and gives people a reason to spend time around town when the logistics make sense.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container split-grid market-event-details">
          <div className="copy-block">
            <span className="eyebrow">What this means now</span>
            <h2>No active registration, fee, permit, or setup deadline.</h2>
            <p className="lead">
              The previous September 19 vendor instructions are no longer active. There is no current booth deadline, setup schedule, payment request, or City permit pickup tied to this project.
            </p>
            <p>
              If a new market date is approved later, the vendor page will reopen with updated hours, booth details, fees, permit information, electricity availability, parking, and setup instructions that match that specific event.
            </p>
            <div className="button-row" style={{ marginTop: 24 }}>
              <Link href="/amity-saturday-market/vendor-registration" className="btn-primary">Vendor Application Status</Link>
              <Link href="/submit-event" className="btn-secondary">Submit Another Event</Link>
            </div>
          </div>

          <div className="market-event-facts">
            <div><span>Original date</span><strong>September 19, 2026</strong></div>
            <div><span>Current status</span><strong>Postponed</strong></div>
            <div><span>Replacement date</span><strong>Not announced</strong></div>
            <div><span>Vendor applications</span><strong>Paused</strong></div>
            <div><span>Vendor payments</span><strong>Not being collected</strong></div>
            <div><span>Permit instructions</span><strong>Not active</strong></div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container callout">
          <span className="eyebrow">Future updates</span>
          <h2>This page will stay up so the next update has one clear home.</h2>
          <p>
            When there is a confirmed next step, it will be posted here and on the Amity events page. Until then, old September 19 details should be treated as archived planning information, not an upcoming event.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/events" className="btn-primary">See Amity Events</Link>
            <Link href="/contact" className="btn-secondary">Contact Natural State Tourism Project</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
