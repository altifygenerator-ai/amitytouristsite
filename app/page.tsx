import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import {
  faqs,
  featuredBusinesses,
  homeStats,
  nearbyTrips,
  riverNotes,
  siteUrl,
  thingsToDo,
} from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Arkansas Guide | Near Glenwood, Caddo River & Local Businesses",
  description:
    "Visit Amity, Arkansas near Glenwood and the Caddo River for Slate Rock Brewing, Hometown Pizza, Trudy's, quiet river-country roads, local history, and small-town stops.",
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
              "A quiet small-town stop near Glenwood, Arkansas and the Caddo River with local food, brewery stops, history, and nearby southwest Arkansas day trips.",
            url: siteUrl,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amity",
              addressRegion: "AR",
              addressCountry: "US",
            },
            touristType: ["Families", "Caddo River visitors", "Small-town travelers"],
          }),
        }}
      />

      <section className="hero" style={{ backgroundImage: "url('/images/amity/TownSquare.jpg')" }}>
        <div className="container hero-inner">
          <span className="eyebrow">Small-town Arkansas near Glenwood</span>
          <h1>Amity is the quiet stop beside the bigger river trip.</h1>
          <p className="hero-description">
            Drive over from Glenwood for a slower piece of the Caddo River area:
            a local brewery, pizza, a cafe, a little pub, old Arkansas history,
            and back-road river country that feels calm instead of crowded.
          </p>
          <div className="button-row">
            <Link href="/caddo-river" className="btn-primary">
              Explore the Caddo River side
            </Link>
            <Link href="/restaurants" className="btn-secondary">
              Food & local stops
            </Link>
          </div>
          <p className="hero-note">
            Amity is small, honest, and easy to miss if you are rushing through.
            That is exactly why a lunch stop, a drink, a pizza order, or a quiet
            drive through town can matter here.
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
            <h2>A softer add-on to the Caddo River weekend.</h2>
            <p className="lead">
              Glenwood has the main river-town pull. Amity gives the trip a quieter
              edge: close enough for lunch, a beer, a family pizza stop, a little
              local history, or a river-country drive that does not feel packed
              with people.
            </p>
            <p>
              The best way to visit Amity is simple. Do not expect a giant tourist
              district. Come for the places that are still here, the town square,
              the nearby Caddo River, and the kind of small-town stop that feels
              better when you are not in a hurry.
            </p>
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
            <h2>The small places that give Amity something worth stopping for.</h2>
            <p className="lead">
              Start with food, drinks, and local stops that fit naturally into a
              Glenwood cabin weekend, a Caddo River day, or a slow drive through
              southwest Arkansas.
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
              View local stops
            </Link>
            <Link href="/contact" className="btn-secondary">
              Add a business
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
          <span className="eyebrow">Uncrowded river feel</span>
          <h2>The river is part of why Amity still belongs in the trip.</h2>
          <p>
            Not every traveler wants the loudest stretch or the fullest parking
            lot. Around Amity, the Caddo River area feels simpler: slow roads,
            quiet water, shade, gravel, and a reminder to treat the land and river
            with care.
          </p>
        </div>
      </section>

      <section className="section section-river">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">River notes</span>
            <h2>Enjoy the calmer side of the Caddo River area.</h2>
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
            <span className="eyebrow">Plan a simple day</span>
            <h2>Things to do in and near Amity.</h2>
            <p className="lead">
              Keep the day easy. Stop in Amity, support what is open, then use the
              short drives around it to build a full southwest Arkansas route.
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
        <div className="container">
          <div className="callout">
            <span className="eyebrow">For Amity businesses</span>
            <h2>Glenwood visitors are already close. Give them a reason to stop.</h2>
            <p>
              A family staying near Glenwood, a couple coming off the river, or a
              traveler headed toward Lake Greeson may only need one clear idea:
              Amity is close, calm, and worth pulling into.
            </p>
            <div className="button-row" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn-primary">
                Add your business
              </Link>
              <Link href="/history" className="btn-secondary">
                Read the history
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Questions people ask before stopping in Amity.</h2>
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
