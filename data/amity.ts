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
    title: "The History of Amity, Arkansas",
    description:
      "From pioneer settlement along the Caddo River to railroad growth, timber work, trade, schools, churches, and the small-town community Amity is today.",
    image: "/images/amity/cityhall.jpg",
  },

  sections: [
  {
    title: "Pioneer beginnings along the Caddo River",
    text:
      "Amity was founded in 1847 by pioneer families from the Mount Bethel area under the leadership of William F. Browning, who had served as Clark County surveyor. The early settlement formed near the Caddo River, where rich bottomland, fresh water, and natural travel routes made the area useful for farming, families, and trade. Browning built a two-story log house west of Caney Creek that became an early center of community life. He gave the settlement the name Amity, a word tied to peace, friendship, and brotherhood.",
    images: [
      "/images/amity/history/map.jpg",
      "/images/amity/history/amitytown.jpg",
    ],
  },
  {
    title: "Church, school, and community roots",
    text:
      "Like many early Arkansas towns, Amity grew first around shared institutions instead of large businesses. In 1848, Browning and other local citizens helped form what became Bethel Missionary Baptist Church, one of the earliest religious organizations in the area. A large log church building also served as a schoolhouse, showing how practical early community life had to be. Church, school, family, and local gathering places gave Amity its first real identity.",
    images: [
      "/images/amity/history/church.jpg",
      "/images/amity/history/OldAmitySchool.jpg",
    ],
  },
  {
    title: "A town built around a public square",
    text:
      "After the Civil War era, Amity’s center shifted toward the area where the town stands today. In 1871, Colonel Philander Curtis, Riley Thompson, and Jacob H. Lightsey helped lay out the town around a public square. That square became the center for businesses, churches, schools, and public life. By the 1870s, Amity was developing from a scattered settlement into a real village with stores, gathering places, and a stronger local identity.",
    images: [
      "/images/amity/history/oldsquare.webp",
      "/images/amity/history/store.jpg",
    ],
  },
  {
    title: "Railroad growth and the timber years",
    text:
      "Shortly after 1900, the Gurdon and Fort Smith Railroad helped change Amity’s future. Rail access made it easier to move timber, goods, and people through the region. Amity became a shipping and trade center for the surrounding area while nearby sawmills and lumber operations helped drive the local economy. The Bank of Amity opened in 1905, and the town was officially incorporated in 1907, marking an important period of growth.",
    images: [
      "/images/amity/history/amitytown.jpg",
      "/images/amity/history/store.jpg",
    ],
  },
  {
    title: "Schools, newspapers, and local identity",
    text:
      "Education remained a major part of Amity’s story. The Amity Male and Female Academy eventually became part of the public school system, and local schools helped hold the community together for generations. Amity also had newspapers and local publications that recorded town news, business activity, and community life. These institutions helped give the town a voice and kept people connected across rural south Arkansas.",
    images: [
      "/images/amity/history/OldAmitySchool.jpg",
      "/images/amity/history/church.jpg",
    ],
  },
  {
    title: "Booms, setbacks, and rural resilience",
    text:
      "Amity’s history includes both growth and hard seasons. The region saw timber booms, a short-lived gold excitement in the Trap Mountains, and a brief quicksilver mining rush before World War II. Like many rural Arkansas towns, Amity later faced economic changes as timber jobs declined and industries shifted. Still, the town held onto its identity through schools, churches, small businesses, local events, and the people who stayed rooted here.",
    images: [
      "/images/amity/history/oldsquare.webp",
      "/images/amity/history/map.jpg",
    ],
  },
  {
    title: "Amity today",
    text:
      "Today, Amity remains a small Arkansas town with deep roots and a strong sense of place. It sits near Glenwood, the Caddo River, Lake Greeson, and other outdoor destinations that connect it to regional tourism and local life. Events like Amity Trade Days have helped bring visitors into town, while families, businesses, churches, and community groups continue the tradition of moving forward without forgetting where the town came from.",
    images: [
      "/images/amity/cityhall.jpg",
      "/images/amity/townsquarecircle.jpg",
    ],
  },
],
}