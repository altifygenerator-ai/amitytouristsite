"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Counts only anonymized, deduplicated first-party pageviews and exact
// recorded links to businesses listed in our shared Natural State directory.
// This does not track sales, bookings, or identifiable visitor profiles.
const endpoint = "https://www.naturalstatetourismproject.org/api/directory/metrics";
function report(payload: Record<string, string>) {
  fetch(endpoint, { method: "POST", mode: "cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload), keepalive: true,
    credentials: "omit"
  }).catch(() => {});
}

export default function NstpReachTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) report({ event: "site_view", path: pathname });
  }, [pathname]);
  useEffect(() => {
    function recordExternalClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      try {
        const url = new URL(anchor.href, window.location.href);
        if (!["https:", "http:"].includes(url.protocol) ||
          url.hostname.replace(/^www\./, "") === window.location.hostname.replace(/^www\./, "")) return;
        // The directory backend matches this exact destination against an active
        // business in the current city. Unmatched or ambiguous links are ignored.
        report({ event: "website_click", href: url.href,
          placement: "city-guide-external" });
      } catch {}
    }
    document.addEventListener("click", recordExternalClick, true);
    return () => document.removeEventListener("click", recordExternalClick, true);
  }, []);
  return null;
}
