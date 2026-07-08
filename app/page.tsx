import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import {
  faqs,
  featuredBusinesses,
  homeStats,
  nearbyTrips,
  riverGuideLinks,
  riverNotes,
  siteUrl,
  thingsToDo,
} from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Arkansas Guide | Caddo River, Trade Days & Local Stops",
  description:
    "Plan a visit to Amity, Arkansas near Glenwood and the Caddo River with lower-Caddo access notes, food stops, Slate Rock Brewing, town square history, Trade Days stories, and small local businesses.",
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: "Amity, Arkansas",
            description:
              "A quiet small-town stop near Glenwood, Arkansas and the Caddo River with food, local businesses, lower-Caddo access notes, history, and southwest Arkansas day trips.",
            url: siteUrl,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amity",
              addressRegion: "AR",
              addressCountry: "US",
            },
            touristType: ["Families", "Caddo River visitors", "Small-town travelers", "River and lake travelers"],
          }),
        }}
      />

      <section className="hero" style={{ backgroundImage: "url('/images/amity/TownSquare.jpg')" }}>
        <div className="container hero-inner">
          <span className="eyebrow">Small-town Arkansas near Glenwood</span>
          <h1>Amity is the quieter side of the Caddo River trip.</h1>
          <p className="hero-description">
            Start with lower-Caddo access notes, local food, Slate Rock, the old town square, Trade Days history, and the small stops that still matter in Amity.
          </p>
          <div className="button-row">
            <Link href="/caddo-river-access-near-amity" className="btn-primary">
              Check River Access Notes
            </Link>
            <Link href="/restaurants" className="btn-secondary">
              Find Food & Local Stops
            </Link>
          </div>
          <p className="hero-note">
            Amity is easy to miss if you are rushing between Glenwood, the river, and the lakes. Slow down a little, spend local, and help the places that are still open.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stats-grid">
          {homeStats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Close to Glenwood</span>
            <h2>A short side trip from Glenwood can still be worth the turn.</h2>
            <p className="lead">
              Glenwood already brings people close for cabins, outfitters, float trips, and the Caddo River. Amity is just far enough off the main path to feel quieter, but close enough for lunch, Slate Rock, the lower-Caddo side, and a slower look around the square.
            </p>
            <p>
              Amity does not need to pretend it is bigger than it is. It just needs to be easier to find when you are already nearby and looking for one more local stop before you head home.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/near-glenwood" className="btn-primary">Plan the Glenwood Side Trip</Link>
              <Link href="/amity-trade-days" className="btn-secondary">Read About Trade Days</Link>
            </div>
          </div>

          <div className="image-panel">
            <Image
              src="/images/amity/CaddoRiver4.webp"
              alt="Quiet Caddo River water near the Amity and Glenwood area"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Featured local stops</span>
            <h2>Start with the places that are still open.</h2>
            <p className="lead">
              These are the first local stops to check when you are coming over from Glenwood, planning around the Caddo, or passing through on a slow Arkansas drive.
            </p>
          </div>

          <div className="card-grid">
            {featuredBusinesses.slice(0, 3).map((business) => (
              <BusinessCard
                key={business.name}
                business={business}
                page="/"
                placement="homepage-featured-local-stops"
              />
            ))}
          </div>

          <div className="button-row" style={{ marginTop: 28 }}>
            <Link href="/local-business" className="btn-dark">
              View Local Stops
            </Link>
            <Link href="/contact" className="btn-secondary">
              Add or Sponsor a Business
            </Link>
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-image">
          <Image
            src="/images/amity/CaddoRiverCanoe.webp"
            alt="Caddo River canoe trip near Glenwood and Amity Arkansas"
            fill
            sizes="100vw"
          />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">Lower-Caddo planning</span>
          <h2>The river can help bring people toward town.</h2>
          <p>
            The Amity side of the Caddo needs careful guidance, not hype. Use legal access, watch the water, respect nearby land, then bring the trip back into town for food, local stops, and the square.
          </p>
        </div>
      </section>

      <section className="section section-river">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Lower-Caddo planning</span>
            <h2>Start with the river questions that matter.</h2>
            <p className="lead">
              Check access, private land notes, fishing, float planning, and a simple Amity day before you head toward the water.
            </p>
          </div>
          <div className="card-grid">
            {riverGuideLinks.map((link) => (
              <Link key={link.href} href={link.href} className="note-card link-card">
                <h3>{link.title}</h3>
                <p>{link.text}</p>
                <strong>Open guide →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Plan a simple day</span>
            <h2>Things to do in and near Amity.</h2>
            <p className="lead">
              Keep the day easy. Stop in Amity, support what is open, then use the short drives around it to build a full southwest Arkansas route.
            </p>
          </div>
          <div className="card-grid">
            {thingsToDo.map((item) => (
              <Link key={item.title} href={item.href} className="feature-card">
                <div className="feature-card-image">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <div className="feature-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>Read more →</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Nearby trips</span>
            <h2>Amity works best as part of the whole area.</h2>
          </div>
          <div className="card-grid">
            {nearbyTrips.map((trip) => (
              <a key={trip.title} href={trip.href} target="_blank" rel="noopener noreferrer" className="info-card">
                <span className="eyebrow small">{trip.kicker}</span>
                <h3>{trip.title}</h3>
                <p>{trip.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <span className="eyebrow">For Amity businesses, vendors, and sponsors</span>
          <h2>Glenwood visitors are already close. Give them a reason to stop.</h2>
          <p>
            Add a business, sponsor a local guide section, send an event idea, or help build a market day that brings people back toward the square. Clear information makes it easier for visitors to spend local.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary">
              Get Listed or Sponsor
            </Link>
            <Link href="/events" className="btn-secondary">
              Events & Market Ideas
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">River notes</span>
            <h2>Keep the Caddo useful for everybody.</h2>
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Quick answers</span>
            <h2>Before you come through Amity.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
