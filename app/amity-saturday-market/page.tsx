import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Saturday Market | September 19, 2026",
  description:
    "The first Amity Saturday Market is set for September 19, 2026 from 9 a.m. to 2 p.m. See current vendor information, the $25 market fee, event-covered City of Amity permits, sponsor support, and event updates.",
  alternates: { canonical: `${siteUrl}/amity-saturday-market` },
  openGraph: {
    title: "Amity Saturday Market | September 19, 2026",
    description:
      "The first Amity Saturday Market is moving forward with 21 vendor applications, a simple $25 vendor fee, City permit costs covered for approved vendors, and more event details being finalized.",
    url: `${siteUrl}/amity-saturday-market`,
    type: "website",
    images: [
      {
        url: "/images/amity/TownSquare.jpg",
        width: 1200,
        height: 630,
        alt: "Amity Arkansas town square",
      },
    ],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Amity Saturday Market",
  description:
    "The first Amity Saturday Market, with local vendors, food and drink, handmade goods, farm and seasonal items, resale finds, and other small businesses.",
  startDate: "2026-09-19T09:00:00-05:00",
  endDate: "2026-09-19T14:00:00-05:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: `${siteUrl}/amity-saturday-market`,
  image: [`${siteUrl}/images/amity/TownSquare.jpg`],
  location: {
    "@type": "Place",
    name: "Amity Town Square",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amity",
      addressRegion: "AR",
      postalCode: "71921",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Natural State Tourism Project",
    url: "https://naturalstatetourismproject.org",
  },
  sponsor: [
    {
      "@type": "Person",
      name: "Kay Stewart",
      affiliation: {
        "@type": "Organization",
        name: "Partners Realty - Glenwood",
      },
    },
    {
      "@type": "Organization",
      name: "Partners Realty - Glenwood",
    },
  ],
};

