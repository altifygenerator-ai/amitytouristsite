import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Fishing the Caddo River Near Amity Arkansas | Lower Caddo Notes",
  description:
    "Fishing notes for the Caddo River near Amity, Arkansas and the lower stretch above DeGray Lake, with access reminders, water-level cautions, and local Amity stops.",
  keywords: [
    "Caddo River fishing Amity Arkansas",
    "fishing near Amity Arkansas",
    "lower Caddo River fishing",
    "Caddo River smallmouth bass Arkansas",
    "fishing near Glenwood Arkansas",
  ],
  alternates: { canonical: `${siteUrl}/fishing-caddo-river-near-amity` },
};

const fishingNotes = [
  {
    title: "The Caddo is known for fishing",
    text: "Arkansas Tourism notes the Caddo above DeGray Lake for smallmouth and spotted bass, with seasonal white and hybrid striped bass above the lake in March and April, plus stream-running walleye.",
  },
  {
    title: "Access comes first",
    text: "Good fishing water does not mean every bank is open. Use legal access, respect signs, and do not cross private land to reach a bend that looks good from the road.",
  },
  {
    title: "Watch water and weather",
    text: "The Caddo can change after rain. Check conditions before wading, floating, or fishing from low banks, especially if you are not familiar with the lower stretch.",
  },
];

export default function FishingCaddoRiverNearAmityPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Fishing near Amity</span>
            <h1>The lower Caddo gives anglers another reason to look toward Amity.</h1>
            <p className="lead">
              Not every Caddo River visitor is looking for a rental float. Some are looking for a slower fishing day, a lower stretch to scout, or a quiet place to plan around the water above DeGray Lake.
            </p>
            <p>
              Keep the planning simple: verify legal access, check water, bring out your trash, and make Amity part of the stop before or after you fish.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/caddo-river-access-near-amity" className="btn-primary">Access Notes</Link>
              <Link href="/restaurants" className="btn-secondary">Food After Fishing</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/CaddoRiverTrees.jpg" alt="Caddo River trees and water near Amity Arkansas" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Fishing notes</span>
            <h2>Useful before you pick a spot.</h2>
          </div>
          <div className="card-grid">
            {fishingNotes.map((note) => (
              <div key={note.title} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container two-grid">
          <div className="note-card">
            <span className="eyebrow small">Good fit</span>
            <h2>Anglers who already plan ahead.</h2>
            <p>
              The Amity side is a better fit for people willing to check access, water, and parking than for folks looking for a heavily managed recreation area.
            </p>
          </div>
          <div className="note-card">
            <span className="eyebrow small">Local impact</span>
            <h2>Buy lunch, gas, or a drink in town.</h2>
            <p>
              Buy lunch, pick up supplies, or stop for a drink while you are close. A small stop matters more in Amity than it would in a bigger river town.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
