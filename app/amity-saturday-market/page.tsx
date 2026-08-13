import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Saturday Market | September 19, 2026",
  description:
    "The first Amity Saturday Market is being planned for September 19, 2026. Follow vendor registration, sponsor information, local business updates, and event details here.",
  alternates: { canonical: `${siteUrl}/amity-saturday-market` },
  openGraph: {
    title: "Amity Saturday Market | September 19, 2026",
    description:
      "A small fall market is coming together around the Amity town square with local vendors, food, handmade goods, resale finds, and community support.",
    url: `${siteUrl}/amity-saturday-market`,
    type: "website",
    images: [{ url: "/images/amity/TownSquare.jpg", width: 1200, height: 630, alt: "Amity Arkansas town square" }],
  },
};

export default function AmitySaturdayMarketPage() {
  return (
    <main>
      <section className="section section-warm market-event-hero">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">First market trial</span>
            <h1>Amity Saturday Market</h1>
            <p className="market-event-date">Saturday, September 19, 2026 · 9 a.m.–2 p.m.</p>
            <p className="lead">
              The first Amity market is moving forward. We’re building a vendor lineup, working through the town-square layout, and giving local businesses and folks around the area a reason to spend a Saturday in Amity again.
            </p>
            <p>
              Vendor applications are open now. Payment is not due with the application while the final booth and City of Amity vendor-permit details are being worked out.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/amity-saturday-market/vendor-registration" className="btn-primary">Apply as a Vendor</Link>
              <Link href="/contact" className="btn-secondary">Ask About Sponsoring</Link>
            </div>
          </div>
          <div className="image-panel market-event-image">
            <Image
              src="/images/amity/TownSquare.jpg"
              alt="Amity Arkansas town square where the Saturday market is being planned"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="market-event-image-note">
              <span>Working event date</span>
              <strong>September 19</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What we’re building</span>
            <h2>Small enough to run well. Big enough to feel like something is happening.</h2>
            <p className="lead">
              The first market is being planned around the square and participating private property. The idea is a good mix of handmade goods, food, farm and homestead products, resale finds, local services, and existing Amity businesses.
            </p>
          </div>
          <div className="three-grid market-event-cards">
            <article className="note-card">
              <span className="eyebrow small">Vendors</span>
              <h3>A real mix</h3>
              <p>Handmade work, quilts, jewelry, farm goods, seasonal items, food, resale, soaps, clothing, crafts, and more are already represented in the interest list.</p>
            </article>
            <article className="note-card">
              <span className="eyebrow small">Local businesses</span>
              <h3>Keep the spending in town</h3>
              <p>The market is being planned to work with the businesses already here, not around them. Food, shopping, and local stops should be part of the day.</p>
            </article>
            <article className="note-card">
              <span className="eyebrow small">First run</span>
              <h3>Learn what works</h3>
              <p>This is a trial event. We’ll use the first market to learn what the square can comfortably hold, what vendors need, and what makes sense for future dates.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container split-grid market-event-details">
          <div className="copy-block">
            <span className="eyebrow">Vendor applications</span>
            <h2>Want to set up?</h2>
            <p className="lead">
              Apply now so we can plan the vendor mix, electricity, booth sizes, food-trailer space, and the final layout.
            </p>
            <p>
              There is no payment due today. Approved vendors will receive the final booth cost, city permit instructions, payment details, setup time, and rules by email before a space is confirmed.
            </p>
            <div className="button-row" style={{ marginTop: 24 }}>
              <Link href="/amity-saturday-market/vendor-registration" className="btn-primary">Open Vendor Application</Link>
            </div>
          </div>
          <div className="market-event-facts">
            <div><span>Date</span><strong>September 19, 2026</strong></div>
            <div><span>Time</span><strong>9 a.m.–2 p.m.</strong></div>
            <div><span>Area</span><strong>Amity town square</strong></div>
            <div><span>Vendor setup</span><strong>Bring your own canopy, tables & chairs</strong></div>
            <div><span>Electricity</span><strong>Limited, by request</strong></div>
            <div><span>Payment</span><strong>Details coming by email</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <span className="eyebrow">Businesses & sponsors</span>
          <h2>Want to help make the first one a good one?</h2>
          <p>
            We’re talking with local and area businesses about sponsorship, printing, signs, promotion, and other practical pieces that help a first event run well. If your business wants to be involved, reach out and we’ll talk through what makes sense.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary">Ask About Sponsoring</Link>
            <Link href="/amity-trade-days" className="btn-secondary">Read About Amity Trade Days</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
