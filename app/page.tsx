import Hero from "@/components/tourism/Hero";
import Highlights from "@/components/tourism/Highlights";
import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import Intro from "@/components/tourism/Intro";
import FAQ from "@/components/tourism/FAQ";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import {
  amityHero,
  amityHighlights,
  amityAttractions,
  amityItinerary,
  amitySEO,
  amityIntro,
  amityFAQ,
} from "@/data/amity";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import Image from "next/image";

const amityFeatured = [
  {
    name: "Your Business Here",
    type: "Featured Local Spot",
    description:
      "Help visitors and locals find your Amity-area business, service, cabin, restaurant, or nearby stop.",
    image: "/images/amity/TownSquare.jpg",
    href: "/contact",
  },
  {
    name: "The Fox Pen Coffee Co.",
    type: "Coffee • Local Stop",
    description:
      "A small-town coffee stop and local hangout in Amity. Good for residents, visitors, and folks passing through the area.",
    image: "/images/amity/foxpen.jpg",
    href: "/local-business",
  },
  {
    name: "Timber Lodge Ranch",
    type: "Cabins • Lodging",
    description:
      "A quiet lodging option near Amity for visitors planning lake days, river trips, family visits, or a slower Ouachita-region getaway.",
    image: "/images/amity/timberlodge.webp",
    href: "/local-business",
  },
];

const guideCards = [
  {
    title: "Start with Amity",
    text: "Walk the square, learn a little history, check local businesses, and use Amity as a quiet stop before heading toward the river, lakes, or nearby towns.",
    href: "/explore",
    label: "Explore the Area",
  },
  {
    title: "Follow the Caddo River connection",
    text: "The Caddo River is one of Amity’s strongest outdoor links. Glenwood and nearby access points make it easy to build a river day into the trip.",
    href: "https://www.glenwoodarkansas.org/caddo-river",
    label: "Caddo River Guide",
    external: true,
  },
  {
    title: "Use Amity as a day-trip base",
    text: "Lake Greeson, DeGray Lake, Crater of Diamonds, Mount Ida, Hot Springs, and Glenwood are all part of the wider area story.",
    href: "/explore",
    label: "See Nearby Stops",
  },
  {
    title: "Help fill in what is missing",
    text: "Know an old photo, local business, history detail, event, closed spot, or new place that should be included? Send it in.",
    href: "/contact",
    label: "Send a Suggestion",
  },
];

export const metadata = generateMetadata(amitySEO);

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Amity, Arkansas",
            description:
              "A small Arkansas town near the Caddo River, Glenwood, Lake Greeson, DeGray Lake, Crater of Diamonds, Mount Ida, and Hot Springs.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amity",
              addressRegion: "AR",
              addressCountry: "US",
            },
          }),
        }}
      />

      <Hero data={amityHero} />

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link
          href="/explore"
          className="px-6 py-3 rounded-full bg-[color:var(--color-accent)] text-white font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
        >
          Explore the Area
        </Link>

        <Link
          href="/history"
          className="px-6 py-3 rounded-full border border-[color:var(--color-accent)] text-[color:var(--color-accent)] font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
        >
          Local History
        </Link>
      </div>

      <Section>
        <Highlights items={amityHighlights} />
      </Section>

      <Section>
        <Intro data={amityIntro} />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Small Local Stop
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Amity works best as a quiet connector.
            </h2>
          </div>

          <p className="max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
            Instead of trying to be a big tourist town, Amity can help people
            connect the dots: local businesses, old history, the Caddo River,
            nearby lakes, Glenwood, Mount Ida, Murfreesboro, DeGray, and Hot
            Springs. That is the honest identity of the guide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {guideCards.map((card) => {
            const content = (
              <>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  {card.text}
                </p>
                <span className="mt-auto inline-block pt-5 font-bold text-[color:var(--color-accent)]">
                  {card.label} →
                </span>
              </>
            );

            return card.external ? (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {content}
              </a>
            ) : (
              <Link
                key={card.title}
                href={card.href}
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </Section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
            Local Spotlight
          </p>

          <h2 className="text-3xl font-semibold">Local places worth knowing</h2>

          <p className="text-[color:var(--color-muted)] mt-3 max-w-xl mx-auto">
            This guide is meant to help people find the businesses, stays,
            food stops, services, and community places that still make Amity
            useful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {amityFeatured.map((spot, index) => (
            <Link
              key={spot.name}
              href={spot.href}
              className={`group rounded-xl overflow-hidden shadow transition hover:shadow-lg ${
                index === 0
                  ? "bg-[color:var(--color-accent)] text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="relative h-40">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wide mb-2 opacity-80">
                  {spot.type}
                </p>

                <h3 className="text-lg font-semibold">{spot.name}</h3>

                <p className="mt-2 text-sm opacity-80">{spot.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/local-business" className="underline text-sm">
            View all local businesses →
          </Link>
        </div>
      </section>

      <BackgroundSection image="/images/amity/CaddoRiver3.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          The Caddo River is one of Amity’s closest outdoor connections.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-3xl font-semibold mb-6">
          Nearby things to do from Amity
        </h2>
        <AttractionGrid items={amityAttractions} />
      </Section>

      <BackgroundSection image="/images/amity/CaddoRiverCanoe.webp">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Build a simple day around the river, a local meal, and a slow drive.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-3xl font-semibold mb-6">Plan a simple visit</h2>
        <Itinerary items={amityItinerary} />
      </Section>

      <BackgroundSection image="/images/amity/history/oldsquare.webp">
        <div className="max-w-xl ml-auto text-right">
          <h2 className="text-3xl font-semibold mb-4">
            Help preserve what people remember about Amity.
          </h2>

          <p className="mb-6">
            Old photos, school memories, businesses that used to be here,
            church events, family stories, and local corrections can all help
            make this guide more useful.
          </p>

          <div className="flex justify-end">
            <Link
              href="/contact"
              className="inline-flex w-fit bg-white px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition !text-black"
            >
              Send a Suggestion
            </Link>
          </div>
        </div>
      </BackgroundSection>

      <Section>
        <h2 className="text-3xl font-semibold mb-6">Frequently asked questions</h2>
        <FAQ items={amityFAQ} />
      </Section>

      <BackgroundSection image="/images/amity/CaddoRiverTrees.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Amity is small, but it still belongs on the map.
        </h2>
      </BackgroundSection>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-4">
          <a
            href="https://glenwoodarkansas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-5 py-3 rounded-md font-medium shadow hover:opacity-90 transition"
          >
            Visit Glenwood →
          </a>

          <a
            href="https://mountidaarkansas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[color:var(--color-accent)] text-[color:var(--color-accent)] px-5 py-3 rounded-md font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
          >
            Visit Mount Ida →
          </a>
        </div>
      </section>
    </main>
  );
}
