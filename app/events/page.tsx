import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Events & Market Updates | Amity, Arkansas",
  description:
    "Find Amity, Arkansas event updates, submit local events, and follow the Amity Saturday Market project. The September 19, 2026 market was postponed and no replacement date has been announced.",
  keywords: ["Amity Arkansas events", "Amity Saturday Market", "Amity Arkansas vendors", "Amity town square events"],
  alternates: { canonical: `${siteUrl}/events` },
};

export default function EventsPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Events & markets</span>
            <h1>The September 19 market was postponed.</h1>
            <p className="lead">
              The first Amity Saturday Market did not move forward on September 19 as originally planned. The market project is paused while timing and logistics are revisited, and no replacement date has been announced yet.
            </p>
            <p>
              New vendor applications are paused for now. The market page will stay online so the project has one clear place for future updates instead of leaving old event information scattered around the site.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/amity-saturday-market" className="btn-primary">Read the Market Update</Link>
              <Link href="/submit-event" className="btn-secondary">Submit Another Local Event</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/TownSquare.jpg" alt="Amity Arkansas town square" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What happens next</span>
            <h2>Keep the event calendar useful even while the market is paused.</h2>
            <p className="lead">
              The Amity guide can still help people find real local dates. Fundraisers, church events, school activities, food pop-ups, music, community days, and future market plans can all be added as details are confirmed.
            </p>
          </div>
          <div className="three-grid">
            <div className="note-card">
              <h3>Local events</h3>
              <p>Send confirmed dates and public details for events happening in or around Amity so visitors and residents have one more place to find them.</p>
            </div>
            <div className="note-card">
              <h3>Future market updates</h3>
              <p>The Saturday Market project can be revisited later without pretending an old date is still active. Any new date will be posted only after it is actually confirmed.</p>
            </div>
            <div className="note-card">
              <h3>Trade Days spirit</h3>
              <p>Amity does not need to recreate the old 54-acre market overnight. Smaller events can still give people a reason to come back into town when the timing is right.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container callout">
          <span className="eyebrow">Have an event to add?</span>
          <h2>Send the confirmed details.</h2>
          <p>Natural State Tourism Project can add real local events to the Amity guide as dates, locations, and public details are confirmed.</p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/submit-event" className="btn-primary">Submit an Event</Link>
            <Link href="/contact" className="btn-secondary">Ask About Sponsorship</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
