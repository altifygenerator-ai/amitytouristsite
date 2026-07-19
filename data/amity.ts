export const siteUrl = "https://www.amityarkansas.org";
export const siteName = "Amity Arkansas Guide";

export const sisterSites = [
  { href: "https://www.glenwoodarkansas.org", label: "Glenwood Arkansas" },
  { href: "https://www.hotspringsarkansas.org", label: "Hot Springs Arkansas" },
  { href: "https://www.mountidaarkansas.org", label: "Mount Ida Arkansas" },
  { href: "https://www.murfreesboroarkansas.org", label: "Murfreesboro Arkansas" },
];

export const guideLinks = [
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/caddo-river", label: "Caddo River" },
  { href: "/caddo-river-access-near-amity", label: "River Access" },
  { href: "/amity-river-day-itinerary", label: "River Day Plan" },
  { href: "/near-glenwood", label: "Near Glenwood" },
  { href: "/history", label: "History" },
  { href: "/amity-trade-days", label: "Trade Days" },
];

export const businessLinks = [
  { href: "/local-business", label: "All Local Businesses" },
  { href: "/restaurants", label: "Food & Drinks" },
  { href: "/events", label: "Events & Markets" },
  { href: "/amity-market-date-vote", label: "Vote on Market Date" },
  { href: "/contact", label: "Get Listed" },
];

export const homeStats = [
  { label: "From Glenwood", value: "about 7 miles" },
  { label: "River access", value: "Hwy 182" },
  { label: "Town feel", value: "quiet square" },
  { label: "Best use", value: "after the river" },
];

export type FeaturedBusiness = {
  name: string;
  slug: string;
  badge: "Our Pick" | "Featured Local Partner";
  placementType: "editorial" | "paid";
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  href: string;
  address?: string;
  phone?: string;
  website?: string;
  facebook?: string;
  notes?: string[];
  goodFor?: string[];
};

export const featuredBusinesses: FeaturedBusiness[] = [
  {
    name: "Slate Rock Brewing",
    slug: "slate-rock-brewing",
    badge: "Our Pick",
    placementType: "editorial",
    category: "Brewery • Local Hangout • Amity Stop",
    description:
      "Slate Rock Brewing gives Amity a real stop after the river or on the short drive over from Glenwood. It is the kind of place that helps a small town feel open: a drink, a seat, a local conversation, and one more reason not to hurry through.",
    shortDescription:
      "Small-town brewery, easy drive from Glenwood, and one of the clearest reasons to stop in Amity.",
    image: "/images/amity/slaterock.webp",
    href: "https://www.google.com/maps/search/?api=1&query=Slate%20Rock%20Brewing%20Amity%20Arkansas",
    notes: ["Brewery in Amity", "Good after-river stop", "Check current hours"],
    goodFor: ["After a float", "Glenwood side trip", "Local evening stop"],
  },
  {
    name: "Hometown Pizza",
    slug: "hometown-pizza",
    badge: "Our Pick",
    placementType: "editorial",
    category: "Pizza • Easy Meal • Local Food",
    description:
      "Hometown Pizza is a practical Amity food stop for families, ball games, river days, and anyone coming through town who wants an easy meal without driving back to the busier side of the area.",
    shortDescription:
      "Easy local pizza stop for families, river days, and people passing through Amity.",
    image: "/images/amity/hometown-pizza.jpg",
    href: "https://www.google.com/maps/search/?api=1&query=Hometown%20Pizza%20Amity%20Arkansas",
    notes: ["Local food", "Family-friendly stop", "Check current hours"],
    goodFor: ["After the river", "With kids", "Quick local meal"],
  },
  {
    name: "Trudy's",
    slug: "trudys",
    badge: "Our Pick",
    placementType: "editorial",
    category: "Cafe • Local Food • Small-Town Stop",
    description:
      "Trudy's helps keep Amity useful for locals and visitors. It fits the kind of trip where you are not trying to pack the day full, you just need a meal, a slower stop, and a reason to pull into town instead of passing by.",
    shortDescription:
      "Local food stop that keeps Amity useful for residents, visitors, and folks passing through.",
    image: "/images/amity/trudys.png",
    href: "https://www.google.com/maps/search/?api=1&query=Trudy%27s%20Amity%20Arkansas",
    notes: ["Local cafe", "Small-town food stop", "Check current hours"],
    goodFor: ["Lunch stop", "Local meal", "Slow drive through town"],
  },
    {
    name: "Amity Thrift and Resale",
    slug: "amity-thrift-and-resale",
    badge: "Our Pick",
    placementType: "editorial",
    category: "Thrift Store • Resale Finds • Local Shopping",
    description:
  "Amity Thrift and Resale is a local thrift and resale shop on East Thompson Street in Amity. It is a simple, useful stop for secondhand finds, affordable goods, and visitors who want to support one of the small businesses helping keep the town active.",
    shortDescription:
      "Small-town thrift and resale shop with affordable finds, local character, and a real Amity feel.",
    image: "/images/amity/amity-thrift-and-resale.jpg",
    href: "https://www.google.com/maps/search/?api=1&query=Amity%20Thrift%20and%20Resale%20East%20Thompson%20St%20Amity%20AR%2071921",
    notes: ["Thrift and resale shop", "Local Amity business", "Check current hours"],
    goodFor: ["Small-town shopping", "Secondhand finds", "Slow stop in Amity"],
  },
];

