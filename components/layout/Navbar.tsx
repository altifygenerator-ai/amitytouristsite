"use client";

import Link from "next/link";
import { useState } from "react";
import { businessLinks, guideLinks, sisterSites } from "@/data/amity";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Amity Arkansas
        </Link>

        <nav className="desktop-nav">
          <Link href="/">Home</Link>

          <div className="nav-dropdown">
            <button type="button">Visitor Guides</button>
            <div className="dropdown-menu">
              {guideLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button type="button">Food & Local</button>
            <div className="dropdown-menu">
              {businessLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button type="button">Nearby Guides</button>
            <div className="dropdown-menu">
              {sisterSites.map((site) => (
                <a key={site.href} href={site.href} target="_blank" rel="noopener noreferrer">
                  {site.label}
                </a>
              ))}
            </div>
          </div>

          <Link className="nav-cta" href="/contact">
            Sponsor / Get Listed
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="mobile-menu">
          <nav className="container mobile-menu-inner">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <div className="mobile-menu-group">
              <p>Visitor Guides</p>
              {guideLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mobile-menu-group">
              <p>Food & Local</p>
              {businessLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mobile-menu-group">
              <p>Nearby Guides</p>
              {sisterSites.map((site) => (
                <a key={site.href} href={site.href} target="_blank" rel="noopener noreferrer">
                  {site.label}
                </a>
              ))}
            </div>

            <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>
              Sponsor / Get Listed
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
