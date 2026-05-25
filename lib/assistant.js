// Fleazo Assistant — purely client-side search over the local directory.
// No network calls; matches against name, category, city, blurb, followers.

import { businesses, creators } from "@/lib/data";

const POOL = [
  ...businesses.map((b) => ({ ...b, kind: "Business" })),
  ...creators.map((c) => ({ ...c, kind: "Creator" })),
];

// Tokens that *narrow* by city.
const CITY_TOKENS = ["jaipur", "jodhpur"];

// Soft aliases — map natural-language phrases to data tokens.
const ALIAS = [
  { match: /\b(coffee|cafe|cafes)\b/i, add: ["cafe"] },
  { match: /\b(restaurant|restaurants|food|eat|dining)\b/i, add: ["food"] },
  { match: /\b(rooftop|terrace)\b/i, add: ["rooftop", "indique", "tapri", "palladio"] },
  { match: /\b(gym|fitness|workout)\b/i, add: ["fitness", "gym"] },
  { match: /\b(model|modelling|modeling)\b/i, add: ["model", "fashion"] },
  { match: /\b(photo|photographer|photography|cinematic|reel)\b/i, add: ["photography", "cinematic", "reel"] },
  { match: /\b(travel|trip)\b/i, add: ["travel"] },
  { match: /\b(creators?|influencers?|artists?)\b/i, add: ["creator"] },
  { match: /\b(shop|shopping|store|boutique|clothing|fashion)\b/i, add: ["fashion", "clothing"] },
  { match: /\b(nutrition|diet|wellness|health)\b/i, add: ["nutrition", "wellness", "health"] },
  { match: /\b(furniture|interior|decor|home)\b/i, add: ["furniture", "home decor"] },
  { match: /\b(makeup|hair|beauty)\b/i, add: ["makeup", "beauty"] },
  { match: /\b(software|saas|tech|payroll|hr)\b/i, add: ["software"] },
  { match: /\b(elevator|lift)\b/i, add: ["lift", "elevator"] },
  { match: /\b(millet|millets)\b/i, add: ["millet"] },
];

function tokenize(query) {
  const lower = query.toLowerCase();
  const base = lower
    .replace(/[^a-z0-9\s&]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const aliasTokens = [];
  for (const { match, add } of ALIAS) if (match.test(query)) aliasTokens.push(...add);
  return Array.from(new Set([...base, ...aliasTokens]));
}

function scoreEntity(entity, tokens, cityFilter, kindFilter) {
  if (cityFilter && entity.city.toLowerCase() !== cityFilter) return 0;
  if (kindFilter && entity.kind.toLowerCase() !== kindFilter) return 0;

  const hay = [
    entity.name,
    entity.category,
    entity.city,
    entity.blurb || "",
    entity.followers || "",
    entity.kind,
  ]
    .join(" ")
    .toLowerCase();

  let score = 0;
  for (const token of tokens) {
    if (!token || CITY_TOKENS.includes(token)) continue;
    if (entity.name.toLowerCase().includes(token)) score += 5;
    if (entity.category.toLowerCase().includes(token)) score += 4;
    if (hay.includes(token)) score += 1;
  }

  // Subtle quality boost so Top Tier / 130k floats up on tie.
  const tierBoost = /top tier|130k/i.test(entity.tier || entity.followers || "") ? 1 : 0;
  return score + (score > 0 ? tierBoost : 0);
}

export function searchDirectory(query, limit = 4) {
  const lower = query.toLowerCase();
  const tokens = tokenize(query);
  const cityFilter = CITY_TOKENS.find((c) => lower.includes(c)) || null;

  let kindFilter = null;
  if (/\bcreator|influencer|artist|model|photographer\b/i.test(query))
    kindFilter = "creator";
  else if (/\bbusiness|shop|store|cafe|restaurant|gym|brand\b/i.test(query))
    kindFilter = "business";

  const scored = POOL.map((entity) => ({
    entity,
    score: scoreEntity(entity, tokens, cityFilter, kindFilter),
  }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entity);

  return { results: scored, cityFilter, kindFilter };
}

export function buildAnswer(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      text: "Try asking about a category — cafes, travel creators, or photographers in Jaipur.",
      results: [],
    };
  }

  const { results, cityFilter, kindFilter } = searchDirectory(trimmed);

  if (results.length === 0) {
    return {
      text: `No exact match for “${trimmed}”. The directory has 17 verified businesses and 21 creators across Jaipur & Jodhpur — try “cafes”, “fashion creators”, or “photography”.`,
      results: [],
    };
  }

  const cityLabel = cityFilter
    ? cityFilter.charAt(0).toUpperCase() + cityFilter.slice(1)
    : null;
  const singular = results.length === 1;
  let kindLabel;
  if (kindFilter === "creator") kindLabel = singular ? "creator" : "creators";
  else if (kindFilter === "business") kindLabel = singular ? "business" : "businesses";
  else kindLabel = singular ? "match" : "matches";

  const head = `Here ${singular ? "is" : "are"} ${results.length} ${kindLabel}${cityLabel ? ` in ${cityLabel}` : ""}:`;

  return { text: head, results };
}
