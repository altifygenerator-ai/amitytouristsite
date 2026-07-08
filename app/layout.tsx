import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { siteName, siteUrl } from "@/data/amity";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6efe3",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amity Arkansas Guide | Caddo River, Trade Days & Local Stops",
    template: "%s | Amity Arkansas Guide",
  },
  description:
    "Plan a visit to Amity, Arkansas near Glenwood and the Caddo River with lower-Caddo access notes, local food, Slate Rock Brewing, town square history, Trade Days stories, events, and small businesses.",
  keywords: [
    "Amity Arkansas",
    "Amity AR",
    "things to do in Amity Arkansas",
    "Caddo River Amity Arkansas",
    "Hwy 182 Caddo River access",
    "Glenwood to Amity float",
    "Amity Trade Days",
    "Amity Arkansas restaurants",
    "Slate Rock Brewing Amity",
    "Hometown Pizza Amity Arkansas",
    "Trudy's Amity Arkansas",
    "Amity near Glenwood Arkansas",
    "Clark County Arkansas tourism",
    "southwest Arkansas day trips",
  ],
  authors: [{ name: "Natural State Tourism Project" }],
  creator: "Natural State Tourism Project",
  publisher: "Natural State Tourism Project",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Amity Arkansas Guide | Lower Caddo River, Trade Days & Local Stops",
    description:
      "Use Amity as the quieter lower-Caddo stop near Glenwood with river access notes, local food, town square history, Trade Days memories, and small businesses worth supporting.",
    url: siteUrl,
    siteName,
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
      "Lower-Caddo access notes, food stops, Trade Days stories, and local businesses near Glenwood, Arkansas.",
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
  other: {
    "geo.region": "US-AR",
    "geo.placename": "Amity, Arkansas",
    "og:country-name": "United States",
    "og:region": "Arkansas",
    "og:locality": "Amity",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description:
    "A local visitor guide for Amity, Arkansas with Caddo River access notes, local businesses, food stops, Trade Days history, events, and southwest Arkansas trip planning.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Natural State Tourism Project",
    url: "https://naturalstatetourismproject.org",
  },
};

const destinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Amity, Arkansas",
  description:
    "Amity, Arkansas is a quiet small-town stop near Glenwood and the Caddo River with lower-Caddo access notes, local food, town square history, and nearby southwest Arkansas day trips.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amity",
    addressRegion: "AR",
    addressCountry: "US",
  },
  touristType: ["Caddo River visitors", "Families", "Small-town travelers", "River and lake travelers"],
  includesAttraction: [
    { "@type": "TouristAttraction", name: "Caddo River" },
    { "@type": "TouristAttraction", name: "Amity Town Square" },
    { "@type": "TouristAttraction", name: "Amity Trade Days history" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }} />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
