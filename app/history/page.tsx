import Image from "next/image";
import { amityHistory } from "@/data/amity";
export const metadata = {
  title: "History of Amity Arkansas | Pioneer Roots, Railroad & Local Heritage",
  description:
    "Explore the history of Amity, Arkansas — from its 1847 pioneer settlement near the Caddo River to its railroad growth, timber years, schools, churches, and small-town heritage.",
  keywords: [
    "Amity Arkansas history",
    "history of Amity AR",
    "Amity Arkansas heritage",
    "Clark County Arkansas history",
    "Caddo River history",
    "Amity Trade Days",
    "Arkansas small town history",
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

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center dark-section">
        <Image
          src={amityHistory.hero.image}
          alt="Amity Arkansas history"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            {amityHistory.hero.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            {amityHistory.hero.description}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        {amityHistory.sections.map((section, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGES */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                <Image
                  src={section.images[0]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Smaller Images */}
              <div className="grid grid-cols-2 gap-4">
                {section.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-[120px] rounded-lg overflow-hidden"
                  >
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

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.text}
              </p>
            </div>

          </div>
        ))}

      </section>

    </main>
  );
}