export const riverNotes = [
  {
    title: "The quieter side of the Caddo",
    text:
      "Glenwood is still the main rental-and-shuttle hub. Amity is the quieter lower-Caddo side of the trip: slower roads, fishing, a reported public access point to check before you go, and a town close enough for food after the river.",
  },
  {
    title: "Use confirmed access only",
    text:
      "The Caddo runs through a mix of public access points and private riverfront. Do not treat every gravel bar or bridge pull-off as public. Watch signs, check current conditions, and leave nearby landowners with no reason to complain.",
  },
  {
    title: "Tie the river back to town",
    text:
      "A good river day should not skip the town beside it. Grab pizza, stop at Trudy's, check Slate Rock, look around the square, and leave a little money with the places still open.",
  },
];

export const riverGuideLinks = [
  {
    title: "Caddo River Access Near Amity",
    text: "Start here for the Amity-side access notes, public/private land reminders, and the Hwy 182 river crossing.",
    href: "/caddo-river-access-near-amity",
  },
  {
    title: "Hwy 182 Caddo River Access",
    text: "Details for the access point north of Amity, with reminders about parking, signs, water, and nearby private land.",
    href: "/hwy-182-caddo-river-access",
  },
  {
    title: "Glenwood to Amity Float Guide",
    text: "Helpful notes for the lower stretch from Glenwood toward Amity, especially when a shuttle or take-out needs to be planned ahead.",
    href: "/glenwood-to-amity-float-guide",
  },
  {
    title: "Fishing the Lower Caddo",
    text: "Fishing notes for the Caddo River near Amity and the stretch above DeGray Lake.",
    href: "/fishing-caddo-river-near-amity",
  },
  {
    title: "Amity River Day Itinerary",
    text: "A simple day plan that connects the river, food stops, the square, Glenwood, and nearby lake routes.",
    href: "/amity-river-day-itinerary",
  },
  {
    title: "River Safety & Private Land",
    text: "Keep this part of the Caddo useful by respecting water levels, parking, posted land, and common-sense river rules.",
    href: "/caddo-river-safety-private-land",
  },
];

export const riverAccessPoints = [
  {
    name: "Hwy 182 Caddo River Access",
    slug: "hwy-182-caddo-river-access",
    status: "Public access reported; check signage and conditions before using.",
    location: "State Highway 182 north of Amity, near the bridge over the Caddo River",
    coordinates: "N 34° 17' 24.15\" / W 093° 27' 31.48\"",
    bestFor: ["Lower Caddo planning", "Fishing", "Experienced paddlers", "Scouting the route"],
    notBestFor: ["Large crowds", "Leaving trash", "Blocking bridge or nearby property", "Unverified swimming with kids"],
    notes: [
      "Caddo River Camping & Canoe Rental lists Amity at State Highway 182 on river right just below the bridge.",
      "The Encyclopedia of Arkansas also has a 2023 Amity Access photo captioned as Caddo River access with the Highway 182 bridge at Amity.",
      "Access details, parking, landowner concerns, and safe river conditions can change. Check the signs on the ground before using the area.",
    ],
    image: "/images/amity/CaddoRiver4.webp",
  },
];

