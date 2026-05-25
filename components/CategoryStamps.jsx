"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Utensils,
  Scissors,
  Radio,
  LayoutGrid,
  Check,
  X,
  ArrowRight,
  Tag,
} from "lucide-react";
import { categories, businesses, creators, slugify } from "@/lib/data";

// ---------------------------------------------------------------------------
// Strict editorial palette — black + gold only.
// ---------------------------------------------------------------------------
const INK = "#1D1B19";
const GOLD = "#D4AF37";
const GOLD_BRIGHT = "#FFD45A";
const CREAM = "#FBF6EB";

// Families differ only in icon + label + blurb — never in color.
const FAMILY = {
  eats: {
    label: "Eats & Stays",
    blurb: "Where the city sits down.",
    Icon: Utensils,
    cats: [
      "Cafe",
      "Food",
      "Cafe & Franchise",
      "Millet-based Meals",
      "Health & Fitness",
      "Gym & Fitness",
    ],
  },
  makers: {
    label: "Makers",
    blurb: "Hands, looms, lenses.",
    Icon: Scissors,
    cats: [
      "Fashion",
      "Photography",
      "Mandala Artist",
      "Clothing label",
      "Modular Furniture",
      "Home decor",
    ],
  },
  voices: {
    label: "Voices & Tools",
    blurb: "Stories, services, software.",
    Icon: Radio,
    cats: [
      "Strategic Communication",
      "Lifestyle & Fashion Creator",
      "Travel",
      "Payroll Software",
    ],
  },
};

function familyOf(catName) {
  for (const [key, fam] of Object.entries(FAMILY)) {
    if (fam.cats.includes(catName)) return key;
  }
  return "voices";
}

function matchesCategory(itemCategory, targetCategory) {
  if (!itemCategory) return false;
  const a = itemCategory.toLowerCase();
  const b = targetCategory.toLowerCase();
  if (a === b) return true;
  return a.split(/\s*[&,—-]\s*|\s+/).some((tok) => tok === b);
}

function findMatches(catName) {
  const biz = businesses
    .filter((b) => matchesCategory(b.category, catName))
    .map((b) => ({ ...b, kind: "vendor" }));
  const cre = creators
    .filter((c) => matchesCategory(c.category, catName))
    .map((c) => ({ ...c, kind: "voice" }));
  return [...biz, ...cre];
}

