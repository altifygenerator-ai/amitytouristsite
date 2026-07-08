import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { riverAccessPoints, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Caddo River Access Near Amity Arkansas | Hwy 182 Notes",
  description:
    "Find Caddo River access notes near Amity, Arkansas, including the Hwy 182 access point, private land reminders, parking cautions, and lower-Caddo planning links.",
  keywords: [
    "Caddo River access near Amity",
    "Hwy 182 Caddo River access",
    "Amity Arkansas river access",
    "Caddo River Amity Arkansas",
    "lower Caddo River access",
  ],
  alternates: { canonical: `${siteUrl}/caddo-river-access-near-amity` },
};

const planningNotes = [
  {
    title: "Reported public access",
    text: "Caddo River Camping & Canoe Rental lists an Amity access at State Highway 182 north of town, on river right just below the bridge. The Encyclopedia of Arkansas also has a 2023 Amity Access photo at the Highway 182 bridge.",
  },
  {
    title: "Still check it in person",
    text: "Online listings are useful, but they do not replace current signs, parking conditions, water levels, road work, or local rules. Scout the access before building a whole day around it.",
  },
  {
    title: "Do not wander onto private land",
    text: "The Amity side of the Caddo has private frontage nearby. Stay where access is legal, do not cross fences, and do not turn a quiet place into a problem for the people who live there.",
  },
];

export default function CaddoAccessNearAmityPage() {
  const hwy182 = riverAccessPoints[0];

  return (
    <main>
      <section className="section section-river">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Caddo River access near Amity</span>
            <h1>Start with Hwy 182, then check the conditions in front of you.</h1>
            <p className="lead">
              The strongest Amity-side river access note is the Hwy 182 crossing north of town. It is listed by a local outfitter and documented in the Encyclopedia of Arkansas, but access only stays useful when people respect the river and the land around it.
            </p>
            <p>
              Check signs, parking, weather, and water before you unload. Do not cross posted property, block the road, or treat a quiet riverbank like a public campground.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/hwy-182-caddo-river-access" className="btn-primary">Hwy 182 Access Details</Link>
              <Link href="/caddo-river-safety-private-land" className="btn-secondary">Safety & Private Land</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/CaddoRiver4.webp" alt="Caddo River near Amity Arkansas" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Known access note</span>
            <h2>{hwy182.name}</h2>
            <p className="lead">{hwy182.location}</p>
          </div>
          <div className="two-grid">
            <div className="note-card">
              <h3>Status</h3>
              <p>{hwy182.status}</p>
              <p style={{ marginTop: 14 }}><strong>Coordinates listed by outfitter:</strong> {hwy182.coordinates}</p>
            </div>
            <div className="note-card">
              <h3>Best fit</h3>
              <div className="chip-row" style={{ marginTop: 12 }}>
                {hwy182.bestFor.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Before you use it</span>
            <h2>Three things worth saying plainly.</h2>
          </div>
          <div className="card-grid">
            {planningNotes.map((note) => (
              <div key={note.title} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <span className="eyebrow">Bring the river day back to town</span>
          <h2>After the access point, come into Amity.</h2>
          <p>
            The access point brings you close to town. Food, local businesses, events, and the square are the next stops that help Amity when you are already nearby.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/restaurants" className="btn-primary">Food After the River</Link>
            <Link href="/amity-river-day-itinerary" className="btn-secondary">River Day Itinerary</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
