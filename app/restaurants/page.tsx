import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import TrackedBusinessLink from "@/components/TrackedBusinessLink";
import { featuredBusinesses, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Food & Drinks in Amity Arkansas | Slate Rock, Pizza, Cafe & Pub Stops",
  description:
    "Find food and drink stops in Amity, Arkansas near Glenwood and the Caddo River, including Slate Rock Brewing, Hometown Pizza, Trudy's, The Little Pub, and local small-town stops.",
  keywords: [
    "Amity Arkansas restaurants",
    "food in Amity Arkansas",
    "Slate Rock Brewing Amity",
    "Hometown Pizza Amity Arkansas",
    "Trudy's Amity Arkansas",
    "The Little Pub Amity Arkansas",
    "restaurants near Glenwood Arkansas",
  ],
  alternates: { canonical: `${siteUrl}/restaurants` },
};

export default function RestaurantsPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Food & local stops</span>
            <h1>Where to eat and stop in Amity.</h1>
            <p className="lead">
              Amity is small, so the food and drink stops that are open carry more
              weight. A meal here is not just convenient. It helps keep a quiet
              town on the map for the next person coming through.
            </p>
            <p>
              If you are staying in Glenwood, floating the Caddo, visiting family,
              headed to a game, or driving toward Arkadelphia, take the few extra
              minutes to stop in Amity. Small purchases go further in small towns.
            </p>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/TownSquare.jpg" alt="Amity Arkansas town square near local restaurants" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our picks</span>
            <h2>Small businesses worth the short drive.</h2>
            <p className="lead">
              Check hours before making a special trip, then pull in, eat local,
              and enjoy the slower side of the Glenwood and Caddo River area.
            </p>
          </div>
          <div className="card-grid">
            {featuredBusinesses.map((business) => (
              <BusinessCard
                key={business.name}
                business={business}
                page="/restaurants"
                placement="restaurants-featured-stops"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container split-grid reverse">
          <div className="copy-block">
            <span className="eyebrow">After the river</span>
            <h2>Turn a Glenwood day into an Amity stop.</h2>
            <p className="lead">
              Finish the float, leave the cabin for a bit, or take the back road
              after a lake day. Amity is close enough that food, drinks, or a simple
              local stop can fit without changing the whole plan.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <TrackedBusinessLink
                href="https://www.glenwoodarkansas.org/glenwood-ar-restaurants"
                business="Glenwood Restaurant Guide"
                page="/restaurants"
                placement="nearby-guide-link"
                placementType="editorial"
                action="view-nearby-guide"
                className="btn-secondary"
              >
                Restaurants in Glenwood
              </TrackedBusinessLink>
              <Link href="/contact" className="btn-primary">
                Add or update a listing
              </Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/history/store.jpg" alt="Historic Amity Arkansas storefront" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>
    </main>
  );
}
