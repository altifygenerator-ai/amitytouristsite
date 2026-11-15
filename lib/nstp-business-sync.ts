// Shared owner-approved listing overrides. Content stays local if the central site is unavailable.
const origin = "https://www.naturalstatetourismproject.org";
const cities: Record<string, string> = {
  Glenwood: "glenwoodarkansas.org",
  "Hot Springs": "hotspringsarkansas.org",
  "Mount Ida": "mountidaarkansas.org",
  Murfreesboro: "murfreesboroarkansas.org",
  Amity: "amityarkansas.org",
};
type ApprovedListing = {
  name: string; source_site?: string; source_key?: string; slug?: string;
  approved_overrides?: Record<string, unknown>;
};
function slugKey(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "").replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
export async function approvedCityListings(city: string): Promise<ApprovedListing[]> {
  const source = cities[city];
  if (!source) return [];
  try {
    const response = await fetch(origin + "/api/directory/public?city=" + encodeURIComponent(city), {
      next: { revalidate: 300 }, signal: AbortSignal.timeout(4500)
    });
    if (!response.ok) return [];
    const json = await response.json() as { businesses?: ApprovedListing[] };
    return Array.isArray(json.businesses) ? json.businesses.filter(b =>
      b && b.source_site === source && typeof b.name === "string" &&
      b.approved_overrides && Object.keys(b.approved_overrides).length > 0
    ) : [];
  } catch { return []; }
}
export function mergeApprovedListings<T extends {
  name: string; slug?: string; description?: string; shortDescription?: string;
  phone?: string; address?: string; website?: string; href?: string; hours?: string;
}>(local: T[], approved: ApprovedListing[]): T[] {
  if (!approved.length) return local;
  const byKey = new Map<string, ApprovedListing | null>();
  for (const entry of approved) {
    const keys = new Set([entry.source_key, entry.slug, entry.name].filter((s): s is string => !!s).map(slugKey));
    for (const key of keys) {
      if (!key) continue;
      if (byKey.has(key) && byKey.get(key) !== entry) byKey.set(key, null);
      else if (!byKey.has(key)) byKey.set(key, entry);
    }
  }
  return local.map(item => {
    const raw = byKey.get(slugKey(item.slug || item.name)) ?? byKey.get(slugKey(item.name));
    if (!raw || !raw.approved_overrides) return item;
    const overrides = raw.approved_overrides;
    const revised: Record<string, unknown> = { ...item };
    for (const field of ["description", "phone", "address", "website", "hours"] as const) {
      if (typeof overrides[field] === "string") revised[field] = overrides[field];
    }
    if (typeof overrides.description === "string" && "shortDescription" in item) {
      revised.shortDescription = overrides.description.slice(0, 170);
    }
    if (typeof overrides.website === "string" && "href" in item &&
        typeof item.href === "string" && /^https?:\/\//.test(item.href) &&
        !/google\.com\/maps|maps\.apple\.com/.test(item.href)) {
      revised.href = overrides.website;
    }
    return revised as T;
  });
}
