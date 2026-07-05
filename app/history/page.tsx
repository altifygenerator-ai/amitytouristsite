import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { historySections, siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "History of Amity Arkansas | Caddo River, Old Bank, Railroad & Timber",
  description:
    "Read the history of Amity, Arkansas from Caddo River settlement and the public square to the Old Bank of Amity, railroad growth, timber, schools, newspapers, and small-town memory.",
  keywords: [
    "Amity Arkansas history",
    "history of Amity Arkansas",
    "Old Bank of Amity",
    "Amity Arkansas railroad",
    "Amity Arkansas timber history",
    "Clark County Arkansas history",
    "Caddo River history Amity",
  ],
  alternates: { canonical: `${siteUrl}/history` },
};

export default function HistoryPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">Local history</span>
            <h1>Amity has more story than a quick drive-through shows.</h1>
            <p className="lead">
              The town began near the Caddo River, shifted around a public square,
              grew through railroad and timber years, and still carries the memory
              of schools, churches, storefronts, newspapers, and families who kept
              the place going.
            </p>
            <p>
              The quiet you feel here now has history under it. Amity has changed,
              but the old river valley, the square, and the buildings that remain
              still give the town a reason to be remembered.
            </p>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/history/oldsquare.webp" alt="Historic Amity Arkansas town square" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container timeline">
          {historySections.map((section) => (
            <article key={section.title} className="timeline-item">
              <div className="timeline-image">
                <Image src={section.image} alt={section.title} fill sizes="(max-width: 800px) 100vw, 280px" />
              </div>
              <div>
                <span className="eyebrow small">Amity story</span>
                <h2>{section.title}</h2>
                <p style={{ marginTop: 14 }}>{section.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-river">
        <div className="container callout">
          <span className="eyebrow">Local memory matters</span>
          <h2>Old photos, family stories, and corrections are welcome.</h2>
          <p>
            Amity's story belongs to the people who remember it. If you have an old
            photo, a family name, a date, or a correction that should be included,
            send it through the Natural State Tourism Project.
          </p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary">
              Send a local memory
            </Link>
            <Link href="/near-glenwood" className="btn-secondary">
              Amity near Glenwood
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
