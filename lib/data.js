// Fleazo seed data — names, slugs, categories, blurbs, and image paths
// extracted from the source static HTML at
// `Fleazo _ AI-Ready Local Directory_files/Fleazo _ AI-Ready Local Directory.html`.
// All imagery is served locally from `/public/images`.

const PLACEHOLDER = "/images/placeholder.svg";

export const cities = [
  { name: "Jaipur", count: 34, image: "/images/jaipur.jpg" },
  { name: "Jodhpur", count: 4, image: "/images/jodhpur.jpg" },
];

export const homeBanner = "/images/home-banner.jpg";

// ---------------------------------------------------------------------------
// Businesses (17 — matches the LLM context "17 Businesses" from the source)
// ---------------------------------------------------------------------------
export const businesses = [
  {
    slug: "tapri-central-jaipur",
    name: "Tapri Central",
    category: "Cafe",
    city: "Jaipur",
    tier: "Top Tier",
    blurb:
      "Tapri Central is a leading Cafe business based in Jaipur, Rajasthan — beloved for chai, terrace views, and a friendly local crowd.",
    image: "/images/tapri-central.jpg",
    phone: "+919999900001",
    whatsapp: "+919999900001",
  },
  {
    slug: "bar-palladio-jaipur",
    name: "Bar Palladio",
    category: "Cafe",
    city: "Jaipur",
    tier: "Top Tier",
    blurb:
      "Bar Palladio is a leading Cafe business based in Jaipur, Rajasthan — Italian kitchen wrapped in cobalt-blue Rajput decor.",
    image: "/images/bar-palladio.jpg",
  },
  {
    slug: "brewtopia-coffee-jaipur",
    name: "Brewtopia Coffee",
    category: "Cafe",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "Brewtopia Coffee is a contemporary specialty coffee destination focused on single-origin pour-overs and roastery experiments.",
    image: "/images/brewtopia-coffee.jpeg",
  },
  {
    slug: "rawat-misthan-bhandar-jaipur",
    name: "Rawat Misthan Bhandar",
    category: "Food",
    city: "Jaipur",
    tier: "Top Tier",
    blurb:
      "Rawat Misthan Bhandar is a heritage Food brand based in Jaipur — the city's most-loved address for pyaaz kachori and mithai.",
    image: "/images/rawat-misthan.jpg",
  },
  {
    slug: "indique-jodhpur",
    name: "Indique",
    category: "Food",
    city: "Jodhpur",
    tier: "Top Tier",
    blurb:
      "Indique is a leading Food destination based in Jodhpur, Rajasthan — rooftop dining with a panoramic view of Mehrangarh.",
    image: "/images/indique.jpg",
  },
  {
    slug: "sky-fitness-club-jaipur",
    name: "Sky Fitness Club",
    category: "Gym & Fitness",
    city: "Jaipur",
    tier: "Top Tier",
    blurb:
      "Sky Fitness Club is a modern gym in Jaipur focused on helping members build strength, endurance, and sustainable habits.",
    image: "/images/sky-fitness.jpg",
  },
  {
    slug: "brewtopia-coffee-india-jaipur",
    name: "Brewtopia Coffee India",
    category: "Cafe & Franchise",
    city: "Jaipur",
    tier: "Top Tier",
    blurb:
      "Brewtopia Coffee India is a premier specialty cafe and high-quality franchise system expanding across Tier-1 and Tier-2 cities.",
    image: "/images/brewtopia-india.jpg",
  },
  {
    slug: "sakshi-jain-jaipur",
    name: "Sakshi Jain",
    category: "Mandala Artist",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "Sakshi Jain is a leading Mandala Artist based in Jaipur — bespoke commissions, workshops, and gallery shows.",
    image: "/images/sakshi-jain.png",
  },
  {
    slug: "heer-by-madhu-kochar-jaipur",
    name: "HEER by Madhu Kochar",
    category: "Clothing label",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "HEER by Madhu Kochar is a leading Clothing label based in Jaipur — bridal couture rooted in Rajasthani craft.",
    image: "/images/heer.png",
  },
  {
    slug: "terralives-jaipur",
    name: "Terralives",
    category: "Home decor",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "Terralives is a Home decor studio in Jaipur crafting earthy, handmade pieces from sustainable local materials.",
    image: "/images/terralives.jpeg",
  },
  {
    slug: "the-tasty-millets-jaipur",
    name: "The Tasty Millets",
    category: "Health Food & Millet-based Meals",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "Premium ready-to-eat millet meals combining traditional Rajasthani flavours with modern nutrition science.",
    image: "/images/tasty-millets.png",
  },
  {
    slug: "pagaar-software-jaipur",
    name: "Pagaar Software",
    category: "Payroll Software",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "Pagaar Software is a leading Payroll Software product built for Indian SMBs — compliance, salary, and HR in one stack.",
    image: PLACEHOLDER,
  },
  {
    slug: "re-shape-nutrition-center-jaipur",
    name: "Re-Shape Nutrition Center",
    category: "Nutrition & Wellness",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "Re-Shape Nutrition Center is a Jaipur-based nutrition and wellness clinic with personalised diet protocols.",
    image: "/images/re-shape.jpg",
  },
  {
    slug: "fabiaana-fitness-and-dance-academy-jaipur",
    name: "FABIAANA Fitness & Dance Academy",
    category: "Fitness & Nutrition Academy",
    city: "Jaipur",
    tier: "Rising Star",
    blurb:
      "FABIAANA is a Jaipur-based fitness, dance, and nutrition academy for adults and kids.",
    image: "/images/fabiaana.jpeg",
  },
  {
    slug: "nishan-lift-solutions-jaipur",
    name: "Nishan Lift Solutions",
    category: "Lift, Elevator",
    city: "Jaipur",
    tier: "Rising Star",
    blurb:
      "Elevating your lifestyle with safety and innovation — Nishan Lift Solutions designs, installs, and services elevators.",
    image: "/images/nishan-lift.jpeg",
  },
  {
    slug: "da-modular-street-jaipur",
    name: "Da Modular Street",
    category: "Modular Furniture Manufacturer",
    city: "Jaipur",
    tier: "Expert",
    blurb:
      "Leading Jaipur-based manufacturer specialising in bespoke modular furniture and turnkey interior fit-outs.",
    image: "/images/da-modular.jpg",
  },
  {
    slug: "hm-production-jaipur",
    name: "HM Production",
    category: "Photography",
    city: "Jaipur",
    tier: "4.5 ★",
    blurb:
      "HM Production is a popular wedding photography and cinema brand serving Jaipur and beyond.",
    image: "/images/hm-production-biz.jpg",
  },
];

