import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Events & Market Ideas | Town Square, River Days & Trade Days",
  description:
    "Find Amity, Arkansas event and market ideas tied to the town square, Caddo River traffic, local businesses, vendors, and a possible Trade Days-style revival.",
  keywords: [
    "Amity Arkansas events",
    "Amity Arkansas market",
    "Amity town square events",
    "Amity Trade Days revival",
    "Caddo River events Amity",
  ],
  alternates: { canonical: `${siteUrl}/events` },
};

const eventIdeas = [
  {
    title: "Second Saturday on the Square",
    text: "A small recurring market day would be easier to remember than one-off events. Vendors, yard-sale tables, food, old cars, local music, and kids activities could all scale up slowly.",
  },
  {
    title: "River & Square Day",
    text: "Tie the event to Caddo River traffic. People already coming toward Glenwood could stop in Amity for food, local booths, and the square before or after the river.",
  },
  {
    title: "Trade Days-style weekend",
    text: "A future version could borrow the clear idea of Amity Trade Days without pretending the old 54-acre market is instantly coming back.",
  },
];

export default function EventsPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Events & markets</span>
            <h1>Amity needs regular reasons for people to come into town.</h1>
            <p className="lead">
              Markets, vendor days, square events, and river-tied weekends give people a reason to come back on purpose. The first ones do not have to be huge. They just need to be clear, local, and easy to remember.
            </p>
            <p>
              Send real dates, vendor interest, fundraiser details, music nights, church sales, school events, food pop-ups, and sponsor questions as they come together.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/amity-market-date-vote" className="btn-primary">Vote on the Market Date</Link>
              <Link href="/submit-event" className="btn-secondary">Submit an Event Idea</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/TownSquare.jpg" alt="Amity Arkansas town square for future events" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Possible starts</span>
            <h2>Keep the first version simple.</h2>
            <p className="lead">
              The first event does not need to be huge. It needs to be clear, promoted, and repeatable enough that people know when to show up again.
            </p>
          </div>
          <div className="card-grid">
            {eventIdeas.map((idea) => (
              <div key={idea.title} className="note-card">
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container callout">
          <span className="eyebrow">Vendors, churches, schools, businesses, and sponsors</span>
          <h2>Have something that could bring people into Amity?</h2>
          <p>
            Send the idea. It could be a market, food pop-up, fundraiser, car meet, music night, church sale, school event, vendor day, cleanup day, or something tied to the Caddo River.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/amity-market-date-vote" className="btn-primary">Vote on the Date</Link>
            <Link href="/contact" className="btn-secondary">Ask About Sponsorship</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
