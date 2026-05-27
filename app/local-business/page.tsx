export const metadata = {
  title: "Local Businesses in Amity, Arkansas | Food, Lodging, Shops & Services",
  description:
    "Find local businesses in Amity, Arkansas including food, coffee, lodging, shops, services, health resources, local essentials, and nearby visitor stops.",
};

const businesses = [
  {
    name: "The Fox Pen Coffee Co.",
    category: "Coffee • Local Stop • Hangout",
    description:
      "A local coffee stop in Amity and one of the kinds of places this guide is meant to make easier to find. Good for locals, visitors, and people passing through town.",
    address: "106 E Thompson St, Amity, AR 71921",
    phone: "(907) 980-1610",
    slug: "/local-business/the-fox-pen-coffee-co",
  },
  {
    name: "Trudy’s Cafe",
    category: "Restaurant • Local Food",
    description:
      "A local Amity food stop. For a small town, places like this matter because visitors and residents both need simple, close options without driving into a bigger town every time.",
    address: "103 W Thompson St, Amity, AR 71921",
    phone: "(870) 342-9499",
    slug: "/local-business/trudys-cafe",
  },
  {
    name: "Timber Lodge Ranch",
    category: "Lodging • Cabins • Quiet Stay",
    description:
      "A local lodging option near Amity for visitors planning a quiet stay, family visit, lake day, Caddo River trip, or broader Ouachita-region weekend.",
    address: "966 Lodge Rd, Amity, AR 71921",
    phone: "(870) 342-9200",
    slug: "/local-business/timber-lodge-ranch",
  },
  {
    name: "Davidson’s Grocery",
    category: "Grocery • Local Essentials",
    description:
      "A small-town grocery and essentials stop. These local basics are important for residents, nearby visitors, cabin stays, and people passing through the area.",
    address: "105 E Thompson St, Amity, AR 71921",
    phone: "(870) 342-9400",
    slug: "/local-business/davidsons-grocery",
  },
  {
    name: "Gifts Galore & Boutique",
    category: "Shopping • Gifts • Boutique",
    description:
      "A local shopping stop for gifts, boutique items, and small-town retail. Useful for visitors who want to support local instead of only stopping in larger nearby towns.",
    address: "170 W Thompson St, Amity, AR 71921",
    phone: "(870) 342-5170",
    slug: "/local-business/gifts-galore-boutique",
  },
  {
    name: "Amity Community Health Center",
    category: "Health • Community Resource",
    description:
      "A practical local health resource in Amity. Not every guide needs to be only restaurants and attractions; visitors and residents also need useful local information.",
    address: "210 N Main St, Amity, AR 71921",
    phone: "(870) 342-5606",
    slug: "/local-business/amity-community-health-center",
  },
];

const businessGroups = [
  {
    title: "Food and coffee",
    text: "Restaurants, cafes, coffee stops, and easy meals are the first things most people look for when they are passing through or staying nearby.",
  },
  {
    title: "Stays and nearby lodging",
    text: "Amity-area cabins, lodges, and rentals can support Caddo River days, Lake Greeson trips, family visits, and quiet weekends.",
  },
  {
    title: "Local essentials",
    text: "Groceries, health resources, services, shops, and practical stops matter in a small town because they keep the community usable.",
  },
];

export default function LocalBusinessesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Amity Local Guide
      </p>

      <h1 className="text-4xl font-semibold mb-6 md:text-5xl">
        Local businesses and useful stops in Amity, Arkansas
      </h1>

      <p className="text-lg mb-12 text-[color:var(--color-muted)] max-w-3xl leading-relaxed">
        Amity is small, but the businesses that are here matter. This page is
        built for local food, coffee, lodging, shops, services, health resources,
        and practical stops that residents and visitors may need while passing
        through or planning time around the Caddo River, Glenwood, Lake Greeson,
        and nearby towns.
      </p>

      <div className="grid gap-6 mb-12 md:grid-cols-3">
        {businessGroups.map((group) => (
          <div key={group.title} className="bg-white/70 rounded-xl shadow-sm p-6 border border-black/5">
            <h2 className="text-xl font-semibold mb-3">{group.title}</h2>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
              {group.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-10 bg-white rounded-xl shadow p-6 border border-black/5">
        <p className="text-xs uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
          Add or Update a Business
        </p>

        <h2 className="text-2xl font-semibold mb-2">Help keep the Amity guide accurate</h2>

        <p className="text-sm text-[color:var(--color-muted)] mb-4 max-w-2xl leading-relaxed">
          Own a business in Amity or the surrounding area? Know a place we
          missed, a business that closed, or contact info that needs corrected?
          Send it in so the guide stays useful.
        </p>

        <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-medium">
          Send Business Info
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {businesses.map((business, index) => (
          <div key={business.name} className="bg-white rounded-xl shadow p-6 border border-black/5">
            <p className="text-xs uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
              {business.category}
            </p>

            <h3 className="text-xl font-semibold mb-2">
              {index + 1}. {business.name}
            </h3>

            <p className="text-sm text-[color:var(--color-muted)] mb-4 leading-relaxed">
              {business.description}
            </p>

            <div className="text-sm text-[color:var(--color-muted)] space-y-2 mb-4">
              <p>📍 {business.address}</p>
              <p>📞 {business.phone}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${business.phone.replace(/[^\d]/g, "")}`}
                className="text-sm bg-black text-white px-4 py-2 rounded-md"
              >
                Call
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${business.name} ${business.address}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border px-4 py-2 rounded-md"
              >
                Directions
              </a>
            </div>

            <a
              href={business.slug}
              className="inline-block mt-4 text-sm text-[color:var(--color-accent)] font-medium"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Nearby food, cabins, and visitor stops</h2>

        <p className="text-[color:var(--color-muted)] max-w-3xl mb-6 leading-relaxed">
          Because Amity is a smaller town, visitors may also use nearby Glenwood
          for more restaurants, cabins, Caddo River outfitters, and local events.
          That does not make Amity less important. It makes Amity part of a
          larger local route that connects the Caddo River, Lake Greeson, DeGray,
          Murfreesboro, Mount Ida, and Hot Springs.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="https://www.glenwoodarkansas.org/glenwood-ar-restaurants" className="underline">
            Restaurants in Glenwood →
          </a>

          <a href="https://www.glenwoodarkansas.org/glenwood-ar-cabins" className="underline">
            Cabins near Glenwood →
          </a>
        </div>
      </section>
    </main>
  );
}
