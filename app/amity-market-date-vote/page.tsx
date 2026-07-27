import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "First Amity Market Date Announced",
  description:
    "The community vote is complete. Saturday, September 19, 2026 was selected for the first Amity market trial.",
  alternates: {
    canonical: `${siteUrl}/amity-market-date-vote`,
  },
  openGraph: {
    title: "The First Amity Market Date Has Been Chosen",
    description:
      "Saturday, September 19, 2026 received the most community support for the first Amity market trial.",
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

const results = [
  {
    date: "September 19",
    votes: 19,
    winner: true,
  },
  {
    date: "October 10",
    votes: 13,
    winner: false,
  },
  {
    date: "November 7",
    votes: 7,
    winner: false,
  },
];

export default function AmityMarketDateVotePage() {
  return (
    <main>
      <section className="section section-warm market-vote-hero">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Voting is closed</span>

            <h1>The first Amity market date has been chosen.</h1>

            <p className="lead">
              Saturday, September 19, 2026 received the most support from
              potential vendors, local residents, businesses, and people
              planning to attend.
            </p>

            <p>
              Thank you to everybody who took the time to vote, leave a note,
              point out scheduling conflicts, or tell us what would give them
              the best chance of taking part.
            </p>

            <p>
              The vote gave us a much clearer picture of what works for the
              community. We can now move forward with the rest of the planning,
              including the location, vendor layout, sponsors, setup details,
              and what kind of help will be needed on the day.
            </p>

            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/events" className="btn-primary">
                Follow the Market Plans
              </Link>

              <Link href="/contact" className="btn-secondary">
                Vendor or Sponsor Interest
              </Link>
            </div>
          </div>

          <div className="image-panel market-vote-image">
            <Image
              src="/images/amity/TownSquare.jpg"
              alt="Amity Arkansas town square where the first market trial is being planned"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />

            <div className="market-vote-image-note">
              <span>Winning date</span>
              <strong>Saturday, September 19, 2026</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Final vote</span>
            <h2>September received the strongest support.</h2>
            <p>
              After removing test and administrative entries, 39 valid votes
              were counted.
            </p>
          </div>

          <div className="three-grid market-results-grid">
            {results.map((result) => (
              <article
                key={result.date}
                className={`note-card market-result-card ${
                  result.winner ? "market-result-winner" : ""
                }`}
              >
                <span className="eyebrow small">
                  {result.winner ? "Selected date" : "Community vote"}
                </span>

                <h3>{result.date}</h3>

                <p className="market-result-total">
                  <strong>{result.votes}</strong>{" "}
                  {result.votes === 1 ? "vote" : "votes"}
                </p>

                {result.winner && (
                  <p>
                    This is the date we are moving forward with for the first
                    Amity market trial.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container two-grid">
          <div className="note-card">
            <span className="eyebrow small">Potential vendors</span>

            <h3>We will be reaching out as the layout comes together.</h3>

            <p>
              We have heard from people interested in bringing food, produce,
              handmade goods, jewelry, thrift and resale items, baked goods,
              boutique clothing, sharpening services, pumpkins, soaps, quilts,
              and other locally made or useful items.
            </p>

            <p>
              Vendors can still contact us with what they sell, how much room
              they need, and whether electricity or another accommodation may
              be needed.
            </p>
          </div>

          <div className="note-card">
            <span className="eyebrow small">Sponsors and helpers</span>

            <h3>A small market still takes people willing to help.</h3>

            <p>
              We are still looking for local businesses, sponsors, volunteers,
              and community members who may be able to help with promotion,
              setup, cleanup, signage, tables, supplies, or other practical
              needs.
            </p>

            <p>
              The goal is to start at a size Amity can handle, give vendors a
              good day, and build something worth doing again.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <span className="eyebrow">Saturday, September 19, 2026</span>

          <h2>Now the real planning starts.</h2>

          <p>
            More information about the location, hours, vendor setup, sponsors,
            parking, and public event details will be shared as those pieces are
            confirmed.
          </p>

          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary">
              Contact the Project
            </Link>

            <Link href="/events" className="btn-secondary">
              See Amity Updates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}