import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "2026 Amity Market Date Vote Archive",
  description:
    "Archive of the 2026 Amity market date vote. September 19 received the most support, but the planned market was later postponed and no replacement date has been announced.",
  alternates: { canonical: `${siteUrl}/amity-market-date-vote` },
  robots: { index: false, follow: true },
  openGraph: {
    title: "2026 Amity Market Date Vote Archive",
    description:
      "September 19 won the community date vote, but the planned market was later postponed. Follow the current market page for any future update.",
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
  { date: "September 19", votes: 19, winner: true },
  { date: "October 10", votes: 13, winner: false },
  { date: "November 7", votes: 7, winner: false },
];

export default function AmityMarketDateVotePage() {
  return (
    <main>
      <section className="section section-warm market-vote-hero">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Archive · voting closed</span>
            <h1>September 19 won the vote, but the market was later postponed.</h1>
            <p className="lead">
              This page is being kept as a record of the 2026 community date vote. September 19 received the most support, but that planned market did not move forward and there is no replacement date at this time.
            </p>
            <p>
              The current market page is the source of truth for any future announcement. Old vote results should not be read as an active event schedule.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/amity-saturday-market" className="btn-primary">Read the Current Market Update</Link>
              <Link href="/events" className="btn-secondary">See Amity Events</Link>
            </div>
          </div>

          <div className="image-panel market-vote-image">
            <Image
              src="/images/amity/TownSquare.jpg"
              alt="Amity Arkansas town square"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="market-vote-image-note">
              <span>2026 vote result</span>
              <strong>September 19 · later postponed</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Final vote archive</span>
            <h2>September received the strongest support.</h2>
            <p>After removing test and administrative entries, 39 valid votes were counted.</p>
          </div>

          <div className="three-grid market-results-grid">
            {results.map((result) => (
              <article
                key={result.date}
                className={`note-card market-result-card ${result.winner ? "market-result-winner" : ""}`}
              >
                <span className="eyebrow small">{result.winner ? "Selected in the vote" : "Community vote"}</span>
                <h3>{result.date}</h3>
                <p className="market-result-total">
                  <strong>{result.votes}</strong> {result.votes === 1 ? "vote" : "votes"}
                </p>
                {result.winner ? <p>The date was selected in the vote, but the planned market was later postponed.</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container callout">
          <span className="eyebrow">Current status</span>
          <h2>No replacement market date has been announced.</h2>
          <p>
            Vendor applications are paused. Follow the current market page rather than this archived vote page for any future date, registration, fee, permit, or setup information.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/amity-saturday-market" className="btn-primary">Current Market Status</Link>
            <Link href="/contact" className="btn-secondary">Contact the Project</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
