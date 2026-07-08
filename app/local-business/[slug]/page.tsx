import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BusinessCard from "@/components/BusinessCard";
import TrackedBusinessLink from "@/components/TrackedBusinessLink";
import { featuredBusinesses, siteUrl } from "@/data/amity";

type Params = Promise<{ slug: string }>;

function getBusiness(slug: string) {
  return featuredBusinesses.find((business) => business.slug === slug);
}

export function generateStaticParams() {
  return featuredBusinesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    return { title: "Local Business" };
  }

  return {
    title: `${business.name} in Amity Arkansas`,
    description: `${business.name} is listed in the Amity Arkansas local guide near Glenwood and the Caddo River. Check current hours and details before making a special trip.`,
    alternates: { canonical: `${siteUrl}/local-business/${business.slug}` },
  };
}

export default async function LocalBusinessDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) notFound();

  const otherBusinesses = featuredBusinesses.filter((item) => item.slug !== business.slug);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.name} Amity Arkansas`
  )}`;

  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Amity local stop</span>
            <h1>{business.name}</h1>
            <p className="lead">{business.description}</p>
            <p>
              Hours and offerings can change in small towns, so check with the business directly before making a special drive from Glenwood, the river, or the lake.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <TrackedBusinessLink
                href={directionsUrl}
                business={business.name}
                page={`/local-business/${business.slug}`}
                placement="business-detail-hero"
                placementType={business.placementType}
                action="directions"
                className="btn-primary"
              >
                Get Directions
              </TrackedBusinessLink>
              <TrackedBusinessLink
                href={business.href}
                business={business.name}
                page={`/local-business/${business.slug}`}
                placement="business-detail-hero"
                placementType={business.placementType}
                action="external-details"
                className="btn-secondary"
              >
                Check Current Details
              </TrackedBusinessLink>
            </div>
          </div>
          <div className="image-panel">
            <Image src={business.image} alt={business.name} fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-grid">
          <div className="note-card">
            <span className="eyebrow small">Good for</span>
            <h2>When this stop makes sense</h2>
            <div className="chip-row" style={{ marginTop: 18 }}>
              {(business.goodFor || business.notes || []).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="note-card">
            <span className="eyebrow small">Before you go</span>
            <h2>Small-town hours can move around.</h2>
            <p>
              If you are coming from Glenwood, Lake Greeson, Hot Springs, or a cabin stay, use the directions link and check the business directly before planning the whole day around one stop.
            </p>
          </div>
        </div>
      </section>

      {otherBusinesses.length ? (
        <section className="section section-river">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Keep planning</span>
              <h2>Other Amity stops to check.</h2>
              <p className="lead">
                A small town works better when visitors make more than one stop. Add food, a drink, the square, or a river note while you are close.
              </p>
            </div>
            <div className="card-grid">
              {otherBusinesses.map((item) => (
                <BusinessCard
                  key={item.slug}
                  business={item}
                  page={`/local-business/${business.slug}`}
                  placement="other-amity-stops"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container callout">
          <span className="eyebrow">Own or manage a local stop?</span>
          <h2>Help us keep the Amity guide current.</h2>
          <p>
            Send updated hours, links, photos, corrections, or sponsorship questions so visitors have better information before they drive over from Glenwood or the Caddo River.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary">Update a Listing</Link>
            <Link href="/local-business" className="btn-secondary">Back to Local Businesses</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
