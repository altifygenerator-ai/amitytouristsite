import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-bg)]/80 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg tracking-wide">
          🌿 Amity Tourism
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/explore" className="hover:opacity-70">
            Things To Do
          </Link>

          <Link href="/local-business" className="hover:opacity-70">
            Local Businesses
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-[color:var(--color-accent)] text-white px-4 py-2 rounded-md font-medium hover:opacity-90"
          >
            Promote Your Business
          </Link>
          <a
  href="/history"
  className="px-3 py-1 border border-white/30 rounded-md hover:bg-white hover:text-black transition"
>
  History
</a>
 <a
    href="https://www.glenwoodarkansas.org"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-md font-medium shadow hover:opacity-90 transition"
  >
    Visit Glenwood →
  </a>
        </nav>
      </div>
    </header>
  )
}