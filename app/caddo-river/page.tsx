import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { riverNotes, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Caddo River Near Amity Arkansas | Quiet Access Notes & Glenwood Route",
  description:
    "Plan a quiet Caddo River stop near Amity, Arkansas with Glenwood float planning, river access reminders, fishing, wading, safety notes, and respectful public access tips.",
  keywords: [
    "Caddo River Amity Arkansas",
    "Caddo River access near Amity",
    "Caddo River near Glenwood Arkansas",
    "uncrowded Caddo River access",
    "Amity Arkansas river access",
    "Caddo River fishing Arkansas",
  ],
  alternates: { canonical: `${siteUrl}/caddo-river` },
};

const accessTips = [
  "Use Glenwood outfitters and current river information for full float planning.",
  "Treat Amity-area river stops as quiet places for fishing, wading, photos, and slow drives unless you have confirmed legal put-in and take-out access.",
  "Respect private land. Do not cross fences, block gates, park in driveways, or assume every gravel bar is public.",
  "Check water levels and weather. The Caddo can rise fast after heavy rain.",
];

export default function CaddoRiverPage() {
  return (
    <main>
      <section className="section section-river">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Caddo River near Amity</span>
            <h1>Quiet water, short drives, and a calmer side of the river.</h1>
            <p className="lead">
              The Caddo River is the outdoor thread that keeps Amity connected to
              the larger Glenwood area. Glenwood is the main float hub. Amity is
              the quieter river-country stop just down the road.
            </p>
            <p>
              Come here for the slower version of the day: country roads, water
              glimpses, fishing or wading where access is legal, and a calm place to
              breathe before heading back toward Glenwood, Lake Greeson, or home.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <a href="https://www.glenwoodarkansas.org/caddo-river" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Glenwood Caddo River info
              </a>
              <Link href="/restaurants" className="btn-secondary">
                Eat in Amity
              </Link>
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
            <span className="eyebrow">How it feels</span>
            <h2>Less crowd, more breathing room.</h2>
            <p className="lead">
              The Amity side feels quieter than the places most visitors already
              know. It is the kind of river area that works best when people keep
              it simple and respectful.
            </p>
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

      <section className="dark-band">
        <div className="dark-band-image">
          <Image src="/images/amity/CaddoRiverTrees.jpg" alt="Trees along the Caddo River near Amity Arkansas" fill sizes="100vw" />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">River etiquette</span>
          <h2>Quiet access stays good when people treat it carefully.</h2>
          <p>
            Do not block driveways, cross posted land, leave trash, or turn a calm
            place into a problem for the people who live nearby. A better river day
            starts with respect.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Before you go</span>
            <h2>River access reminders.</h2>
          </div>
          <div className="two-grid">
            {accessTips.map((tip) => (
              <div key={tip} className="info-card">
                <h3>Good to know</h3>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
