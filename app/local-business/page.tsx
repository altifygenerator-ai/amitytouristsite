export const metadata = {
  title: "Local Businesses in Amity, Arkansas | Food, Lodging, Shops & Services",
  description:
    "Find local businesses in Amity, Arkansas including restaurants, coffee, grocery, lodging, shops, and services for residents and visitors.",
};

const businesses = [
  {
    name: "The Fox Pen Coffee Co.",
    category: "Coffee • Breakfast • Local Hangout",
    description:
      "A cozy local coffee spot in Amity serving coffee, drinks, and a small-town place to slow down. Good stop for locals, visitors, and anyone passing through town.",
    address: "106 E Thompson St, Amity, AR 71921",
    phone: "(907) 980-1610",
    slug: "/local-business/the-fox-pen-coffee-co",
  },
  {
    name: "Trudy’s Cafe",
    category: "Restaurant • Local Food",
    description:
      "A local Amity restaurant listed in the city business directory. A useful stop for people looking for food in town without having to drive into Glenwood.",
    address: "103 W Thompson St, Amity, AR 71921",
    phone: "(870) 342-9499",
    slug: "/local-business/trudys-cafe",
  },
  {
    name: "Timber Lodge Ranch",
    category: "Lodging • Cabins • Getaway",
    description:
      "A local lodging and cabin option in Amity with room for visitors looking for a quiet stay near the Ouachita region, Lake Greeson, DeGray Lake, and nearby outdoor attractions.",
    address: "966 Lodge Rd, Amity, AR 71921",
    phone: "(870) 342-9200",
    slug: "/local-business/timber-lodge-ranch",
  },
  {
    name: "Davidson’s Grocery",
    category: "Grocery • Local Essentials",
    description:
      "A small-town grocery and essentials stop in Amity. Useful for residents, visitors, and anyone needing quick supplies while passing through the area.",
    address: "105 E Thompson St, Amity, AR 71921",
    phone: "(870) 342-9400",
    slug: "/local-business/davidsons-grocery",
  },
  {
    name: "Gifts Galore & Boutique",
    category: "Shopping • Gifts • Boutique",
    description:
      "A local shopping stop in Amity for gifts, boutique items, and small-town retail. A good fit for visitors looking to support local shops.",
    address: "170 W Thompson St, Amity, AR 71921",
    phone: "(870) 342-5170",
    slug: "/local-business/gifts-galore-boutique",
  },
];

export default function LocalBusinessesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-6">
        Local Businesses in Amity, Arkansas
      </h1>

      <p className="text-lg mb-12 text-[color:var(--color-muted)] max-w-2xl">
        Amity may be small, but it has local spots worth knowing about — from
        coffee and food to cabins, groceries, shopping, and services. This guide
        is built to help residents and visitors find real businesses in and
        around Amity.
      </p>

      <div className="mb-10 bg-white rounded-xl shadow p-6 border">
        <p className="text-xs uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
          Featured Spot Available
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Promote Your Amity Business
        </h2>

        <p className="text-sm text-[color:var(--color-muted)] mb-4 max-w-2xl">
          Own a business in Amity or the surrounding area? Get featured on this
          page so locals and visitors can find your business faster.
        </p>

        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-medium"
        >
          Get Featured
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {businesses.map((business, index) => (
          <div key={business.name} className="bg-white rounded-xl shadow p-6">
            <p className="text-xs uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
              {business.category}
            </p>

            <h3 className="text-xl font-semibold mb-2">
              {index + 1}. {business.name}
            </h3>

            <p className="text-sm text-[color:var(--color-muted)] mb-4">
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
        <h2 className="text-2xl font-semibold mb-4">
          Nearby Food, Cabins, and Visitor Stops
        </h2>

        <p className="text-[color:var(--color-muted)] max-w-2xl mb-6">
          Because Amity is a smaller town, visitors may also use nearby Glenwood
          for more restaurants, cabins, river access, and outdoor stops. Amity
          still makes a great base for exploring the Caddo River, Lake Greeson,
          DeGray Lake, and the Ouachita region.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://www.glenwoodarkansas.org/glenwood-ar-restaurants"
            className="underline"
          >
            Restaurants in Glenwood →
          </a>

          <a
            href="https://www.glenwoodarkansas.org/glenwood-ar-cabins"
            className="underline"
          >
            Cabins near Glenwood →
          </a>
        </div>
      </section>
    </main>
  );
}