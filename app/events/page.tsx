import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Events & Saturday Market | Amity, Arkansas",
  description:
    "Follow the first Amity Saturday Market planned for September 19, 2026, plus local event submissions, vendor information, and future market ideas in Amity, Arkansas.",
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
            <h1>The first Amity Saturday Market is moving forward.</h1>
            <p className="lead">
              Saturday, September 19 is the working date for the first trial market around the Amity town square. Vendor interest came in fast, local property owners have offered space, and the city is on board with the project moving forward.
            </p>
            <p>
              We are still finishing the layout, vendor permit process, booth costs, electricity, and the other details that make the day run right. Vendor applications are open now with no payment due at the time of application.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/amity-saturday-market" className="btn-primary">See Market Details</Link>
              <Link href="/amity-saturday-market/vendor-registration" className="btn-secondary">Apply as a Vendor</Link>
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
            <span className="eyebrow">More than one day</span>
            <h2>If the first market works, there is room to build from it.</h2>
            <p className="lead">
              The first event is a trial. After that, the town, vendors, businesses, and organizers can look at what worked and decide whether seasonal markets, Christmas events, or a regular schedule make sense.
            </p>
          </div>
          <div className="three-grid">
            <div className="note-card"><h3>Local events</h3><p>Send real dates for fundraisers, church events, school activities, food pop-ups, music, and other things happening around Amity.</p></div>
            <div className="note-card"><h3>Vendor markets</h3><p>The September trial will give us real numbers on space, turnout, vendor needs, and what the square can comfortably support.</p></div>
            <div className="note-card"><h3>Trade Days spirit</h3><p>Amity does not need to copy the old 54-acre market overnight. A smaller event can still give people a reason to come back into town.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container callout">
          <span className="eyebrow">Have another event?</span>
          <h2>Send it our way.</h2>
          <p>Natural State Tourism Project can add real local events to the Amity guide as dates and details are confirmed.</p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/submit-event" className="btn-primary">Submit an Event</Link>
            <Link href="/contact" className="btn-secondary">Ask About Sponsorship</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