export const thingsToDo = [
  {
    title: "Make Amity a Glenwood side trip",
    description:
      "Already coming to Glenwood for the Caddo River, cabins, or a weekend drive? Add Amity without making the day complicated. Come over for food, Slate Rock, the old square, and the quieter lower-Caddo side.",
    image: "/images/amity/TownSquare.jpg",
    href: "/near-glenwood",
  },
  {
    title: "Read the lower-Caddo notes",
    description:
      "The river around Amity needs careful, local-style planning. Check access, water, and weather before you go, and do not assume every riverbank is public.",
    image: "/images/amity/CaddoRiver4.webp",
    href: "/caddo-river-access-near-amity",
  },
  {
    title: "Eat before or after the river",
    description:
      "A pizza order, a cafe meal, or a drink at Slate Rock does more here than it would in a bigger tourist town. Build the Amity stop into the river day.",
    image: "/images/amity/hometown-pizza.jpg",
    href: "/restaurants",
  },
  {
    title: "Walk the square and the older story",
    description:
      "The square is quiet now, but it is still the shape of the town. Use the history page and the Trade Days article to understand what Amity used to pull in.",
    image: "/images/amity/history/oldsquare.webp",
    href: "/history",
  },
  {
    title: "Remember Amity Trade Days",
    description:
      "Trade Days proved people would drive to Amity when the reason was clear. A smaller market, vendor day, or square event could bring back some of that rhythm in a way that fits the town now.",
    image: "/images/amity/tradedays.png",
    href: "/amity-trade-days",
  },
  {
    title: "Turn the stop into a wider route",
    description:
      "Lake Greeson, Daisy State Park, DeGray Lake, Crater of Diamonds, Mount Ida, and Hot Springs are close enough to make Amity part of a bigger southwest Arkansas day.",
    image: "/images/amity/LakeGreeson2.jpg",
    href: "/things-to-do",
  },
];

export const nearbyTrips = [
  {
    title: "Glenwood",
    kicker: "Caddo River hub",
    text:
      "Use Glenwood for cabins, outfitters, rental/shuttle planning, and the main river-town services, then drive the few extra miles to Amity for the quieter local stop.",
    href: "https://www.glenwoodarkansas.org",
  },
  {
    title: "Lake Greeson & Daisy State Park",
    kicker: "Lake day",
    text:
      "A nearby lake route for camping, fishing, swimming, boating, and a family day around Daisy and Murfreesboro.",
    href: "https://www.murfreesboroarkansas.org",
  },
  {
    title: "Crater of Diamonds",
    kicker: "Family day trip",
    text:
      "A good family stop near Murfreesboro when the day needs something different from another lake or river stop.",
    href: "https://www.murfreesboroarkansas.org",
  },
  {
    title: "Mount Ida & Lake Ouachita",
    kicker: "Mountains and water",
    text:
      "Crystal mining, mountain roads, Lake Ouachita, and Ouachita National Forest scenery pair well with Amity, Glenwood, and Lake Greeson routes.",
    href: "https://www.mountidaarkansas.org",
  },
];

export const historySections = [
  {
    title: "Started by the river",
    text:
      "Amity traces its early story to families settling near the old Caddo Cove Road north of the Caddo River in the late 1840s. William F. Browning is credited with naming the community, and the river valley gave those early families water, bottomland, work, and a reason to stay.",
    image: "/images/amity/CaddoRiverTrees.jpg",
  },
  {
    title: "The square became the town's front porch",
    text:
      "After the Civil War, the town shifted south of the river. In 1871, Philander Curtis, Riley Thompson, and Jacob H. Lightsey laid out the town around a public square. That square became the place for errands, news, church, school, business, and memory.",
    image: "/images/amity/TownSquare.jpg",
  },
  {
    title: "Railroad, timber, and work years",
    text:
      "Rail access after 1900 helped Amity become a shipping and trade point. Timber, sawmills, newspapers, schools, churches, and later the Bean Lumber years shaped the town's working rhythm. You can still feel that history in the way the town sits.",
    image: "/images/amity/history/amitytown.jpg",
  },
  {
    title: "Trade Days proved people would come",
    text:
      "Amity Trade Days later brought thousands of people to town for a monthly market at the old lumber site. It is gone now, but it left behind a useful lesson: Amity can pull traffic when the reason is clear, regular, and easy to understand.",
    image: "/images/amity/tradedays.png",
  },
];

