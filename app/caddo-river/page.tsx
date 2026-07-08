import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { riverAccessPoints, riverGuideLinks, riverNotes, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Caddo River Near Amity Arkansas | Lower Caddo Access & Planning",
  description:
    "Plan the quieter lower-Caddo side near Amity, Arkansas with Hwy 182 access notes, Glenwood-to-Amity float planning, fishing, safety reminders, and local food stops.",
  keywords: [
    "Caddo River Amity Arkansas",
    "Caddo River access near Amity",
    "Hwy 182 Caddo River access",
    "Glenwood to Amity float",
    "Caddo River near Glenwood Arkansas",
    "Amity Arkansas river access",
  ],
  alternates: { canonical: `${siteUrl}/caddo-river` },
};

export default function CaddoRiverPage() {
  return (
    <main>
      <section className="section section-river">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Caddo River near Amity</span>
            <h1>The lower-Caddo side of the trip starts here.</h1>
            <p className="lead">
              Glenwood is still the main float hub. Amity is the quieter lower-Caddo stop just down the road, with a Hwy 182 access point to verify before you go and a town that could use more river traffic coming back through.
            </p>
            <p>
              Start with access notes, fishing ideas, float planning, safety reminders, and nearby food stops before you build the day around the lower Caddo.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/caddo-river-access-near-amity" className="btn-primary">Access Near Amity</Link>
              <Link href="/amity-river-day-itinerary" className="btn-secondary">Plan a River Day</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/CaddoRiver4.webp" alt="Quiet Caddo River water near Amity Arkansas" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Start with the right river question</span>
            <h2>Access, fishing, float notes, and a simple day plan.</h2>
            <p className="lead">
              Most people do not need a big sales pitch. They need to know where to start, what is public, what is private, and where to go after the river.
            </p>
          </div>
          <div className="card-grid">
            {riverGuideLinks.map((link) => (
              <Link key={link.href} href={link.href} className="note-card link-card">
                <h3>{link.title}</h3>
                <p>{link.text}</p>
                <strong>Read more →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-image">
          <Image src="/images/amity/CaddoRiverTrees.jpg" alt="Trees along the Caddo River near Amity Arkansas" fill sizes="100vw" />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">Public access is not a guess</span>
          <h2>Use what can be verified. Leave the rest alone.</h2>
          <p>
            The Caddo River has public access points, private frontage, changing water, and places that can be misunderstood fast. Check the signs on the ground and leave private land alone.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Access point to know</span>
            <h2>Hwy 182 north of Amity.</h2>
            <p className="lead">
              This is the Amity-side access point most worth building around, but it still needs the same common-sense checks: signage, parking, water level, weather, and landowner respect.
            </p>
          </div>
          <div className="card-grid">
            {riverAccessPoints.map((point) => (
              <Link key={point.slug} href={`/${point.slug}`} className="feature-card">
                <div className="feature-card-image">
                  <Image src={point.image} alt={point.name} fill sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <div className="feature-card-body">
                  <span className="eyebrow small">{point.status}</span>
                  <h3>{point.name}</h3>
                  <p>{point.location}</p>
                  <strong>View access notes →</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">River notes</span>
            <h2>How to use the Amity side well.</h2>
          </div>
          <div className="card-grid">
            {riverNotes.map((note) => (
              <div key={note.title} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
