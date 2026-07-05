import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Get Listed in Amity Arkansas | Business Updates & Local Stories",
  description:
    "Share an Amity, Arkansas business, correction, local story, photo, or promotion request for the Amity Arkansas visitor guide near Glenwood and the Caddo River.",
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container">
          <span className="eyebrow">For Amity businesses and locals</span>
          <h1>Help more people find what is still here.</h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Have an open business, a local update, an old photo, a correction, or a
            story about Amity? Send it in so visitors coming from Glenwood, the
            Caddo River, Lake Greeson, and southwest Arkansas can find the town more
            easily.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-panel">
          <div className="contact-card">
            <h2>Share your business or local update.</h2>
            <p>
              Amity needs clear, current information online. If your business is
              open, if your hours changed, if you have photos to share, or if a
              local detail needs corrected, send it through the Natural State
              Tourism Project.
            </p>
            <p>
              The goal is simple: help visitors make the short drive from Glenwood,
              spend money in Amity, and see the town as more than a pass-through.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <a
                href="https://naturalstatetourismproject.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Contact Natural State Tourism Project
              </a>
              <a href="mailto:naturalstatetourismproject@gmail.com" className="btn-secondary">
                Email the project
              </a>
            </div>
          </div>

          <aside className="contact-card">
            <h3>What helps most</h3>
            <p>Business name, address, phone, website or Facebook link, hours, photos, and what people should know before they stop.</p>
            <p>For corrections, send the wrong detail and the correct one.</p>
            <p>For history or old photos, include names, dates, photo credit, and whether it is okay to share publicly.</p>
          </aside>
        </div>
      </section>

      <section className="section-river section">
        <div className="container callout">
          <span className="eyebrow">A better chance to be seen</span>
          <h2>Glenwood visitors are close enough to become Amity customers.</h2>
          <p>
            If your business can serve someone planning a Glenwood weekend, a Caddo
            River day, a Lake Greeson route, or a quiet small-town stop, let people
            know you are here.
          </p>
        </div>
      </section>
    </main>
  );
}
