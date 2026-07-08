import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Glenwood to Amity Float Guide | Lower Caddo River Arkansas",
  description:
    "Plan the lower Caddo River stretch from Glenwood toward Amity with cautious shuttle, access, water-level, and post-float Amity stop notes.",
  keywords: [
    "Glenwood to Amity float",
    "Caddo River Glenwood to Amity",
    "lower Caddo River float",
    "Caddo River Amity Arkansas",
    "Glenwood Arkansas float trip",
  ],
  alternates: { canonical: `${siteUrl}/glenwood-to-amity-float-guide` },
};

const floatNotes = [
  {
    title: "This is not the beginner default",
    text: "Most casual visitors should start with Glenwood outfitters and current local river advice. The Glenwood-to-Amity stretch makes more sense for people who already have a shuttle plan and understand legal access.",
  },
  {
    title: "Plan the take-out first",
    text: "Do not put in until you know where you can legally take out, where vehicles can park, and whether the route fits the water level that day.",
  },
  {
    title: "End the trip in town",
    text: "If the route brings you near Amity, build in a meal, drink, or square stop. That is how river traffic starts helping the town instead of just passing beside it.",
  },
];

export default function GlenwoodToAmityFloatGuidePage() {
  return (
    <main>
      <section className="section section-river">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Glenwood to Amity</span>
            <h1>A lower-Caddo float needs more planning than a quick swim stop.</h1>
            <p className="lead">
              The stretch from Glenwood toward Amity can be part of the bigger Caddo River story, but it should be treated as a float-planning route, not a casual “pull over anywhere” river day.
            </p>
            <p>
              Use Glenwood for outfitters, rentals, shuttles, and current river advice. Use Amity as the quieter lower-Caddo connection and a place to stop after the trip.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <a href="https://www.glenwoodarkansas.org/caddo-river" target="_blank" rel="noopener noreferrer" className="btn-primary">Glenwood River Guide</a>
              <Link href="/hwy-182-caddo-river-access" className="btn-secondary">Hwy 182 Access</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/CaddoRiverCanoe.webp" alt="Caddo River canoe near Glenwood and Amity Arkansas" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Before you float</span>
            <h2>Do the unexciting parts first.</h2>
            <p className="lead">
              The boring details are what keep a float from turning into a mess: water level, weather, access, parking, shuttle, and time.
            </p>
          </div>
          <div className="card-grid">
            {floatNotes.map((note) => (
              <div key={note.title} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-image">
          <Image src="/images/amity/CaddoRiver3.jpg" alt="Caddo River near Glenwood and Amity" fill sizes="100vw" />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">Good traffic, handled right</span>
          <h2>The river can feed Amity if the route is useful and respectful.</h2>
          <p>
            The river does not need more careless use. Amity needs thoughtful visitors who know where they are going, respect the water, and spend a little in town while they are close.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container callout">
          <span className="eyebrow">After the float</span>
          <h2>Put Amity into the plan before people head home.</h2>
          <p>
            A float route that ends near Amity pairs naturally with food, Slate Rock, the square, and future market days. Make the town part of the route before everyone heads home.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/restaurants" className="btn-primary">Food After the River</Link>
            <Link href="/amity-river-day-itinerary" className="btn-secondary">See the Itinerary</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
