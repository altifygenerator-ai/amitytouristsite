import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteUrl = "https://visitamityarkansas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Visit Amity Arkansas | Things to Do, Places to Eat & Local Guide",
    template: "%s | Visit Amity Arkansas",
  },

  description:
    "Discover Amity, Arkansas — local attractions, restaurants, outdoor activities, history, and small-town charm near Hot Springs and Lake Ouachita.",

  keywords: [
    "Amity Arkansas",
    "things to do in Amity AR",
    "Amity Arkansas attractions",
    "restaurants in Amity Arkansas",
    "Hot Springs Arkansas nearby towns",
    "Lake Ouachita area guide",
    "small towns in Arkansas to visit",
    "Amity AR local businesses",
    "travel Amity Arkansas",
  ],

  authors: [{ name: "Visit Amity Arkansas" }],
  creator: "Visit Amity Arkansas",
  publisher: "Visit Amity Arkansas",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Visit Amity Arkansas | Local Guide & Attractions",
    description:
      "Explore Amity, Arkansas — attractions, dining, outdoor activities, and local businesses near Hot Springs and Lake Ouachita.",
    url: siteUrl,
    siteName: "Visit Amity Arkansas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Amity Arkansas town and surroundings",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Visit Amity Arkansas",
    description:
      "Your local guide to Amity, Arkansas — things to do, places to eat, and nearby attractions.",
    images: ["/images/og-cover.jpg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}