import TrackedBusinessLink from "@/components/TrackedBusinessLink";

// Server-only, read-only tourism inventory from Find A Place's PUBLIC listing RPC.
// Next.js caches the successful response for seven days; future visits refresh it.
// No separate cron, schema writes, service-role key, or booking system changes.
type PublishedRow = {
  slug: string;
  name: string;
  description: string | null;
  property_type: string | null;
  city: string | null;
  region_code: string | null;
  host_name: string | null;
  image_paths: string[] | null;
};

const allowedCities = new Set(["amity"]);
const alreadyShown = new Set([]);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const weekInSeconds = 604800;
const fapBase = "https://www.findaplacebooking.com";

function normalizeCity(value: string | null) {
  return (value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function excerpt(value: string | null) {
  const clean = (value ?? "").replace(/\s+/g, " ").trim();
  if (!clean) return "See the stay's photos, features and booking details on Find A Place.";
  return clean.length > 180 ? clean.slice(0, 176).replace(/\s+\S*$/, "") + "…" : clean;
}

async function publishedStays(): Promise<PublishedRow[]> {
  const key = process.env.FAP_PUBLIC_LISTING_KEY;
  if (!key) {
    console.error("[weekly-fap] Missing public listing key");
    return [];
  }

  try {
    const response = await fetch(
      "https://cuobtsfjppfvofqdihuo.supabase.co/rest/v1/rpc/public_listing_index",
      {
        method: "POST",
        headers: { apikey: key, "Content-Type": "application/json", Accept: "application/json" },
        body: "{}",
        next: { revalidate: weekInSeconds },
      },
    );
    if (!response.ok) {
      console.error("[weekly-fap] Public feed failed", response.status);
      return [];
    }
    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) return [];

    const unique = new Set<string>();
    return (payload as PublishedRow[])
      .filter((stay) =>
        stay &&
        typeof stay.slug === "string" &&
        slugPattern.test(stay.slug) &&
        !alreadyShown.has(stay.slug) &&
        stay.region_code?.toUpperCase() === "AR" &&
        allowedCities.has(normalizeCity(stay.city)) &&
        Array.isArray(stay.image_paths) &&
        stay.image_paths.length > 0,
      )
      .filter((stay) => {
        if (unique.has(stay.slug)) return false;
        unique.add(stay.slug);
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("[weekly-fap] Public listing refresh failed", error);
    return [];
  }
}

export default async function WeeklyFindAPlaceStays() {
  const stays = await publishedStays();
  if (!stays.length) return null;
  return (
    <section className="section section-warm" aria-label="Additional Find A Place vacation rentals">
      <div className="container">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider" style={{color:"#856149"}}>Independent stays · Find A Place Booking</p>
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl" style={{color:"#253A32"}}>Stay in Amity</h2>
        <p className="mt-3 max-w-3xl leading-7" style={{color:"#546157"}}>Independently hosted Find A Place rentals located in Amity, separate from the nearby Glenwood and Caddo Gap suggestions above.</p>
        <div className="card-grid">
          {stays.map((stay) => {
            const href = fapBase + "/stays/" + encodeURIComponent(stay.slug);
            const cover = fapBase + "/api/public/stay-cover/" + encodeURIComponent(stay.slug);
            return (
              <article key={stay.slug} className="note-card">
                <img src={cover} alt={stay.name} loading="lazy" decoding="async" style={{width:"100%",height:180,objectFit:"cover",borderRadius:12,marginBottom:16}} />
                <h3>{stay.name}</h3>
                <p>{stay.city} · {stay.property_type || "Stay"}</p>
                <p>{excerpt(stay.description)}</p>
                <TrackedBusinessLink href={href} business={stay.name} city="Amity" page="/near-glenwood" placement="weekly_find_a_place" placementType="editorial" action="find_a_place_booking" className="btn-secondary">View stay &amp; check dates ↗</TrackedBusinessLink>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs" style={{color:"#546157"}}>
          Published properties are checked approximately weekly. Review current availability, rules and total pricing on Find A Place before booking.
        </p>
      </div>
    </section>
  );
}
