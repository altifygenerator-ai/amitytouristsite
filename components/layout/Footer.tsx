import Link from "next/link";
import { sisterSites } from "@/data/amity";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/things-to-do", label: "Things To Do" },
      { href: "/caddo-river", label: "Caddo River" },
      { href: "/caddo-river-access-near-amity", label: "River Access" },
      { href: "/near-glenwood", label: "Near Glenwood" },
      { href: "/history", label: "History" },
    ],
  },
  {
    title: "River & Markets",
    links: [
      { href: "/hwy-182-caddo-river-access", label: "Hwy 182 Access" },
      { href: "/glenwood-to-amity-float-guide", label: "Glenwood to Amity Float" },
      { href: "/amity-river-day-itinerary", label: "River Day Itinerary" },
      { href: "/amity-trade-days", label: "Amity Trade Days" },
      { href: "/events", label: "Events & Markets" },
    ],
  },
  {
    title: "Food & Local",
    links: [
      { href: "/restaurants", label: "Food & Drinks" },
      { href: "/local-business", label: "Local Businesses" },
      { href: "/contact", label: "Get Listed or Sponsor" },
      { href: "/submit-event", label: "Submit Event" },
    ],
  },
  {
    title: "Nearby Guides",
    links: [
      { href: "https://www.glenwoodarkansas.org", label: "Glenwood" },
      { href: "https://www.murfreesboroarkansas.org", label: "Murfreesboro" },
      { href: "https://www.mountidaarkansas.org", label: "Mount Ida" },
      { href: "https://www.hotspringsarkansas.org", label: "Hot Springs" },
    ],
  },
];

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="footer-group">
      <h4>{title}</h4>
      <div className="footer-link-list">
        {links.map((link) =>
          link.href.startsWith("http") ? (
            <a key={`${title}-${link.href}`} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={`${title}-${link.href}`} href={link.href}>
              {link.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-row">
          <div>
            <h3>Amity Arkansas</h3>
            <p>
              Lower-Caddo access notes, local food, town square history, Trade Days memories, small businesses, and quiet southwest Arkansas stops near Glenwood.
            </p>
          </div>

          <div className="footer-brand-actions">
            <Link href="/contact" className="footer-button footer-button-light">
              Get Listed or Sponsor
            </Link>
            <Link href="/caddo-river-access-near-amity" className="footer-button footer-button-outline">
              River Access Notes
            </Link>
          </div>
        </div>

        <div className="footer-link-grid">
          {footerGroups.map((group) => (
            <FooterGroup key={group.title} title={group.title} links={group.links} />
          ))}
        </div>

        <div className="footer-sister-row">
          <span>Nearby Arkansas guides</span>
          <div>
            {sisterSites.map((site) => (
              <a key={site.href} href={site.href} target="_blank" rel="noopener noreferrer">
                {site.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Amity Arkansas. Local guide for the quieter side of the Caddo River near Glenwood.
        </p>
        <p>
          Part of the{" "}
          <a href="https://naturalstatetourismproject.org" target="_blank" rel="noopener noreferrer">
            Natural State Tourism Project
          </a>
        </p>
        <p>
          Website by{" "}
          <a href="https://hometownwebservicesar.com" target="_blank" rel="noopener noreferrer">
            Hometown Web Services
          </a>
        </p>
      </div>
    </footer>
  );
}
