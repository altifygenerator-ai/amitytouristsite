import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity River Day Itinerary | Caddo River, Food & Town Square",
  description:
    "Plan a simple Amity, Arkansas river day with lower-Caddo access notes, Glenwood planning, food stops, the town square, and nearby Lake Greeson routes.",
  keywords: [
    "Amity Arkansas river day",
    "Caddo River itinerary Amity",
    "things to do near Amity Arkansas",
    "Glenwood to Amity day trip",
    "food after Caddo River Amity",
  ],
  alternates: { canonical: `${siteUrl}/amity-river-day-itinerary` },
};

const itinerary = [
  {
    time: "Before you go",
    title: "Check the river and access",
    text: "Look at weather, water levels, and current access notes. If you need rentals, shuttles, or outfitter help, start with Glenwood and make sure your take-out is legal.",
    href: "/caddo-river-access-near-amity",
  },
  {
    time: "Midday",
    title: "Come through Amity for food",
    text: "Build lunch, pizza, a cafe stop, or Slate Rock into the day. That is how river traffic starts helping the town instead of just passing nearby.",
    href: "/restaurants",
  },
  {
    time: "Afternoon",
    title: "Walk the square or keep the drive going",
    text: "Take a slower look at the square, read the town history, or use Amity as the link between Glenwood, Lake Greeson, Daisy State Park, Murfreesboro, Mount Ida, and Hot Springs.",
    href: "/history",
  },
  {
    time: "Next time",
    title: "Come back for a market or local event",
    text: "Come back when there is a market day, vendor row, Trade Days-style weekend, or town-square event on the calendar.",
    href: "/events",
  },
];

export default function AmityRiverDayItineraryPage() {
  return (
    <main>
      <section className="section section-river">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Amity river day</span>
            <h1>A simple Amity day around the river, food, and the square.</h1>
            <p className="lead">
              The best Amity day is not complicated. Check the river, respect access, come into town for food, look around the square, and leave a little money with local businesses.
            </p>
            <p>
              Keep it easy: plan the water first, then build in a meal, a local stop, and a little time before you head back toward Glenwood, Lake Greeson, or home.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/caddo-river-access-near-amity" className="btn-primary">Start with Access Notes</Link>
              <Link href="/restaurants" className="btn-secondary">Find Food Stops</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/townsquarecircle.jpg" alt="Amity Arkansas town square circle" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container timeline">
          {itinerary.map((step) => (
            <div key={step.title} className="timeline-item">
              <div className="timeline-image">
                <Image src="/images/amity/CaddoRiver4.webp" alt={step.title} fill sizes="(max-width: 760px) 100vw, 280px" />
              </div>
              <div>
                <span className="eyebrow small">{step.time}</span>
                <h2>{step.title}</h2>
                <p style={{ marginTop: 12 }}>{step.text}</p>
                <Link href={step.href} className="mini-button" style={{ marginTop: 18 }}>Open this stop</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-warm">
        <div className="container callout">
          <span className="eyebrow">Make it worth repeating</span>
          <h2>A one-time stop is good. A regular habit is better.</h2>
          <p>
            River access, food, the square, and regular market days give visitors more than one reason to remember Amity after the trip is over.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/amity-trade-days" className="btn-primary">Trade Days Story</Link>
            <Link href="/contact" className="btn-secondary">Sponsor or Send an Idea</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
