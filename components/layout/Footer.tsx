import Link from "next/link";
import { sisterSites } from "@/data/amity";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/things-to-do", label: "Things To Do" },
      { href: "/caddo-river", label: "Caddo River" },
      { href: "/near-glenwood", label: "Near Glenwood" },
      { href: "/history", label: "History" },
    ],
  },
  {
    title: "Food & Local",
    links: [
      { href: "/restaurants", label: "Food & Drinks" },
      { href: "/local-business", label: "Local Businesses" },
      { href: "/contact", label: "Get Listed" },
    ],
  },
  {
    title: "Day Trips",
    links: [
      { href: "https://www.glenwoodarkansas.org", label: "Glenwood" },
      { href: "https://www.murfreesboroarkansas.org", label: "Murfreesboro" },
      { href: "https://www.mountidaarkansas.org", label: "Mount Ida" },
      { href: "https://www.hotspringsarkansas.org", label: "Hot Springs" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/contact", label: "Promote Your Business" },
      { href: "https://naturalstatetourismproject.org", label: "Natural State Tourism Project" },
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
              Quiet Arkansas days near Glenwood, the Caddo River, local food, old history, small businesses, and uncrowded southwest Arkansas back roads.
            </p>
          </div>

          <div className="footer-brand-actions">
            <Link href="/contact" className="footer-button footer-button-light">
              Get Listed
            </Link>
            <Link href="/caddo-river" className="footer-button footer-button-outline">
              River Guide
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
          © {new Date().getFullYear()} Amity Arkansas. Quiet stops, local stories, and small businesses near Glenwood and the Caddo River.
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
