import { Attraction, Highlight, ItineraryBlock } from "@/types/tourism"
export const amitySEO = {
  title:
    "Visit Amity Arkansas | Caddo River, Lake Greeson & Local Businesses",

  description:
    "Discover Amity Arkansas tourism. Float the Caddo River, visit Lake Greeson, and explore local businesses.",

  openGraph: {
    title: "Visit Amity Arkansas",
    description:
      "Explore the Caddo River, Lake Greeson, and small-town charm in Amity, Arkansas.",
    url: "https://amitytouristsite.vercel.app/",
    siteName: "Amity Tourism",
    images: [
      {
        url: "/images/amity/TownSquare.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export const amityHero = {
  eyebrow: "Southwest Arkansas • Ouachita Region",
  title: "Visit Amity, Arkansas",
  description:
    "A quiet Arkansas town with a charming square and direct access to the Caddo River, Lake Greeson, and some of the most scenic outdoor destinations in the Ouachita Mountains.",
  image: "/images/amity/TownSquare.jpg",
}

export const amityIntro = {
  heading: "A small town surrounded by Arkansas’ best outdoor destinations",
  text: `
Amity, Arkansas is a peaceful small town tucked into the Ouachita region, making it an ideal base for exploring nearby rivers, lakes, and state parks. While the town itself offers a quiet historic square and local charm, the real draw is its location.

Within a short drive, visitors can float the Caddo River, relax along Lake Greeson, explore Daisy State Park, or take a day trip to Crater of Diamonds State Park. Amity offers the kind of slow pace and simplicity that makes it easy to disconnect while still being close to some of Arkansas’ most popular outdoor destinations.
`,
}

export const amityHighlights: Highlight[] = [
  { label: "Historic small-town square" },
  { label: "Minutes from Caddo River access" },
  { label: "Close to Lake Greeson & Daisy State Park" },
  { label: "Easy day trip to Crater of Diamonds" },
]

export const amityAttractions: Attraction[] = [
  {
    title: "Amity Town Square",
    description:
      "A quiet historic square with classic Arkansas charm, local buildings, and a slower pace of life.",
    image: "/images/amity/TownSquare.jpg",
    alt: "Historic Amity Arkansas town square",
  },
  {
    title: "Caddo River",
    description:
      "One of the clearest rivers in Arkansas, perfect for floating, kayaking, swimming, and fishing. A favorite for families and weekend trips.",
    image: "/images/amity/CaddoRiver4.webp",
    alt: "Caddo River kayaking near Amity Arkansas",
  },
  {
    title: "Lake Greeson",
    description:
      "A scenic Ouachita lake known for fishing, boating, and peaceful shorelines surrounded by forest.",
    image: "/images/amity/LakeGreeson2.jpg",
    alt: "Lake Greeson Arkansas view",
  },
  {
    title: "Daisy State Park",
    description:
      "Located on Lake Greeson, this park offers camping, cabins, hiking trails, and water access.",
    image: "/images/amity/DaisyStatePark1.avif",
    alt: "Daisy State Park Arkansas lake",
  },
  {
    title: "DeGray Lake Resort State Park",
    description:
      "A full-service state park with beaches, golf, hiking trails, and a resort lodge just a short drive away.",
    image: "/images/amity/Degray1.jpg",
    alt: "DeGray Lake Arkansas",
  },
  {
    title: "Lake Ouachita",
    description:
      "Arkansas’ largest lake, known for crystal-clear water, island camping, and scenic views near Mount Ida.",
    image: "/images/amity/LakeOuachita1.jpg",
    alt: "Lake Ouachita Arkansas",
  },
  {
    title: "Crater of Diamonds State Park",
    description:
      "The only public diamond mine in the world where visitors can search for and keep real diamonds.",
    image: "/images/amity/CraterofDiamonds2.avif",
    alt: "Crater of Diamonds State Park digging field",
  },
]

export const amityItinerary: ItineraryBlock[] = [
  {
    title: "Half-Day in Amity",
    description:
      "Start with a walk around the Amity town square, then head out to the Caddo River for a float, swim, or relaxing afternoon by the water.",
  },
  {
    title: "Weekend Getaway",
    description:
      "Stay near Lake Greeson or Daisy State Park, spend a day on the water, and take a second day to explore Crater of Diamonds or DeGray Lake.",
  },
  {
    title: "Outdoor Adventure Trip",
    description:
      "Use Amity as a central hub to explore the Ouachita region, including Lake Ouachita, hiking trails, and multiple lakes within a short drive.",
  },
]

export const amityFAQ = [
  {
    question: "What is Amity Arkansas known for?",
    answer:
      "Amity is known for its small-town charm, historic square, and its location near the Caddo River, Lake Greeson, and several major Arkansas outdoor destinations.",
  },
  {
    question: "Is Amity Arkansas worth visiting?",
    answer:
      "Yes, especially if you enjoy quiet towns and outdoor recreation. It is best used as a base for exploring nearby rivers, lakes, and parks.",
  },
  {
    question: "How far is the Caddo River from Amity?",
    answer:
      "The Caddo River is just a short drive north of Amity, making it one of the closest and most popular attractions.",
  },
  {
    question: "What attractions are near Amity Arkansas?",
    answer:
      "Nearby attractions include Lake Greeson, Daisy State Park, DeGray Lake Resort State Park, Lake Ouachita, and Crater of Diamonds State Park.",
  },
]
export const amityHistory = {
  hero: {
    title: "History of Amity",
    description:
      "A small Arkansas town with deep roots, strong community, and stories that still shape it today.",
    image: "/images/amity/store.jpg",
  },

  sections: [
    {
      title: "Early Beginnings",
      text:
        "Amity was founded in the late 1800s and grew around timber, agriculture, and railroad trade. It became a quiet but important stop in southwest Arkansas.",
      images: [
        "/images/amity/OldAmitySchoiol.jpg",
        "/images/amity/amitytown.jpg",
      
      ],
    },
    {
      title: "A Lasting Community",
      text:
        "Through generations, Amity has remained a place where people know each other. Churches, schools, and family businesses shaped its identity.",
      images: [
        "/images/amity/church.jpg",
        "/images/amity/oldsquare.webp",
        "/images/amity/map.jpg",
      ],
    },
    {
      title: "Amity Today",
      text:
        "Today, Amity blends historic charm with modern small-town life, offering visitors peace, nature, and authentic local culture.",
      images: [
        "/images/amity/TownSquare.jpg",
        "/images/amity/townsquarecircle.jpg",
        "/images/amity/cityhall.jpg",
      ],
    },
  ],
};