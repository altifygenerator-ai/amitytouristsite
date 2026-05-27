export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Amity Arkansas</h3>
          <p className="text-sm text-white/80">
            A small-town local guide for Amity, Arkansas, nearby Caddo River
            trips, local businesses, old history, community memory, and day
            trips across southwest Arkansas.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/explore" className="hover:underline">
                Area Guide
              </a>
            </li>
            <li>
              <a href="/local-business" className="hover:underline">
                Local Businesses
              </a>
            </li>
            <li>
              <a href="/history" className="hover:underline">
                Amity History
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Suggest a Place
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Nearby Guides</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a
                href="https://glenwoodarkansas.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Visit Glenwood
              </a>
            </li>
            <li>
              <a
                href="https://mountidaarkansas.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Visit Mount Ida
              </a>
            </li>
            <li>
              <a
                href="https://hotspringsarkansas.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Visit Hot Springs
              </a>
            </li>
          </ul>

          <p className="mt-5 text-xs leading-relaxed text-white/50">
            Part of the <strong>Natural State Tourism Project</strong>, an
            independent local tourism guide network.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Help Build It</h3>
          <p className="text-sm text-white/80 mb-4">
            Know a local business, old photo, history detail, correction, or
            nearby place we should add?
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
          >
            Send Info
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 text-sm text-white/70 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Amity Arkansas. Built as a small-town
            local guide.
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://buy.stripe.com/aFa4gz7By3qv67T8BX7N602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[color:var(--color-accent)] text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
            >
              ❤️ Keep This Website Running
            </a>

            <div className="text-white/50">
              Site by{" "}
              <a
                href="https://hometownwebservicesar.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition underline"
              >
                Hometown Web Services AR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
