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
<div className="flex gap-4 justify-center mt-4">
  <a
    href="/explore"
    className="bg-white text-black px-6 py-3 rounded-md font-medium"
  >
    Explore
  </a>

  <a
    href="/history"
    className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition"
  >
    Our History
  </a>
  
</div>
      <Section>
        <Highlights items={amityHighlights} />
      </Section>


      <Section>
        <Intro data={amityIntro} />
      </Section>
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