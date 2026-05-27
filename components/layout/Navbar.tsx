import Link from "next/link";

const sisterSites = [
  {
    href: "https://glenwoodarkansas.org",
    label: "Visit Glenwood",
  },
  {
    href: "https://mountidaarkansas.org",
    label: "Visit Mount Ida",
  },
  {
    href: "https://hotspringsarkansas.org",
    label: "Visit Hot Springs",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-bg)]/80 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-wide">
          🌿 Amity Arkansas
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/explore" className="hover:opacity-70">
            Area Guide
          </Link>

          <Link href="/local-business" className="hover:opacity-70">
            Local Businesses
          </Link>

          <Link href="/history" className="hover:opacity-70">
            History
          </Link>

          <div className="relative group">
            <button className="hover:opacity-70">Nearby Guides ▾</button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-md shadow-lg border min-w-[190px] py-2">
              {sisterSites.map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-black/5"
                >
                  {site.label}
                </a>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-[color:var(--color-accent)] text-white px-4 py-2 rounded-md font-medium hover:opacity-90"
          >
            Suggest a Place
          </Link>
        </nav>
      </div>
    </header>
  );
}