export const tradeDaysFacts = [
  {
    title: "A monthly market with a real draw",
    text:
      "Amity Trade Days started in 2015 at the former Bean Lumber Company sawmill facility. The Encyclopedia of Arkansas describes it as a monthly flea market modeled after Canton, Texas, with nearly 200 vendors and more than 6,000 people per month.",
  },
  {
    title: "The old lumber site mattered",
    text:
      "The market used the old industrial footprint instead of trying to make the town square do all the work. That gave Amity space for vendors, parking, food, and a full market weekend feel.",
  },
  {
    title: "The old market grounds later changed uses",
    text:
      "In 2022, local reporting said the former Amity Trade Days site was returning to sawmill use through Caddo River Wood Products. That does not erase the Trade Days idea. It just means a new version would need a different setup.",
  },
];

export const revivalIdeas = [
  {
    title: "Start smaller than the old Trade Days",
    text:
      "A new version does not have to copy the 54-acre market. A monthly square market, vendor row, food pop-up, yard-sale weekend, or seasonal trade day could start small and grow with local support.",
  },
  {
    title: "Tie it to river traffic",
    text:
      "A market day would pair naturally with Glenwood weekends, Caddo River traffic, cabin stays, Lake Greeson routes, and families already looking for a reason to slow down nearby.",
  },
  {
    title: "Make it easy for vendors",
    text:
      "Keep the first version simple: clear dates, simple vendor interest form, clear setup expectations, local food, parking notes, and enough promotion that sellers feel like the town is trying.",
  },
];

export const listingOptions = [
  {
    title: "Basic Listing",
    price: "Free",
    text:
      "A simple listing for local businesses, churches with public events, visitor-friendly stops, and useful services around Amity.",
  },
  {
    title: "Featured Listing",
    price: "$20/month or $200/year",
    text:
      "A stronger card with better visibility, a photo, tracked buttons, and placement where visitors are planning food, river days, and local stops.",
  },
  {
    title: "Business Spotlight",
    price: "$100 one-time",
    text:
      "A dedicated spotlight page with more room for photos, a write-up, links, and a stronger story for businesses that need more than a short directory card.",
  },
  {
    title: "River or Market Sponsor",
    price: "Ask for options",
    text:
      "A sponsorship fit for businesses that want to support Amity river information, Trade Days-style market work, monthly events, or town-square visibility.",
  },
];

export const businessTypes = [
  "Restaurant / Cafe / Food Truck",
  "Brewery / Food & Drink",
  "Cabin / Airbnb / Vacation Rental",
  "Campground / RV Park",
  "River / Outdoor Business",
  "Local Shop / Vendor / Maker",
  "Repair / Service Business",
  "Church / Community Group",
  "Event / Market / Venue",
  "Other",
];

export const suggestionTypes = [
  "Business we should add",
  "Restaurant or food update",
  "Caddo River access or safety note",
  "Event or market idea",
  "Amity Trade Days memory",
  "Town square idea",
  "Correction or outdated info",
  "Photo or history idea",
  "Sponsorship question",
  "Other",
];

export const faqs = [
  {
    question: "Is Amity, Arkansas worth visiting?",
    answer:
      "Yes, if you are already exploring Glenwood, the Caddo River, Lake Greeson, or southwest Arkansas and want a quieter local stop. Amity is best for food, Slate Rock Brewing, the old square, local history, and lower-Caddo planning.",
  },
  {
    question: "How far is Amity from Glenwood?",
    answer:
      "Amity is about seven miles southeast of Glenwood on Arkansas Highway 8, which makes it easy to add to a Caddo River or Glenwood weekend.",
  },
  {
    question: "Can you access the Caddo River near Amity?",
    answer:
      "The Hwy 182 access north of Amity is listed by Caddo River Camping & Canoe Rental and documented by the Encyclopedia of Arkansas as Amity Access. Still check signs, parking, weather, and water levels before using any river access.",
  },
  {
    question: "What businesses are open in Amity?",
    answer:
      "Amity has a small number of local stops such as Slate Rock Brewing, Hometown Pizza, Trudy's, Dollar General, and other active businesses as they are added. Hours can change, so check before making a special drive.",
  },
];