// ---------------------------------------------------------------------------
// Single chip — ink-on-white at rest, solid ink with gold accents when active.
// ---------------------------------------------------------------------------
function CategoryChip({ cat, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(cat.name)}
      aria-pressed={isActive}
      className={`group relative inline-flex items-center gap-2 pl-3 pr-2.5 py-2 rounded-full border font-mono text-[12px] uppercase tracking-[0.08em] font-black transition-all duration-200 ease-out ${
        isActive
          ? "shadow-md -translate-y-0.5"
          : "bg-white hover:-translate-y-0.5 hover:shadow-sm"
      }`}
      style={{
        borderColor: INK,
        backgroundColor: isActive ? INK : "#fff",
        color: isActive ? GOLD : INK,
        // gold halo when active
        boxShadow: isActive ? `0 0 0 2px ${GOLD}` : undefined,
      }}
    >
      {/* gold "string-hole" dot — the only color in either state */}
      <span
        aria-hidden="true"
        className="w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: GOLD,
          boxShadow: `0 0 0 2px ${isActive ? INK : "#fff"}`,
        }}
      />
      <span className="leading-none">{cat.name}</span>
      {/* gold count pip — always gold with ink numerals */}
      <span
        className="min-w-[20px] h-5 px-1.5 inline-flex items-center justify-center rounded-full text-[10px] font-black"
        style={{ backgroundColor: GOLD, color: INK }}
      >
        {cat.count}
      </span>
      {isActive && (
        <Check
          className="w-3 h-3 -ml-0.5"
          aria-hidden="true"
          strokeWidth={3}
          style={{ color: GOLD }}
        />
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Preview drawer — cream paper, ink ink, gold accents only.
// ---------------------------------------------------------------------------
function PreviewDrawer({ catName, fam, onClear }) {
  const matches = useMemo(() => findMatches(catName), [catName]);
  const visible = matches.slice(0, 4);
  const more = Math.max(0, matches.length - visible.length);

  return (
    <div
      role="region"
      aria-label={`${catName} preview`}
      className="mt-8 relative rounded-lg border-2 border-dashed p-5 sm:p-6"
      style={{ borderColor: INK, backgroundColor: CREAM }}
    >
      {/* "OPENED" stamp — ink border, ink text, gold underline */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-6 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.3em] font-black bg-white border-2 rotate-[-3deg]"
        style={{ borderColor: INK, color: INK }}
      >
        Opened · {catName}
        <span
          aria-hidden="true"
          className="absolute left-1 right-1 -bottom-[3px] h-[2px]"
          style={{ backgroundColor: GOLD }}
        />
      </span>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
        <div>
          <p
            className="text-[10px] font-mono uppercase tracking-[0.28em] font-black flex items-center gap-1.5"
            style={{ color: INK }}
          >
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
            {matches.length} pinned · {fam.label.toLowerCase()}
          </p>
          <h4
            className="font-serif font-black italic text-2xl sm:text-3xl mt-1"
            style={{ color: INK }}
          >
            Peek inside.
          </h4>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="self-start sm:self-end inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.24em] font-black hover:opacity-70 transition-opacity"
          style={{ color: INK }}
        >
          <X className="w-3 h-3" aria-hidden="true" strokeWidth={3} />
          Clear filter
        </button>
      </div>

      {matches.length === 0 ? (
        <p className="text-sm font-mono text-[#6b5d4e]">
          Nobody's pinned here yet — be the first.
        </p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {visible.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/profile/${m.slug}`}
                className="group flex items-center gap-3 p-2 bg-white border rounded-md hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ borderColor: INK }}
              >
                <span
                  className="relative w-11 h-11 rounded-md overflow-hidden flex-shrink-0 border-2"
                  style={{ borderColor: INK }}
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span className="flex-1 min-w-0">
                  <span
                    className="block text-[10px] font-mono uppercase tracking-[0.16em] font-black"
                    style={{ color: GOLD_BRIGHT === GOLD ? GOLD : GOLD }}
                  >
                    {m.kind}
                  </span>
                  <span
                    className="block font-serif font-black text-sm truncate"
                    style={{ color: INK }}
                  >
                    {m.name}
                  </span>
                  <span className="block text-[10px] font-mono text-[#8A7F73] truncate">
                    {m.city}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#8A7F73]">
          {more > 0 ? `+${more} more inside` : "that's everyone — for now"}
        </p>
        <Link
          href={`/category/${slugify(catName)}`}
          className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.24em] font-black transition-colors"
          style={{ backgroundColor: INK, color: GOLD }}
        >
          Open category page
          <ArrowRight
            className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
            strokeWidth={3}
          />
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------
export function CategoryStampsSection() {
  const [active, setActive] = useState(null);

  const grouped = useMemo(() => {
    const buckets = { eats: [], makers: [], voices: [] };
    for (const c of categories) {
      buckets[familyOf(c.name)].push(c);
    }
    return buckets;
  }, []);

  const activeFamilyKey = active ? familyOf(active) : null;
  const activeFamily = activeFamilyKey ? FAMILY[activeFamilyKey] : null;

  const totals = useMemo(
    () => ({
      eats: grouped.eats.reduce((s, c) => s + c.count, 0),
      makers: grouped.makers.reduce((s, c) => s + c.count, 0),
      voices: grouped.voices.reduce((s, c) => s + c.count, 0),
    }),
    [grouped]
  );

  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="relative px-5 md:px-8 mb-20 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                style={{ backgroundColor: INK, color: GOLD }}
              >
                <Tag className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <p
                className="text-[11px] font-mono tracking-[0.32em] uppercase font-black"
                style={{ color: INK }}
              >
                The Stamp Sheet
              </p>
            </div>
            <h3
              id="categories-title"
              className="font-serif font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.9]"
              style={{ color: INK }}
            >
              Pick a{" "}
              <span className="italic relative">
                stamp.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 w-full h-3"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                >
                  <path d="M3 7 C 60 1, 120 11, 197 5" />
                </svg>
              </span>
            </h3>
            <p className="mt-4 text-sm text-[#6b5d4e] font-mono max-w-md">
              {active ? (
                <>
                  Filtering by{" "}
                  <span className="font-black" style={{ color: INK }}>
                    {active}
                  </span>
                  . Tap again to put it back on the sheet.
                </>
              ) : (
                "Three families, sixteen stamps. Tap any to peek what's inside."
              )}
            </p>
          </div>

          {/* family totals — outlined editorial pills, identical color, gold count pip */}
          <ul className="flex flex-wrap gap-2 md:justify-end">
            {Object.entries(FAMILY).map(([key, fam]) => {
              const { Icon } = fam;
              return (
                <li
                  key={key}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.18em] font-black border bg-white"
                  style={{ borderColor: INK, color: INK }}
                >
                  <Icon className="w-3 h-3" aria-hidden="true" />
                  {fam.label}
                  <span
                    className="ml-1 inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full text-[9px]"
                    style={{ backgroundColor: GOLD, color: INK }}
                  >
                    {totals[key]}
                  </span>
                </li>
              );
            })}
          </ul>
        </header>

        {/* stamp sheet — 3 family rows */}
        <div className="space-y-7">
          {Object.entries(FAMILY).map(([key, fam]) => {
            const items = grouped[key];
            if (items.length === 0) return null;
            const { Icon } = fam;
            return (
              <div key={key} className="relative">
                {/* family header — gold medallion is the only color punch */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full"
                    style={{ backgroundColor: GOLD, color: INK }}
                  >
                    <Icon className="w-3 h-3" aria-hidden="true" />
                  </span>
                  <h4
                    className="font-serif font-black italic text-xl"
                    style={{ color: INK }}
                  >
                    {fam.label}.
                  </h4>
                  <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#8A7F73]">
                    {fam.blurb}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((cat) => (
                    <CategoryChip
                      key={cat.name}
                      cat={cat}
                      isActive={active === cat.name}
                      onSelect={(name) =>
                        setActive((prev) => (prev === name ? null : name))
                      }
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {active && activeFamily && (
          <PreviewDrawer
            catName={active}
            fam={activeFamily}
            onClear={() => setActive(null)}
          />
        )}

        {!active && (
          <p
            className="mt-8 text-center text-[10px] font-mono uppercase tracking-[0.28em]"
            style={{ color: "#8A7F73" }}
          >
            <LayoutGrid
              className="inline w-3 h-3 mr-1.5 -mt-0.5"
              aria-hidden="true"
            />
            Tap a stamp to peek inside ·{" "}
            <span className="font-black" style={{ color: INK }}>
              {categories.length}
            </span>{" "}
            stamps total
          </p>
        )}
      </div>
    </section>
  );
}
