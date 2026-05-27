import Image from "next/image";
import { amityHistory } from "@/data/amity";

export const metadata = {
  title: "History of Amity Arkansas | Caddo River, Railroad, Timber & Local Memory",
  description:
    "Explore the history of Amity, Arkansas, from early Caddo River settlement and the public square to railroad growth, timber work, schools, churches, newspapers, quicksilver history, and local memory.",
  keywords: [
    "Amity Arkansas history",
    "history of Amity AR",
    "Amity Arkansas heritage",
    "Clark County Arkansas history",
    "Caddo River history",
    "Arkansas small town history",
    "quicksilver Amity Arkansas",
    "Old Bank of Amity",
  ],
};

export default function HistoryPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Amity, Arkansas",
            description:
              "A small Arkansas town with history tied to the Caddo River, early settlement, the public square, railroad growth, timber work, schools, churches, and local memory.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amity",
              addressRegion: "AR",
              addressCountry: "US",
            },
          }),
        }}
      />

      <section className="relative h-[60vh] flex items-center justify-center text-center dark-section">
        <Image
          src={amityHistory.hero.image}
          alt="Amity Arkansas history"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-white px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
            Local History
          </p>

          <h1 className="text-5xl font-bold mb-4">{amityHistory.hero.title}</h1>
          <p className="max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            {amityHistory.hero.description}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-16 rounded-2xl bg-white/70 p-6 shadow-sm border border-black/5 md:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Why this history matters
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Amity has more story than a quick drive-through shows.
          </h2>

          <p className="max-w-3xl leading-relaxed text-[color:var(--color-muted)]">
            The town’s story runs through river settlement, church and school
            life, the public square, railroad trade, timber work, small-town
            newspapers, mining rumors and booms, and generations of people who
            kept the community going. This page is meant to be a starting point,
            not the final word.
          </p>
        </div>

        {amityHistory.sections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""} space-y-4`}>
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                <Image
                  src={section.images[0]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {section.images.slice(1).map((img, i) => (
                  <div key={i} className="relative h-[120px] rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${section.title} ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Amity Story
              </p>

              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <p className="text-[color:var(--color-muted)] leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-[color:var(--bg-card)] p-8 border border-black/5 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4">
            Have old Amity photos or memories?
          </h2>

          <p className="max-w-3xl leading-relaxed text-[color:var(--color-muted)] mb-6">
            This history section can grow with help from locals. Old school
            photos, town square memories, church events, business stories,
            family history, and corrections are all welcome.
          </p>

          <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-md">
            Send a Local Memory
          </a>
        </div>
      </section>
    </main>
  );
}
