import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import { amityAttractions, amityItinerary } from "@/data/amity";

export const metadata = {
  title: "Things To Do Near Amity Arkansas | Caddo River, Lakes & Day Trips",
  description:
    "Find things to do near Amity, Arkansas including the Caddo River, Glenwood, Lake Greeson, Daisy State Park, DeGray Lake, Crater of Diamonds, Mount Ida, and local stops.",
};

const areaNotes = [
  {
    title: "Start in town",
    text: "Amity is small, so the town itself is more of a local stop than a full-day attraction. Walk the square, find local food or coffee when available, and use the guide to see what is still here.",
  },
  {
    title: "Build around the Caddo River",
    text: "The Caddo River and Glenwood area are the strongest outdoor connection nearby. Check conditions, access, and outfitter information before planning a float or fishing trip.",
  },
  {
    title: "Add a lake or day trip",
    text: "Lake Greeson, Daisy State Park, DeGray Lake, Crater of Diamonds, Mount Ida, and Hot Springs can all fit into a broader Amity-area trip.",
  },
];

export default function ExplorePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Amity Area Guide
      </p>

      <h1 className="text-4xl font-semibold mb-6 md:text-5xl">
        Things to do near Amity, Arkansas
      </h1>

      <p className="text-[color:var(--color-muted)] mb-12 max-w-3xl text-lg leading-relaxed">
        Amity is best explored as a small local stop with strong nearby access.
        Use it as a quiet base for the Caddo River, Glenwood, Lake Greeson,
        Daisy State Park, DeGray Lake, Crater of Diamonds, Mount Ida, and other
        southwest Arkansas day trips.
      </p>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {areaNotes.map((note) => (
            <div key={note.title} className="rounded-2xl bg-white/70 p-6 shadow-sm border border-black/5">
              <h2 className="text-xl font-semibold mb-3">{note.title}</h2>
              <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <AttractionGrid items={amityAttractions} />
      </Section>

      <BackgroundSection image="/images/amity/CaddoRiver3.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          The Caddo River is the main outdoor thread running through the Amity area story.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">River and outdoor time</h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Amity sits close to the Caddo River, but most visitors will plan river
          time through nearby access points, Glenwood, and local outfitters.
          That makes Amity a useful piece of a bigger river weekend instead of
          a place you have to overplan by itself.
        </p>
      </Section>

      <BackgroundSection image="/images/amity/CaddoRiverCanoe.webp">
        <h2 className="text-4xl font-semibold max-w-2xl">
          A good Amity-area day can be as simple as river time, food, and a quiet drive.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Small-town stops</h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          The town square, city hall area, local businesses, old photos, and
          longtime community spots are part of what makes Amity worth including.
          It may not be packed with attractions, but it has a local identity
          that has been easy to miss online.
        </p>
      </Section>

      <BackgroundSection image="/images/amity/history/amitytown.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Amity’s story is quieter than a brochure, but it is still worth telling.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Nearby destinations</h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Amity works well when it is connected to the rest of the area. Glenwood
          adds Caddo River outfitters, restaurants, cabins, and events. Lake
          Greeson and Daisy State Park add lake time. DeGray gives another lake
          route toward Arkadelphia. Crater of Diamonds, Mount Ida, and Hot
          Springs can all turn a simple local stop into a full day trip.
        </p>
      </Section>

      <BackgroundSection image="/images/amity/LakeGreeson2.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Short drives can take you from Amity to lakes, rivers, state parks, and mountain roads.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-6">Plan your visit</h2>
        <Itinerary items={amityItinerary} />
      </Section>

      <Section>
        <div className="mt-8 p-8 bg-[color:var(--bg-card)] rounded-xl border border-black/5 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Know a place we should add?</h3>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl leading-relaxed">
            This guide will be better with local input. Send restaurants,
            businesses, old photos, nearby stops, corrections, events, or Amity
            memories that should be included.
          </p>

          <a href="/contact" className="bg-black text-white px-6 py-3 rounded-md">
            Send a Suggestion
          </a>
        </div>
      </Section>
    </main>
  );
}
