import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import { amityAttractions, amityItinerary } from "@/data/amity";

export default function ExplorePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      
      {/* HERO */}
      <h1 className="text-4xl font-semibold mb-6">
        Things to Do in Amity, Arkansas
      </h1>

      <p className="text-[color:var(--color-muted)] mb-12 max-w-2xl">
        Discover things to do in Amity, Arkansas — from quiet river floats to small-town experiences and nearby outdoor destinations in southwest Arkansas.
      </p>

      {/* ATTRACTIONS */}
      <Section>
        <AttractionGrid items={amityAttractions} />
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/amity/CaddoRiver3.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Slow down and enjoy the peaceful flow of the Caddo River.
        </h2>
      </BackgroundSection>

      {/* RIVER LIFE */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          River & Outdoor Time
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Amity offers direct access to the Caddo River, making it a great place for floating, fishing, and spending time outdoors without the crowds.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/amity/CaddoRiverCanoe.webp">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Enjoy simple days on the water with family and friends.
        </h2>
      </BackgroundSection>

      {/* SMALL TOWN */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Small-Town Experiences
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Walk the town square, visit local shops, and experience the slower pace that makes Amity unique.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/amity/amitytown.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Experience the charm of a true Arkansas small town.
        </h2>
      </BackgroundSection>

      {/* NEARBY */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Nearby Destinations
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Amity is close to several major attractions, making it a convenient base for exploring Lake Greeson, Glenwood, and the Ouachita Mountains.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/amity/LakeGreeson2.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Take short drives to lakes, trails, and scenic Arkansas views.
        </h2>
      </BackgroundSection>

      {/* ITINERARY */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">
          Plan Your Visit
        </h2>

        <Itinerary items={amityItinerary} />
      </Section>

      {/* SISTER LINK */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Explore Nearby Towns
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Looking for more to do? Head over to Glenwood for additional outdoor activities and attractions.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://glenwoodtourism.vercel.app"
            className="bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition"
          >
            Visit Glenwood
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mt-8 p-8 bg-[color:var(--bg-card)] rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Promote Your Business in Amity
          </h3>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-xl">
            Get your business featured and connect with visitors looking for local places to eat, shop, and explore.
          </p>

          <a
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-md"
          >
            Get Listed
          </a>
        </div>
      </Section>

    </main>
  );
}