export default function AmitySaturdayMarketPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <section className="section section-warm market-event-hero">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">First Amity market</span>
            <h1>Amity Saturday Market</h1>
            <p className="market-event-date">Saturday, September 19, 2026 · 9 a.m.–2 p.m.</p>
            <p className="lead">
              The first Amity market is moving forward, and the response has already been stronger than we expected. We have 21 unique vendor applications in so far and are working through the final town-square layout, vendor placement, permits, parking, and day-of details.
            </p>
            <p>
              Vendor applications are still open while space is available, and there is no payment due with the application. Approved vendors will pay one flat $25 market fee per booth. Natural State Tourism Project will handle and cover the City of Amity vendor permit cost for approved vendors who need one; those vendors will only need to pick up their permit from Amity City Hall before the market.
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
              <span>Market day</span>
              <strong>September 19 · 9–2</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Where things stand</span>
            <h2>Twenty-one vendor applications and counting.</h2>
            <p className="lead">
              The goal is still the same: keep the first one manageable, give people a good reason to come into Amity for the day, and put together a mix that is worth visiting instead of filling spaces just to fill them.
            </p>
          </div>

          <div className="three-grid market-event-cards">
            <article className="note-card">
              <span className="eyebrow small">Vendor mix</span>
              <h3>Plenty of variety already</h3>
              <p>
                Applications already cover food and drinks, handmade goods, jewelry, crafts, farm and seasonal items, resale, boutique goods, local services, and more. We’ll share more of the confirmed lineup as vendor details are finalized.
              </p>
            </article>

            <article className="note-card">
              <span className="eyebrow small">Local businesses</span>
              <h3>Keep some of the day in Amity</h3>
              <p>
                The market is being planned to work with the businesses already here, not around them. We want visitors to have a reason to shop the market and still stop for food, shopping, and other local places while they are in town.
              </p>
            </article>

            <article className="note-card">
              <span className="eyebrow small">First run</span>
              <h3>Build something worth repeating</h3>
              <p>
                This is the first trial market. We’ll use it to learn what the square comfortably holds, what vendors need, how traffic and parking work, and what makes sense if Amity wants to do more days like it later.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container split-grid market-event-details">
          <div className="copy-block">
            <span className="eyebrow">Plan for September 19</span>
            <h2>What visitors and vendors should know right now.</h2>
            <p className="lead">
              The date and public market hours are set. The smaller operational pieces are being worked through now, and this page will stay updated as they are confirmed.
            </p>
            <p>
              Vendors should bring their own canopy, tables, and chairs unless another arrangement has been made. Electricity is limited and needs to be requested ahead of time. Booth placement, vendor arrival times, parking instructions, and the final vendor packet will be sent directly to approved vendors.
            </p>
            <p>
              The vendor fee is a flat $25 per booth for market space, organization, and promotion. There is no additional City of Amity permit charge to approved vendors for this first market. Natural State Tourism Project will cover the permit cost, and vendors who need one will simply pick it up from Amity City Hall before market day.
            </p>
            <div className="button-row" style={{ marginTop: 24 }}>
              <Link href="/amity-saturday-market/vendor-registration" className="btn-primary">Open Vendor Application</Link>
            </div>
          </div>

          <div className="market-event-facts">
            <div><span>Date</span><strong>Saturday, September 19, 2026</strong></div>
            <div><span>Public hours</span><strong>9 a.m.–2 p.m.</strong></div>
            <div><span>Area</span><strong>Amity town square</strong></div>
            <div><span>Applications received</span><strong>21 unique vendors</strong></div>
            <div><span>Booth planning</span><strong>10×10 standard; trailers/larger needs by application</strong></div>
            <div><span>Vendor setup</span><strong>Bring your own canopy, tables & chairs</strong></div>
            <div><span>Electricity</span><strong>Limited, by request</strong></div>
            <div><span>Market vendor fee</span><strong>$25 per approved vendor / booth</strong></div>
            <div><span>City vendor permit</span><strong>Cost covered by the event; pickup at Amity City Hall</strong></div>
            <div><span>Vendor payment</span><strong>No payment due with application; payment comes after approval</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Early event sponsor</span>
            <h2>Local support is already helping get the first market off the ground.</h2>
            <p>
              A first event has a lot of little costs behind it. Sponsor help lets us put more of the work toward making the day easier on vendors and better for the people who come out.
            </p>
          </div>

          <div className="two-grid">
            <article className="note-card">
              <span className="eyebrow small">Vendor permit sponsor</span>
              <h3>Kay Stewart · Partners Realty - Glenwood</h3>
              <p>
                Kay Stewart with Partners Realty - Glenwood has committed $250 toward City of Amity vendor permit costs for the first market. City permit costs for approved vendors are being covered for the first Amity Saturday Market, made possible in part by Kay and Partners Realty - Glenwood.
              </p>
              <p>
                For this first market, vendors will not be charged separately for the City of Amity permit. Natural State Tourism Project will use Kay’s sponsorship first and market/event funds as needed to cover permit costs for approved vendors who need one. Every approved vendor simply pays the same $25 market fee.
              </p>
              <p>
                Once a vendor is approved, we’ll collect the $25 market fee, confirm whether a City of Amity permit needs to be prepared, and send pickup and booth-confirmation details directly. Vendors who need a permit will pick it up from Amity City Hall before the market.
              </p>
              <div className="button-row" style={{ marginTop: 20 }}>
                <a
                  href="https://www.realtor.com/realestateagents/Kay-Stewart_Glenwood_AR_100672898_893009378"
                  className="btn-secondary"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                >
                  Kay Stewart · Partners Realty - Glenwood
                </a>
              </div>
            </article>

            <article className="note-card">
              <span className="eyebrow small">More help welcome</span>
              <h3>There are still practical pieces businesses can help with.</h3>
              <p>
                We’re still talking with local and area businesses about signs, printing, promotion, supplies, setup, cleanup, and other pieces that help the first market run smoothly. Sponsorship does not have to be huge to be useful.
              </p>
              <div className="button-row" style={{ marginTop: 20 }}>
                <Link href="/contact" className="btn-secondary">Ask About Sponsoring</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container callout">
          <span className="eyebrow">Still being finalized</span>
          <h2>We’ll keep this page current as the event gets closer.</h2>
          <p>
            The final booth map, vendor arrival and setup times, parking details, confirmed vendor lineup, and any other day-of information will be added or sent out as those pieces are finished. If you have already applied, there is no need to submit another application.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/amity-saturday-market/vendor-registration" className="btn-primary">Vendor Information</Link>
            <Link href="/events" className="btn-secondary">See Amity Events</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
