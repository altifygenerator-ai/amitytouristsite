import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amity Arkansas Guide | Near Glenwood, Caddo River & Local Stops",
    template: "%s | Amity Arkansas Guide",
  },
  description:
    "Visit Amity, Arkansas near Glenwood and the Caddo River for small businesses, food stops, quiet river-country roads, local history, and southwest Arkansas day trips.",
  keywords: [
    "Amity Arkansas",
    "Amity AR",
    "things to do in Amity Arkansas",
    "Amity Arkansas restaurants",
    "Caddo River Amity Arkansas",
    "Amity near Glenwood Arkansas",
    "small towns near Glenwood Arkansas",
    "Slate Rock Brewing Amity",
    "Hometown Pizza Amity Arkansas",
    "Trudy's Amity Arkansas",
    "Clark County Arkansas tourism",
    "southwest Arkansas day trips",
  ],
  authors: [{ name: "Natural State Tourism Project" }],
  creator: "Natural State Tourism Project",
  publisher: "Natural State Tourism Project",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Amity Arkansas Guide | Quiet Stop Near Glenwood & the Caddo River",
    description:
      "Visit Amity as a quiet extension of Glenwood with local food, a brewery stop, small-town history, and calmer Caddo River area access.",
    url: siteUrl,
    siteName: "Amity Arkansas Guide",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Amity Arkansas town square and nearby Caddo River area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amity Arkansas Guide",
    description:
      "Small-town Amity, Arkansas near Glenwood, the Caddo River, local businesses, and quiet southwest Arkansas day trips.",
    images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
