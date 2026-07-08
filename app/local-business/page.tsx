import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import { featuredBusinesses, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Local Businesses in Amity Arkansas | Food, Stops & Visitor Info",
  description:
    "Find local businesses in Amity, Arkansas near Glenwood and the Caddo River, including food, drinks, useful local stops, and businesses visitors can support.",
  keywords: [
    "Amity Arkansas local businesses",
    "businesses in Amity Arkansas",
    "Amity Arkansas restaurants",
    "local stops near Glenwood Arkansas",
    "Caddo River local businesses",
  ],
  alternates: { canonical: `${siteUrl}/local-business` },
};

export default function LocalBusinessPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Amity local businesses</span>
            <h1>Find the small stops that keep Amity useful.</h1>
            <p className="lead">
              Amity does not have a long strip of open storefronts right now. That makes the places still operating more important, not less. Check them before or after a Caddo River day, a Glenwood weekend, or a slow drive through Clark County.
            </p>
            <p>
              Start with the businesses listed here, check current hours before making a special trip, and send updates if something needs corrected.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/restaurants" className="btn-primary">Find Food & Drinks</Link>
              <Link href="/contact" className="btn-secondary">Add or Update a Business</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/TownSquare.jpg" alt="Amity Arkansas town square and local business area" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Listed stops</span>
            <h2>Places to check while you are in town.</h2>
            <p className="lead">
              Start with the basics, then check the contact page if your business needs to be added, corrected, featured, or sponsored.
            </p>
          </div>
          <div className="card-grid">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.slug} business={business} page="/local-business" placement="local-business-directory" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container two-grid">
          <div className="note-card">
            <span className="eyebrow small">For visitors</span>
            <h2>Small purchases matter here.</h2>
            <p>
              In a small town, a pizza order, a drink, a cafe stop, or a quick errand can help keep the lights on and give the next visitor another reason to stop.
            </p>
          </div>
          <div className="note-card">
            <span className="eyebrow small">For business owners</span>
            <h2>Get listed or featured.</h2>
            <p>
              Send your business details, a correction, a photo, or a sponsorship question. Better local information helps people already coming near Glenwood and the Caddo River find Amity too.
            </p>
            <div className="button-row" style={{ marginTop: 22 }}>
              <Link href="/contact" className="btn-primary">Get Listed</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
