import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Near Glenwood Arkansas | Quiet Side Trip from the Caddo River",
  description:
    "Plan a short side trip from Glenwood, Arkansas to Amity for local food, Slate Rock Brewing, small-town history, quiet roads, and a calmer Caddo River area stop.",
  keywords: [
    "Amity near Glenwood Arkansas",
    "towns near Glenwood Arkansas",
    "Glenwood Arkansas side trip",
    "Caddo River side trip",
    "Slate Rock Brewing near Glenwood",
    "Amity Arkansas tourism",
  ],
  alternates: { canonical: `${siteUrl}/near-glenwood` },
};

const reasons = [
  {
    title: "Close enough to be easy",
    text:
      "Amity is about seven miles from Glenwood, so it does not need to be a separate trip. It can be the extra stop that makes a Glenwood river day feel more local.",
  },
  {
    title: "Another place to spend local",
    text:
      "People already come nearby for cabins, float trips, family visits, and weekend drives. A little of that traffic can help Amity businesses stay visible.",
  },
  {
    title: "A quieter layer of the trip",
    text:
      "Glenwood has the stronger tourism pull. Amity adds the slower part: an old square, a brewery stop, pizza, cafe food, a pub, and quiet river-country roads.",
  },
];

export default function NearGlenwoodPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Near Glenwood</span>
            <h1>Amity makes sense as Glenwood's quiet side trip.</h1>
            <p className="lead">
              Most visitors come to this area for Glenwood and the Caddo River.
              Amity gives them a small, calm add-on: local food, Slate Rock Brewing,
              town history, and a quieter way to stretch the day.
            </p>
            <p>
              Come over after the river, before the lake, between errands, or when
              you want a stop that still feels like a real small town instead of a
              packed tourist strip.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <a href="https://www.glenwoodarkansas.org" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Glenwood
              </a>
              <Link href="/restaurants" className="btn-secondary">
                Amity food stops
              </Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/CaddoRiver3.jpg" alt="Caddo River near Glenwood and Amity Arkansas" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why connect the two towns</span>
            <h2>Glenwood brings people close. Amity gives them another reason to stay out a little longer.</h2>
          </div>
          <div className="card-grid">
            {reasons.map((reason) => (
              <div key={reason.title} className="note-card">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-image">
          <Image src="/images/amity/TownSquare.jpg" alt="Amity Arkansas town square a short drive from Glenwood" fill sizes="100vw" />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">The simple trip</span>
          <h2>Stay near Glenwood. Stop in Amity. Keep the day local.</h2>
          <p>
            A short detour can turn into lunch, a drink, a photo, a quiet road, or
            a better memory of the area. That is the kind of tourism Amity can use.
          </p>
        </div>
      </section>
    </main>
  );
}