// ---------------------------------------------------------------------------
// Creators (21 — matches the LLM context "21 Creators" from the source)
// ---------------------------------------------------------------------------
export const creators = [
  {
    slug: "dr-pragyaa-jaipur",
    name: "Dr. Pragyaa",
    category: "Strategic Communication",
    city: "Jaipur",
    followers: "Top Tier Followers",
    image: "/images/dr-pragyaa.jpg",
  },
  {
    slug: "sana-kapoor-lifestyle-influencer-jaipur",
    name: "Sana Kapoor",
    category: "Lifestyle & Fashion Creator",
    city: "Jaipur",
    followers: "130k Followers",
    image: "/images/sana-kapoor.jpg",
  },
  {
    slug: "blue-city-explorer-jodhpur",
    name: "Blue City Explorer",
    category: "Travel",
    city: "Jodhpur",
    followers: "Expert Followers",
    image: "/images/blue-city.jpg",
  },
  {
    slug: "ayushi-upadhyay-jaipur",
    name: "Ayushi Upadhyay",
    category: "Fashion",
    city: "Jaipur",
    followers: "Expert Followers",
    image: "/images/ayushi.jpg",
  },
  {
    slug: "sapna-rajpurohit-jodhpur",
    name: "Sapna Rajpurohit",
    category: "Health & Fitness",
    city: "Jodhpur",
    followers: "Expert Followers",
    image: "/images/sapna.jpeg",
  },
  {
    slug: "jatin-yadav-jaipur",
    name: "Jatin Yadav",
    category: "Cinematic Storytelling",
    city: "Jaipur",
    followers: "Rising Star",
    image: "/images/jatin.jpeg",
  },
  {
    slug: "anshika-sharma-fashion-model-jaipur",
    name: "Anshika Sharma",
    category: "Fashion Model",
    city: "Jaipur",
    followers: "Rising Star",
    image: "/images/anshika.jpg",
  },
  {
    slug: "dixita-jaipur",
    name: "Dixita",
    category: "Lifestyle",
    city: "Jaipur",
    followers: "Expert Followers",
    image: PLACEHOLDER,
  },
  {
    slug: "sara-chauhan-jaipur",
    name: "Sara Chauhan",
    category: "Lifestyle & Beauty Content Creator",
    city: "Jaipur",
    followers: "Expert Followers",
    image: "/images/sara-chauhan.jpeg",
  },
  {
    slug: "aishwarya-yadav-jaipur",
    name: "Aishwarya Yadav",
    category: "Fashion, Beauty & Lifestyle",
    city: "Jaipur",
    followers: "Rising Star",
    image: "/images/placeholder.svg",
  },
  {
    slug: "make-up-artistry-by-jo-jaipur",
    name: "Make-up Artistry by Jo",
    category: "Makeup & Hair Artist",
    city: "Jaipur",
    followers: "Rising Star",
    image: "/images/makeup-jo.jpeg",
  },
  {
    slug: "ahad-travelwithahad-jodhpur",
    name: "Ahad (TravelWithAhad)",
    category: "Travel, Fashion & Lifestyle Content Creator",
    city: "Jodhpur",
    followers: "Rising Star",
    image: PLACEHOLDER,
  },
  {
    slug: "poojasharma-jaipur",
    name: "Pooja Sharma",
    category: "Cafe & Fashion",
    city: "Jaipur",
    followers: "Rising Star",
    image: PLACEHOLDER,
  },
  {
    slug: "kajal-arya-jaipur",
    name: "Kajal Arya",
    category: "Lifestyle, journeys and relatable stories",
    city: "Jaipur",
    followers: "1k Followers",
    image: "/images/kajal-arya.jpeg",
  },
  {
    slug: "ellenaa-jaipur",
    name: "Ellenaa",
    category: "Model, Lifestyle, Beauty, Fashion",
    city: "Jaipur",
    followers: "1k Followers",
    image: "/images/ellenaa.jpg",
  },
  {
    slug: "ravi-maharshi-jaipur",
    name: "Ravi Maharshi",
    category: "iPhone Reel Shooting",
    city: "Jaipur",
    followers: "1k Followers",
    image: "/images/ravi-maharshi.jpeg",
  },
  {
    slug: "rajendra-vishnoi-jaipur",
    name: "Rajendra Vishnoi",
    category: "Open to all",
    city: "Jaipur",
    followers: "1k Followers",
    image: "/images/rajendra.jpeg",
  },
  {
    slug: "ellenaa-model-jaipur",
    name: "Ellenaa (Model)",
    category: "Model, Lifestyle Influencer — Fashion, Beauty, Confidence",
    city: "Jaipur",
    followers: "1k Followers",
    image: "/images/ellenaa-model.jpg",
  },
  {
    slug: "hm-production-creator-jaipur",
    name: "HM Production",
    category: "Photographer",
    city: "Jaipur",
    followers: "1k Followers",
    image: "/images/hm-production-creator.jpg",
  },
  {
    slug: "aditi-jain-jaipur",
    name: "Aditi Jain",
    category: "Fashion",
    city: "Jaipur",
    followers: "1k Followers",
    image: PLACEHOLDER,
  },
  {
    slug: "rajesh-prajapati-jaipur",
    name: "Rajesh Prajapati",
    category: "Lifestyle & Travel",
    city: "Jaipur",
    followers: "Rising Star",
    image: PLACEHOLDER,
  },
];

