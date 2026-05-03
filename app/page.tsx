import Hero from "@/components/tourism/Hero"
import Highlights from "@/components/tourism/Highlights"
import AttractionGrid from "@/components/tourism/AttractionGrid"
import Itinerary from "@/components/tourism/Itinerary"
import Section from "@/components/tourism/Section"
import Intro from "@/components/tourism/Intro"
import FAQ from "@/components/tourism/FAQ"
import BackgroundSection from "@/components/tourism/BackgroundSection"
import {
  amityHero,
  amityHighlights,
  amityAttractions,
  amityItinerary,
  amitySEO,
  amityIntro,
  amityFAQ,
} from "@/data/amity"
import Link from "next/link"
import { generateMetadata } from "@/lib/seo"
import Image from "next/image";


const amityFeatured = [
  {
    name: "Your Business Here",
    type: "⭐ Featured Spot",
    description:
      "Be the first business visitors see when looking for services in Amity.",
    image: "/images/placeholder.png",
    href: "/contact",
  },
  {
    name: "The Fox Pen Coffee Co.",
    type: "Coffee • Local Favorite",
    description:
      "A cozy local coffee shop and hangout spot in Amity.",
    image: "/images/amity/foxpen.jpg",
    href: "/local-business",
  },
  {
    name: "Timber Lodge Ranch",
    type: "Cabins • Lodging",
    description:
      "A quiet cabin stay near the Ouachita region and nearby lakes.",
    image: "/images/amity/timberlodge.webp",
    href: "/local-business",
  },
];

export const metadata = generateMetadata(amitySEO)

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
        "A historic small town in Pike County known for its community, heritage, and nearby attractions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amity",
        addressRegion: "AR",
        addressCountry: "US",
      },
    }),
  }}
/>
      
      <Hero data={amityHero}  />


<div className="flex gap-4 justify-center mt-6 flex-wrap">

  <Link
    href="/explore"
    className="px-6 py-3 rounded-full bg-[color:var(--color-accent)] text-white font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
  >
    Explore
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
      <section className="max-w-5xl mx-auto px-6 py-16">

  <div className="text-center mb-10">
    <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
      Local Spotlight
    </p>

    <h2 className="text-3xl font-semibold">
      Local Businesses in Amity
    </h2>

    <p className="text-[color:var(--color-muted)] mt-3 max-w-xl mx-auto">
      Small town, real businesses. Support local spots in Amity and discover
      places nearby.
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

          <h3 className="text-lg font-semibold">
            {spot.name}
          </h3>

          <p className="mt-2 text-sm opacity-80">
            {spot.description}
          </p>
        </div>
      </Link>
    ))}

  </div>

  <div className="text-center mt-10">
    <Link
      href="/local-business"
      className="underline text-sm"
    >
      View all local businesses →
    </Link>
  </div>

</section>
<BackgroundSection image="/images/amity/CaddoRiver3.jpg">
  <h2 className="text-4xl font-semibold max-w-2xl">
    Float the Caddo River and experience the quiet beauty of Southwest Arkansas.
  </h2>
</BackgroundSection>
      <Section>
        <h2 className="text-3xl font-semibold mb-6" style={{ color: "var(--color-muted)" }}>
          Things to do near Amity, Arkansas
        </h2>
        <AttractionGrid items={amityAttractions} />
      </Section>
<BackgroundSection image="/images/amity/CaddoRiverCanoe.webp">
  <h2 className="text-4xl font-semibold max-w-2xl">
    Drift Through the Quiet Waters of the Caddo River
  </h2>
</BackgroundSection>
      <Section>
        <h2 className="text-3xl font-semibold mb-6">
          Plan your trip
        </h2>
        <Itinerary items={amityItinerary} />
      </Section>
<BackgroundSection image="/images/amity/tradedays.png">
  <div className="max-w-xl ml-auto text-right">
  <h2 className="text-3xl font-semibold mb-4">
    Support Local Events in Amity
  </h2>

  <p className="mb-6">
    Amity has a long tradition of local markets and community gatherings.
    We're building a platform to highlight businesses, vendors, and future events.
  </p>

  <div className="flex justify-end">
    <Link
  href="/contact"
  className="inline-flex w-fit bg-white px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition !text-black"
>
  Get Involved
</Link>
  </div>
</div>
</BackgroundSection>
      <Section>
        <h2 className="text-3xl font-semibold mb-6">
          Frequently asked questions
        </h2>
        <FAQ items={amityFAQ} />
      </Section>
      <BackgroundSection image="/images/amity/CaddoRiverTrees.jpg">
  <h2 className="text-4xl font-semibold max-w-2xl">
    Explore Amity Today
  </h2>
</BackgroundSection>
    <div className="flex justify-center mt-6">
  <a
    href="https://glenwoodtourism.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition"
  >
    Visit Glenwood →
  </a>
</div>
    </main>
  )
}