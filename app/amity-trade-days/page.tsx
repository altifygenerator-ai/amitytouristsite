import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { revivalIdeas, siteUrl, tradeDaysFacts } from "@/data/amity";

export const metadata: Metadata = {
  title: "Amity Trade Days History | Bringing Market Traffic Back to Amity",
  description:
    "Read about Amity Trade Days, the former monthly flea market in Amity, Arkansas, and how a smaller market or trade day could help bring people back to town.",
  keywords: [
    "Amity Trade Days",
    "Amity Arkansas flea market",
    "Amity Arkansas Trade Days history",
    "Amity Arkansas market",
    "bring back Amity Trade Days",
  ],
  alternates: { canonical: `${siteUrl}/amity-trade-days` },
};

export default function AmityTradeDaysPage() {
  return (
    <main>
      <article>
        <section className="section section-warm">
          <div className="container split-grid">
            <div className="copy-block">
              <span className="eyebrow">Amity Trade Days</span>
              <h1>Trade Days proved people would drive to Amity.</h1>
              <p className="lead">
                Amity Trade Days was more than a flea market. For a while, it gave people a clear reason to come here on purpose. Vendors set up, shoppers came in, food moved, traffic showed up, and Amity felt less like a town people only passed through.
              </p>
              <p>
                The old version is gone, but the lesson still matters: Amity can pull people when the reason is simple, regular, and easy to explain.
              </p>
              <div className="button-row" style={{ marginTop: 26 }}>
                <Link href="/events" className="btn-primary">Market & Event Ideas</Link>
                <Link href="/contact" className="btn-secondary">Send a Trade Days Memory</Link>
              </div>
            </div>
            <div className="image-panel">
              <Image src="/images/amity/tradedays.png" alt="Amity Trade Days sign and market memory" fill sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container readable-article">
            <p>
              Amity has always needed a reason for people to stop. In the railroad and timber years, the town had that reason through work, trade, shipping, schools, churches, and the public square. Later, Amity Trade Days gave the town another kind of draw: a monthly market people could understand right away.
            </p>
            <p>
              The Encyclopedia of Arkansas says Russell and Kim Jones of Rosboro started Amity Trade Days in 2015 at the former Bean Lumber Company sawmill facility. It describes the market as being modeled after Canton, Texas, attracting more than 6,000 people per month with nearly 200 vendors. Other public listings described it as a large outdoor vintage flea market on the old lumber site.
            </p>
            <p>
              That is the part worth paying attention to. Trade Days did not ask people to imagine what Amity could be. It gave them a date, a place, vendors, parking, food, and a reason to drive in. Small towns need that kind of clarity.
            </p>
            <p>
              In 2022, local reporting said the former Amity Trade Days site was set to return to sawmill use through Caddo River Wood Products. That may have made sense for jobs and industrial use, but it left Amity without the same monthly visitor draw.
            </p>
            <p>
              Bringing back something like Trade Days does not have to mean recreating the full 54-acre version. It could start smaller: a second-Saturday square market, a seasonal vendor row, a local food day, a yard-sale weekend, a swap meet, a maker market, or a river-and-square day tied to Caddo River traffic.
            </p>
            <p>
              This is not just nostalgia. Amity needs a repeatable reason for people from Glenwood, Caddo River cabins, Lake Greeson, Murfreesboro, Hot Springs, Mount Ida, and Clark County back roads to come through town with money in their pocket and time to stop.
            </p>
          </div>
        </section>

        <section className="section section-river">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What is on record</span>
              <h2>The public record tells part of the story.</h2>
              <p className="lead">
                The old market is documented well enough to tell the main story. Old photos, vendor memories, exact dates, and local details can make it better.
              </p>
            </div>
            <div className="card-grid">
              {tradeDaysFacts.map((fact) => (
                <div key={fact.title} className="note-card">
                  <h3>{fact.title}</h3>
                  <p>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">A smaller way back</span>
              <h2>What could come next.</h2>
            </div>
            <div className="card-grid">
              {revivalIdeas.map((idea) => (
                <div key={idea.title} className="note-card">
                  <h3>{idea.title}</h3>
                  <p>{idea.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-band">
          <div className="dark-band-image">
            <Image src="/images/amity/TownSquare.jpg" alt="Amity Arkansas town square for future market days" fill sizes="100vw" />
          </div>
          <div className="container dark-band-content">
            <span className="eyebrow">Bring the traffic back</span>
            <h2>Amity needs a regular reason to gather again.</h2>
            <p>
              A market day will not fix everything by itself. But it gives vendors, food stops, sponsors, locals, and visitors something to point to. That is a start.
            </p>
          </div>
        </section>

        <section className="section section-warm">
          <div className="container callout">
            <span className="eyebrow">Help shape the next version</span>
            <h2>Were you part of Amity Trade Days, or would you support a new market?</h2>
            <p>
              Send memories, photos, vendor interest, sponsor questions, or local ideas. The next version should fit Amity as it is now: smaller, practical, and tied to the river and the town square.
            </p>
            <div className="button-row" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn-primary">Send a Memory or Idea</Link>
              <Link href="/events" className="btn-secondary">See Market Ideas</Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
