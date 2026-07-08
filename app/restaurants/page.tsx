import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import { featuredBusinesses, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Food & Drinks in Amity Arkansas | After the Caddo River",
  description:
    "Find food and drink stops in Amity, Arkansas near Glenwood and the Caddo River, including Slate Rock Brewing, Hometown Pizza, Trudy's, and local places to check before or after a river day.",
  keywords: [
    "Amity Arkansas restaurants",
    "food in Amity Arkansas",
    "Slate Rock Brewing Amity",
    "Hometown Pizza Amity Arkansas",
    "Trudy's Amity Arkansas",
    "restaurants near Glenwood Arkansas",
    "food after Caddo River",
  ],
  alternates: { canonical: `${siteUrl}/restaurants` },
};

const foodTips = [
  {
    title: "Check hours first",
    text: "Small-town hours can change, especially around weather, staffing, holidays, and slow seasons. Use the business links before making a special drive.",
  },
  {
    title: "Build it into the river day",
    text: "If you are already near Glenwood or the Caddo River, Amity is close enough for pizza, a cafe meal, or a drink without turning the day into a whole separate trip.",
  },
  {
    title: "Spend where it helps",
    text: "Amity is not crowded with options. That means every open local stop has more weight for the town and the people trying to keep it going.",
  },
];

export default function RestaurantsPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Food & local stops</span>
            <h1>Where to eat and stop in Amity.</h1>
            <p className="lead">
              Amity is small, so the food and drink stops that are open carry more weight. A meal here is not just convenient. It helps keep a quiet town visible for the next person coming through.
            </p>
            <p>
              Come over from Glenwood after the river, before heading toward Lake Greeson, or when you want a slower meal that still feels local.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/amity-river-day-itinerary" className="btn-primary">Plan a River Day</Link>
              <Link href="/local-business" className="btn-secondary">All Local Stops</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/hometown-pizza.jpg" alt="Local pizza stop in Amity Arkansas" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Food & drinks</span>
            <h2>Small businesses worth the short drive.</h2>
            <p className="lead">
              These are the first local stops to check when you are planning a Glenwood weekend, a lower-Caddo float, or a quick meal in Amity.
            </p>
          </div>
          <div className="card-grid">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.slug} business={business} page="/restaurants" placement="restaurants-featured-stops" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Before you drive over</span>
            <h2>A little planning helps in a small town.</h2>
          </div>
          <div className="card-grid">
            {foodTips.map((tip) => (
              <div key={tip.title} className="note-card">
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
