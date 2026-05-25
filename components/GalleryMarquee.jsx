import Image from "next/image";
import { businesses, creators, cities } from "@/lib/data";

const INK = "#1D1B19";
const GOLD = "#D4AF37";

const PLACEHOLDER = "/images/placeholder.svg";

// Build a deck combining real listings — businesses + creators + cities.
// Strip placeholders, then split into two rows for opposing marquees.
function buildDeck() {
  const biz = businesses
    .filter((b) => b.image && b.image !== PLACEHOLDER)
    .map((b) => ({
      src: b.image,
      alt: b.name,
      orientation: "landscape",
    }));
  const cre = creators
    .filter((c) => c.image && c.image !== PLACEHOLDER)
    .map((c) => ({
      src: c.image,
      alt: c.name,
      orientation: "portrait",
    }));
  const cty = cities.map((c) => ({
    src: c.image,
    alt: c.name,
    orientation: "landscape",
  }));

  // Interleave so each row has variety
  const all = [];
  const max = Math.max(biz.length, cre.length, cty.length);
  for (let i = 0; i < max; i++) {
    if (biz[i]) all.push(biz[i]);
    if (cre[i]) all.push(cre[i]);
    if (cty[i] && i % 2 === 0) all.push(cty[i]);
  }
  return all;
}

function Tile({ item }) {
  // landscape: wider; portrait: narrower & taller feel
  const isPortrait = item.orientation === "portrait";
  const dims = isPortrait
    ? "w-[180px] sm:w-[220px] aspect-[3/4]"
    : "w-[300px] sm:w-[360px] aspect-[4/3]";

  return (
    <figure
      className={`relative shrink-0 ${dims} overflow-hidden bg-[#0F0F0F] group`}
      style={{
        border: `1px solid ${GOLD}`,
        boxShadow: "0 8px 24px -12px rgba(0,0,0,0.5)",
      }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 640px) 360px, 300px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* subtle ink wash so the strip reads as a single editorial band */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-multiply opacity-30 group-hover:opacity-0 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(29,27,25,0.6) 100%)",
        }}
      />
      {/* gold corner ticks */}
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l"
        style={{ borderColor: GOLD }}
      />
      <span
        aria-hidden="true"
        className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r"
        style={{ borderColor: GOLD }}
      />
    </figure>
  );
}

function MarqueeRow({ items, reverse = false }) {
  // duplicate for seamless loop
  const loop = [...items, ...items];
  return (
    <div className="marquee-viewport relative overflow-hidden py-1">
      {/* edge fades into ink */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10"
        style={{
          background: `linear-gradient(90deg, ${INK} 0%, transparent 100%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10"
        style={{
          background: `linear-gradient(270deg, ${INK} 0%, transparent 100%)`,
        }}
      />

      <div className={`marquee-track flex gap-5 ${reverse ? "reverse" : ""}`}>
        {loop.map((item, i) => (
          <Tile key={`${item.src}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function GalleryMarquee() {
  const deck = buildDeck();
  const mid = Math.ceil(deck.length / 2);
  const row1 = deck.slice(0, mid);
  // offset the second row so the two streams don't mirror each other
  const row2 = [...deck.slice(mid), ...deck.slice(0, Math.floor(mid / 2))];

  return (
    <section
      aria-label="Image gallery"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* gold top + bottom hairlines */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D4AF37 0 8px, transparent 8px 16px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D4AF37 0 8px, transparent 8px 16px)",
        }}
      />

      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
