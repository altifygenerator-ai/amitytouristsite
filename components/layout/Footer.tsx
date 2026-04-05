export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Amity Tourism</h3>
          <p className="text-sm text-white/80">
            Discover the charm of Amity, Arkansas — from scenic river floats to
            peaceful small-town experiences in the Ouachita region.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/explore" className="hover:underline">Things To Do</a></li>
            <li><a href="/local-business" className="hover:underline">Local Businesses</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get Listed</h3>
          <p className="text-sm text-white/80 mb-4">
            Own a local business? Get featured on Amity Tourism and reach visitors.
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
      <div className="border-t border-white/10 text-center text-sm text-white/70 py-6 space-y-4">

  <a
    href="https://buy.stripe.com/aFa4gz7By3qv67T8BX7N602"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[color:var(--color-accent)] text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
  >
    ❤️ Keep This Website Running
  </a>

  <div>
    © {new Date().getFullYear()} Amity Tourism. All rights reserved.
  </div>

</div>
      
    </footer>
  )
}