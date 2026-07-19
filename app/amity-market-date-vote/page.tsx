import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MarketDatePoll from "@/components/MarketDatePoll";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Vote on the First Amity Market Date",
  description:
    "Vote for the Saturday that works best for the first Amity market trial and help Natural State Tourism Project compare vendor and community availability.",
  alternates: { canonical: `${siteUrl}/amity-market-date-vote` },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Help Choose the First Amity Market Date",
    description:
      "Vendors, locals, businesses, sponsors, and future visitors can vote for the Saturday that works best.",
    url: `${siteUrl}/amity-market-date-vote`,
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

export default function AmityMarketDateVotePage() {
  return (
    <main>
      <section className="section section-warm market-vote-hero">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Amity market planning</span>
            <h1>Help us choose the first market date.</h1>
            <p className="lead">
              One of the possible vendors suggested putting the date to a vote, and that felt like the right call. The people who may set up, shop, sponsor, or help should have a voice in which Saturday gets the strongest start.
            </p>
            <p>
              This does not make the winning date official by itself. We still have to compare the vote with vendor schedules, nearby events, the final layout, and city requirements. It gives us a much better picture than guessing.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <a href="#vote" className="btn-primary">Vote on the Date</a>
              <Link href="/events" className="btn-secondary">Read About the Market Plans</Link>
            </div>
          </div>

          <div className="image-panel market-vote-image">
            <Image
              src="/images/amity/TownSquare.jpg"
              alt="Amity Arkansas town square where a future market may be held"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="market-vote-image-note">
              <span>Still in planning</span>
              <strong>Three Saturdays are under consideration.</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="vote" className="section">
        <div className="container">
          <MarketDatePoll />
        </div>
      </section>

      <section className="section section-river">
        <div className="container two-grid">
          <div className="note-card">
            <span className="eyebrow small">Potential vendors</span>
            <h3>Your vote carries extra planning value.</h3>
            <p>
              Choose the date that gives you the best chance of attending. Use the note box for a second choice, a known event conflict, electricity needs, or anything else that would help with the vendor layout.
            </p>
          </div>
          <div className="note-card">
            <span className="eyebrow small">Locals and visitors</span>
            <h3>Tell us when you would actually come.</h3>
            <p>
              The first market does not need a giant crowd. It needs a good mix of vendors, local support, and enough people walking through town to make the day worth doing again.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <span className="eyebrow">Want to be involved beyond voting?</span>
          <h2>We are still talking with vendors, local businesses, helpers, and sponsors.</h2>
          <p>
            Send us what you sell, how you would like to help, or what kind of local support your business may be able to offer. We will follow up as the date and event details are narrowed down.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary">Contact the Project</Link>
            <Link href="/submit-event" className="btn-secondary">Share an Event Idea</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
