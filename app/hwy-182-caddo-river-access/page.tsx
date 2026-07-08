import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { riverAccessPoints, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Hwy 182 Caddo River Access | Amity Arkansas Lower Caddo",
  description:
    "Guide to the Hwy 182 Caddo River access north of Amity, Arkansas with cautious access notes, lower-Caddo planning, parking reminders, and links to Amity food stops.",
  keywords: [
    "Hwy 182 Caddo River access",
    "Amity Hwy 182 access",
    "Caddo River Amity Highway 182",
    "lower Caddo River float",
    "Amity Arkansas river access",
  ],
  alternates: { canonical: `${siteUrl}/hwy-182-caddo-river-access` },
};

const point = riverAccessPoints[0];

const detailCards = [
  {
    title: "Where it is",
    text: "State Highway 182 north of Amity, near the bridge over the Caddo River. Caddo River Camping & Canoe Rental lists the access as river right just below the bridge.",
  },
  {
    title: "What to verify",
    text: "Look for current signs, safe parking, water level, weather, and whether the spot is clear enough to use without blocking traffic or nearby property.",
  },
  {
    title: "How to treat it",
    text: "Keep it quiet. Pack out trash, do not park in the road, do not block gates, do not trespass, and do not use nearby private frontage as public river access.",
  },
];

export default function Hwy182AccessPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Hwy 182 Caddo River access</span>
            <h1>The Amity access point to check before you go.</h1>
            <p className="lead">
              Hwy 182 is the access point most visitors connect with Amity. It can be useful for lower-Caddo planning, but only when people park right, respect the water, and leave nearby private land alone.
            </p>
            <p>
              This spot is better for careful planning than for a casual swim day. Families looking for an easy public swimming area may be better off starting with better-known access around Glenwood.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/glenwood-to-amity-float-guide" className="btn-primary">Glenwood to Amity Float Notes</Link>
              <Link href="/restaurants" className="btn-secondary">Food in Amity</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src={point.image} alt={point.name} fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-grid">
          <div className="note-card">
            <span className="eyebrow small">Access note</span>
            <h2>{point.name}</h2>
            <p>{point.status}</p>
            <p style={{ marginTop: 14 }}><strong>Listed coordinates:</strong> {point.coordinates}</p>
          </div>
          <div className="note-card">
            <span className="eyebrow small">Not the right fit for</span>
            <h2>Do not turn it into a problem.</h2>
            <div className="chip-row" style={{ marginTop: 12 }}>
              {point.notBestFor.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Field notes</span>
            <h2>What to know before using this access.</h2>
          </div>
          <div className="card-grid">
            {detailCards.map((card) => (
              <div key={card.title} className="note-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <span className="eyebrow">Need a broader plan?</span>
          <h2>Check the full Amity access notes before you go.</h2>
          <p>
            Pair Hwy 182 with the broader access notes, fishing information, Glenwood planning, food stops, and private-land reminders before building a day around the lower Caddo.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/caddo-river-access-near-amity" className="btn-primary">Full Access Guide</Link>
            <Link href="/caddo-river-safety-private-land" className="btn-secondary">Safety & Land Notes</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
