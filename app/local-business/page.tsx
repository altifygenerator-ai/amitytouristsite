import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import { featuredBusinesses, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Local Businesses in Amity Arkansas | Food, Brewery, Pizza, Cafe & Pub",
  description:
    "Find active local businesses in Amity, Arkansas near Glenwood and the Caddo River, including food, drinks, small-town stops, and ways to support Amity.",
  keywords: [
    "Amity Arkansas local businesses",
    "businesses in Amity AR",
    "Amity Arkansas food",
    "Slate Rock Brewing",
    "Hometown Pizza Amity",
    "support Amity Arkansas businesses",
  ],
  alternates: { canonical: `${siteUrl}/local-business` },
};

const businessNotes = [
  {
    title: "Small, local, and worth the stop",
    text:
      "Amity does not have a long downtown strip. The local stops that are open matter because they give travelers a real reason to pull in instead of passing through.",
  },
  {
    title: "Close to Glenwood traffic",
    text:
      "People already come nearby for Glenwood cabins, the Caddo River, family visits, ball games, and weekend drives. Amity is close enough to catch some of that attention.",
  },
  {
    title: "Every stop helps",
    text:
      "In a town this size, a meal, a drink, a pizza order, or a quick visit can do more good than people realize.",
  },
];

export default function LocalBusinessPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Amity local businesses</span>
            <h1>Small businesses that deserve to be found.</h1>
            <p className="lead">
              Amity is not a big shopping town. It is a quiet Arkansas town with a
              handful of places that make the drive worth it: a brewery, pizza,
              local food, a little pub, and the kind of stops that still feel close
              to the people who run them.
            </p>
            <p>
              For visitors, these businesses make Amity easier to add to a Glenwood
              or Caddo River trip. For business owners, this is a chance to be seen
              by people who are already nearby and looking for something local.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/contact" className="btn-primary">
                Get listed
              </Link>
              <Link href="/restaurants" className="btn-secondary">
                Food & drinks
              </Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/cityhall.jpg" alt="Amity Arkansas local business area" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container card-grid">
          {businessNotes.map((note) => (
            <div key={note.title} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Featured local stops</span>
            <h2>Real places in Amity visitors can use.</h2>
            <p className="lead">
              Check hours before making a special drive, then stop in, spend local,
              and help keep Amity visible for the next traveler.
            </p>
          </div>
          <div className="card-grid">
            {featuredBusinesses.map((business) => (
              <BusinessCard
                key={business.name}
                business={business}
                page="/local-business"
                placement="local-business-featured-stops"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-image">
          <Image src="/images/amity/townsquarecircle.jpg" alt="Amity Arkansas town square circle" fill sizes="100vw" />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">Small-town support</span>
          <h2>A little visitor traffic can go a long way here.</h2>
          <p>
            Amity does not need to feel crowded to benefit from tourism. Sometimes
            the win is simple: a Glenwood guest drives over for pizza, a family
            stops after the river, or someone finds a quiet place they want to come
            back to.
          </p>
        </div>
      </section>
    </main>
  );
}
