export const siteUrl = "https://www.amityarkansas.org";

export const sisterSites = [
  { href: "https://www.glenwoodarkansas.org", label: "Glenwood Arkansas" },
  { href: "https://www.hotspringsarkansas.org", label: "Hot Springs Arkansas" },
  { href: "https://www.mountidaarkansas.org", label: "Mount Ida Arkansas" },
  { href: "https://www.murfreesboroarkansas.org", label: "Murfreesboro Arkansas" },
];

export const guideLinks = [
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/caddo-river", label: "Caddo River" },
  { href: "/near-glenwood", label: "Near Glenwood" },
  { href: "/history", label: "History" },
];

export const businessLinks = [
  { href: "/local-business", label: "All Local Businesses" },
  { href: "/restaurants", label: "Food & Drinks" },
  { href: "/contact", label: "Get Listed" },
];

export const homeStats = [
  { label: "From Glenwood", value: "about 7 miles" },
  { label: "Town feel", value: "quiet and local" },
  { label: "Best stop", value: "food + river roads" },
  { label: "Outdoor draw", value: "Caddo River area" },
];

export type FeaturedBusiness = {
  name: string;
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
};

export const featuredBusinesses: FeaturedBusiness[] = [
  {
    name: "Slate Rock Brewing",
    badge: "Our Pick",
    placementType: "editorial",
    category: "Brewery • Local Hangout • Amity Stop",
    description:
      "A small-town brewery in Amity and an easy reason to take the short drive from Glenwood. Stop in for a drink, settle into the slower pace, and give a local business a little of the river traffic that usually stays up the road.",
    shortDescription:
      "Small-town brewery, easy drive from Glenwood, and one of the strongest reasons to stop in Amity.",
    image: "/images/amity/slaterock.webp",
    href: "https://www.google.com/maps/search/?api=1&query=Slate%20Rock%20Brewing%20Amity%20Arkansas",
    notes: ["Brewery in Amity", "Good Glenwood side trip", "Local gathering place"],
  },
  {
    name: "Hometown Pizza",
    badge: "Our Pick",
    placementType: "editorial",
    category: "Pizza • Easy Meal • Local Food",
    description:
      "An easy local pizza stop for families, river days, ball games, and travelers who would rather spend a few dollars in a small town than rush back to a busier place.",
    shortDescription:
      "Easy local pizza stop for families, river days, and anyone passing through Amity.",
    image: "/images/amity/hometown-pizza.jpg",
    href: "https://www.google.com/maps/search/?api=1&query=Hometown%20Pizza%20Amity%20Arkansas",
    notes: ["Local food", "Family-friendly stop", "Easy drive from Glenwood"],
  },
  {
    name: "Trudy's",
    badge: "Our Pick",
    placementType: "editorial",
    category: "Cafe • Local Food • Small-Town Stop",
    description:
      "A local food stop that helps Amity feel like more than a pass-through. Pull in for a meal, ask what is open nearby, and let the day slow down a little.",
    shortDescription:
      "Local food stop that keeps Amity useful for residents, visitors, and folks passing through.",
    image: "/images/amity/trudys.png",
    href: "https://www.google.com/maps/search/?api=1&query=Trudy%27s%20Amity%20Arkansas",
    notes: ["Local cafe", "Small-town food stop", "Useful for visitors"],
  },
];

export const riverNotes = [
  {
    title: "Less crowd, more room to breathe",
    text:
      "The Amity side of the Caddo has a quieter feel than the busy rental-and-shuttle stretches people often picture. It is better for slow drives, fishing, wading, photos, and calm river moments when conditions are safe.",
  },
  {
    title: "Easy to pair with Glenwood",
    text:
      "Glenwood is still the main hub for float trips, cabins, outfitters, and visitor services. Amity works best as the calm add-on: eat here, take the slow road, enjoy the river-country feel, then connect back into the wider Caddo River route.",
  },
  {
    title: "Respect the river and the land",
    text:
      "The Caddo has public and private stretches, and water can change quickly after rain. Park only where it is legal, do not block gates or driveways, respect posted property, and check conditions before swimming, fishing, or floating.",
  },
];