// ---------------------------------------------------------------------------
// Categories — counts derived from the businesses + creators above.
// ---------------------------------------------------------------------------
export const categories = [
  { name: "Cafe", count: 3 },
  { name: "Food", count: 2 },
  { name: "Fashion", count: 2 },
  { name: "Photography", count: 2 },
  { name: "Gym & Fitness", count: 1 },
  { name: "Strategic Communication", count: 1 },
  { name: "Lifestyle & Fashion Creator", count: 1 },
  { name: "Cafe & Franchise", count: 1 },
  { name: "Travel", count: 1 },
  { name: "Health & Fitness", count: 1 },
  { name: "Mandala Artist", count: 1 },
  { name: "Clothing label", count: 1 },
  { name: "Modular Furniture", count: 1 },
  { name: "Home decor", count: 1 },
  { name: "Millet-based Meals", count: 1 },
  { name: "Payroll Software", count: 1 },
];

export function findEntity(slug) {
  return (
    businesses.find((b) => b.slug === slug) ||
    creators.find((c) => c.slug === slug) ||
    null
  );
}

export function isCreator(slug) {
  return Boolean(creators.find((c) => c.slug === slug));
}

export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findCategoryBySlug(slug) {
  return categories.find((c) => slugify(c.name) === slug) ?? null;
}

export function findCityByName(name) {
  if (!name) return null;
  const target = name.toLowerCase();
  return cities.find((c) => c.name.toLowerCase() === target) ?? null;
}

export function listingsForCity(cityName) {
  const target = cityName.toLowerCase();
  return {
    businesses: businesses.filter((b) => b.city.toLowerCase() === target),
    creators: creators.filter((c) => c.city.toLowerCase() === target),
  };
}

export function listingsForCategory(categoryName) {
  const target = categoryName.toLowerCase();
  return {
    businesses: businesses.filter(
      (b) => b.category.toLowerCase() === target
    ),
    creators: creators.filter(
      (c) => c.category.toLowerCase() === target
    ),
  };
}
