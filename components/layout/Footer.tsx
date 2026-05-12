export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Amity Arkansas</h3>
          <p className="text-sm text-white/80">
            Discover the charm of Amity, Arkansas — from peaceful small-town
            stops to nearby river floats, lakes, cabins, and outdoor
            destinations in the Ouachita region.
          </p>
        </div>

        {/* Explore */}
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
                Things To Do
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
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Sister Sites */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Sister Sites</h3>
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

        {/* Contact CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get Listed</h3>
          <p className="text-sm text-white/80 mb-4">
            Own a local business near Amity? Get featured and connect with
            visitors exploring the area.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-sm text-white/70 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Amity Arkansas. Built as a local
            tourism and business guide.
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