export const thingsToDo = [
  {
    title: "Make Amity a Glenwood side trip",
    description:
      "Already coming to Glenwood for the Caddo River, cabins, or a weekend drive? Add Amity without complicating the day. Come over for a meal, a brewery stop, the old square, and a slower look at the river country nearby.",
    image: "/images/amity/TownSquare.jpg",
    href: "/near-glenwood",
  },
  {
    title: "Find the quieter Caddo River feel",
    description:
      "The draw here is not a packed tourist scene. It is the chance to be near the water, keep the day flexible, and enjoy the Caddo River area without making everything feel crowded.",
    image: "/images/amity/CaddoRiver4.webp",
    href: "/caddo-river",
  },
  {
    title: "Support the businesses that are here",
    description:
      "Amity is small, which makes the open businesses matter more. A pizza order, a cafe stop, a drink, or a quick visit can help keep the town visible for the next traveler too.",
    image: "/images/amity/cityhall.jpg",
    href: "/local-business",
  },
  {
    title: "Walk through the town's older story",
    description:
      "The old square, the early Caddo River settlement, the railroad years, timber work, schools, churches, and the Old Bank of Amity all give the town a deeper story than a quick drive-through shows.",
    image: "/images/amity/history/oldsquare.webp",
    href: "/history",
  },
  {
    title: "Turn the stop into a day trip",
    description:
      "Lake Greeson, Daisy State Park, DeGray Lake, Crater of Diamonds, Mount Ida, and Hot Springs are close enough to make Amity part of a wider southwest Arkansas route.",
    image: "/images/amity/LakeGreeson2.jpg",
    href: "/things-to-do",
  },
  {
    title: "Slow down before you drive on",
    description:
      "Small towns are easy to pass by. Amity rewards the slower version of a trip: buy lunch, check the square, take the back road, and leave a little money where it matters.",
    image: "/images/amity/history/store.jpg",
    href: "/restaurants",
  },
];

export const nearbyTrips = [
  {
    title: "Glenwood",
    kicker: "Caddo River hub",
    text:
      "Use Glenwood for cabins, float planning, outfitters, and river-town services, then drive the few extra miles to Amity for a quieter local stop.",
    href: "https://www.glenwoodarkansas.org",
  },
  {
    title: "Lake Greeson & Daisy State Park",
    kicker: "Lake day",
    text:
      "A nearby lake route for camping, fishing, swimming, boating, and easy outdoor time around Daisy and Murfreesboro.",
    href: "https://www.murfreesboroarkansas.org",
  },
  {
    title: "Crater of Diamonds",
    kicker: "Family day trip",
    text:
      "A memorable family stop near Murfreesboro, especially when the day needs something different from another lake or river stop.",
    href: "https://www.murfreesboroarkansas.org",
  },
  {
    title: "Mount Ida & Lake Ouachita",
    kicker: "Mountains and water",
    text:
      "Crystal mining, mountain roads, Lake Ouachita, and Ouachita National Forest scenery pair well with an Amity and Glenwood trip.",
    href: "https://www.mountidaarkansas.org",
  },
];

export const historySections = [
  {
    title: "Started by the river",
    text:
      "Amity's early story begins close to the Caddo River, where families settled for good bottomland, fresh water, and a place that could support everyday life. William F. Browning is credited with giving the town its name, and the early community grew around church, school, work, and the river valley.",
    image: "/images/amity/CaddoRiverTrees.jpg",
  },
  {
    title: "The square became the town's front porch",
    text:
      "After the Civil War, Amity shifted south of the river and centered around a public square. The square became the place for errands, news, business, and memory. The Old Bank of Amity, built in the early 1900s, still gives the town one of its clearest historic anchors.",
    image: "/images/amity/TownSquare.jpg",
  },
  {
    title: "Railroad, timber, and work years",
    text:
      "The railroad and timber economy helped Amity serve the surrounding countryside. Sawmills, shipping, small newspapers, schools, churches, and later the Bean Lumber years shaped the town's rhythm. Even as storefronts and jobs changed, that working-town memory stayed with Amity.",
    image: "/images/amity/history/amitytown.jpg",
  },
  {
    title: "A quieter town still worth seeing",
    text:
      "Amity is quieter now than it used to be, but quiet is not the same as empty. The old square, the nearby river, and the small businesses still open here give visitors a reason to stop, spend a little, and see the town as part of the Glenwood and Caddo River area.",
    image: "/images/amity/cityhall.jpg",
  },
];

export const faqs = [
  {
    question: "Is Amity, Arkansas worth visiting?",
    answer:
      "Yes, if you enjoy quiet small towns and are already exploring Glenwood, the Caddo River, Lake Greeson, or southwest Arkansas. Amity is best for a simple local stop: food, Slate Rock Brewing, small-town history, and a calmer river-country feel.",
  },
  {
    question: "How far is Amity from Glenwood?",
    answer:
      "Amity is about seven miles southeast of Glenwood on Arkansas Highway 8, making it easy to add to a Caddo River or Glenwood weekend.",
  },
  {
    question: "Can you access the Caddo River near Amity?",
    answer:
      "The Caddo River runs north of Amity, and the area has a quieter river feel than the busier Glenwood float scene. Some river frontage is private and conditions can change, so use legal public access only, respect posted property, and check water levels before swimming, fishing, or floating.",
  },
  {
    question: "What businesses are open in Amity?",
    answer:
      "Amity has a small number of local stops such as Slate Rock Brewing, Hometown Pizza, Trudy's, and other active businesses as they are added. Hours can change, so check before making a special drive.",
  },
];
