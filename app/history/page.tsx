import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { historySections, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "History of Amity Arkansas | Caddo River, Square, Timber & Trade Days",
  description:
    "Read the history of Amity, Arkansas from early Caddo River settlement to the public square, railroad, timber years, Old Bank of Amity, and Amity Trade Days.",
  keywords: [
    "Amity Arkansas history",
    "history of Amity Arkansas",
    "Old Bank of Amity",
    "Amity Arkansas public square",
    "Amity Trade Days history",
    "Caddo River Amity history",
  ],
  alternates: { canonical: `${siteUrl}/history` },
};

export default function HistoryPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Amity story</span>
            <h1>A river town, a square, timber work, and a market people still remember.</h1>
            <p className="lead">
              Amity's history explains why the town still feels like it should have more going on. It began near the Caddo River, grew around a public square, worked through railroad and timber years, and later pulled people in through Trade Days.
            </p>
            <p>
              The town is quieter now, but the old shape is still here. That gives Amity something to build from if the river, square, businesses, and events are tied together carefully.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/amity-trade-days" className="btn-primary">Read About Trade Days</Link>
              <Link href="/caddo-river" className="btn-secondary">Caddo River Guide</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/history/oldsquare.webp" alt="Historic Amity Arkansas square" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container timeline">
          {historySections.map((section) => (
            <div key={section.title} className="timeline-item">
              <div className="timeline-image">
                <Image src={section.image} alt={section.title} fill sizes="(max-width: 760px) 100vw, 280px" />
              </div>
              <div>
                <h2>{section.title}</h2>
                <p style={{ marginTop: 12 }}>{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-river">
        <div className="container callout">
          <span className="eyebrow">Why the history matters now</span>
          <h2>The square was built for traffic. Amity has to create that traffic again.</h2>
          <p>
            The old trade-town economy is not coming back exactly the way it was. But the pieces that made Amity work before still point in the right direction: a visible center, regular reasons to gather, nearby water, and local businesses people can support.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/events" className="btn-primary">Events & Market Ideas</Link>
            <Link href="/contact" className="btn-secondary">Send Photos or History</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
