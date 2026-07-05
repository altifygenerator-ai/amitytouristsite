import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { nearbyTrips, siteUrl, thingsToDo } from "@/data/amity";

export const metadata: Metadata = {
  title: "Things To Do in Amity Arkansas | Near Glenwood & the Caddo River",
  description:
    "Find things to do in Amity, Arkansas and nearby: quiet Caddo River roads, local food, Slate Rock Brewing, small-town history, Glenwood, Lake Greeson, DeGray, and Crater of Diamonds day trips.",
  keywords: [
    "things to do in Amity Arkansas",
    "things to do near Glenwood Arkansas",
    "Amity Arkansas day trip",
    "Caddo River near Amity",
    "Lake Greeson day trip",
    "southwest Arkansas small towns",
  ],
  alternates: { canonical: `${siteUrl}/things-to-do` },
};

const dayPlan = [
  {
    title: "Morning: come over from Glenwood",
    text:
      "Start with the short drive from Glenwood into Amity. Take the slow way, look around the square, and let the town set the pace before the day gets too full.",
  },
  {
    title: "Midday: eat local",
    text:
      "Grab pizza, a cafe meal, or check what is open that day. In a small town, every open place matters more.",
  },
  {
    title: "Afternoon: river, lake, or history",
    text:
      "Use the rest of the day for the Caddo River area, Lake Greeson, Daisy State Park, DeGray, Crater of Diamonds, or a little local history around the square.",
  },
];

export default function ThingsToDoPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Things to do</span>
            <h1>Simple things to do in Amity and close by.</h1>
            <p className="lead">
              Amity is not trying to be Hot Springs or Glenwood. Its charm is
              smaller: a quiet town close to the Caddo River, a few local places
              worth supporting, and short drives that can turn a simple stop into a
              full southwest Arkansas day.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/caddo-river" className="btn-primary">
                River access notes
              </Link>
              <Link href="/restaurants" className="btn-secondary">
                Food & drinks
              </Link>
            </div>
          </div>
          <div className="image-panel">
            <Image
              src="/images/amity/CaddoRiver3.jpg"
              alt="Kayak on the Caddo River near the Amity and Glenwood area"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What is here</span>
            <h2>Small-town stops, river time, and nearby day trips.</h2>
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
                  <strong>Plan this stop →</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-river">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Easy day plan</span>
            <h2>A good Amity day should feel easy.</h2>
          </div>
          <div className="card-grid">
            {dayPlan.map((item) => (
              <div key={item.title} className="note-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-image">
          <Image src="/images/amity/LakeGreeson2.jpg" alt="Lake Greeson near Amity Arkansas" fill sizes="100vw" />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">Short drives</span>
          <h2>Amity sits between river towns, lakes, and slower back roads.</h2>
          <p>
            Stay near Glenwood, stop in Amity, head toward Lake Greeson, or keep
            going toward DeGray, Mount Ida, Murfreesboro, or Hot Springs. The route
            feels natural when you let the day stay loose.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Nearby trips</span>
            <h2>Use Amity as part of the wider trip.</h2>
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
    </main>
  );
}
