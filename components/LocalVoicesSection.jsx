import Link from "next/link";
import Image from "next/image";
import { Megaphone, Crown, Sparkles, Award, Flame, Star } from "lucide-react";
import { creators } from "@/lib/data";

const TILTS = [-3.2, 2.1, -1.8, 3.4, -2.6, 1.5, -3.6, 2.8];

function tierMeta(followers = "") {
  const f = followers.toLowerCase();
  if (f.includes("top tier"))
    return { Icon: Crown, label: "Top Tier", color: "bg-[#1D1B19] text-[#FFD45A]", ring: "ring-[#FFD45A]" };
  if (f.includes("expert"))
    return { Icon: Award, label: "Expert", color: "bg-[#0F0F0F] text-white", ring: "ring-[#D4AF37]" };
  if (f.includes("rising"))
    return { Icon: Sparkles, label: "Rising", color: "bg-[#C85A32] text-white", ring: "ring-[#C85A32]" };
  if (f.includes("130k") || f.includes("k followers")) {
    const m = followers.match(/[\d.]+k/i);
    return {
      Icon: Flame,
      label: m ? m[0].toUpperCase() : followers,
      color: "bg-[#FFD45A] text-[#1D1B19]",
      ring: "ring-[#1D1B19]",
    };
  }
  return { Icon: Star, label: followers, color: "bg-[#1D1B19] text-white", ring: "ring-[#D4AF37]" };
}

function Polaroid({ creator, idx }) {
  const tilt = TILTS[idx % TILTS.length];
  const { Icon: TierIcon, label: tierLabel, color: tierColor, ring } = tierMeta(creator.followers);
  const tapeOffset = (idx % 2 === 0 ? -8 : 8) + (idx % 3) * 2;

  return (
    <Link
      href={`/profile/${creator.slug}`}
      aria-label={`${creator.name} — ${creator.category} in ${creator.city}`}
      className="group relative block w-[220px] shrink-0"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:rotate-0">
        {/* washi tape */}
        <span
          aria-hidden="true"
          className={`washi-tape ${idx % 3 === 0 ? "coral" : ""} absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-[1px] z-10`}
          style={{ transform: `translateX(calc(-50% + ${tapeOffset}px)) rotate(${tapeOffset / 3}deg)` }}
        />

        {/* polaroid body */}
        <article className="bg-white p-3 pb-5 polaroid-shadow border border-[#EDE6D6]">
          {/* photo */}
          <div className={`relative w-full aspect-square overflow-hidden bg-[#F4EFE5] ring-1 ring-inset ${ring}`}>
            <Image
              src={creator.image}
              alt={creator.name}
              fill
              sizes="220px"
              className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            {/* tier sticker */}
            <span
              className={`absolute -top-1 -right-1 ${tierColor} px-2 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.12em] font-black flex items-center gap-1 shadow-md ring-2 ring-white`}
            >
              <TierIcon className="w-3 h-3" aria-hidden="true" />
              {tierLabel}
            </span>
          </div>

          {/* caption */}
          <div className="mt-3 px-1">
            <h4 className="font-serif font-black text-[17px] leading-tight text-[#1D1B19] truncate">
              {creator.name}
            </h4>
            <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#8A7F73] truncate">
              {creator.category}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C85A32] font-bold">
                · {creator.city}
              </span>
              <span className="text-[10px] font-mono font-black text-[#1D1B19] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Visit →
              </span>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
}

function MarqueeRow({ items, reverse = false, offsetIdx = 0 }) {
  // duplicate the list so the loop seams are invisible
  const loop = [...items, ...items];
  return (
    <div className="marquee-viewport relative overflow-hidden py-6">
      {/* edge fades */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#fdfbf7] to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#fdfbf7] to-transparent" />

      <div className={`marquee-track flex gap-7 ${reverse ? "reverse" : ""}`}>
        {loop.map((c, i) => (
          <Polaroid key={`${c.slug}-${i}`} creator={c} idx={i + offsetIdx} />
        ))}
      </div>
    </div>
  );
}

export function LocalVoicesSection() {
  // split into two rows for the dual-direction marquee
  const mid = Math.ceil(creators.length / 2);
  const row1 = creators.slice(0, mid);
  const row2 = creators.slice(mid);

  return (
    <section
      id="local-voices"
      aria-labelledby="local-voices-title"
      className="pinboard-bg relative mb-16 py-16 md:py-20 overflow-hidden border-y border-[#EDE6D6]"
    >
      {/* decorative scribbles */}
      <span aria-hidden="true" className="absolute top-10 right-[8%] text-5xl text-[#D4AF37]/40 font-serif italic select-none">✦</span>
      <span aria-hidden="true" className="absolute bottom-12 left-[6%] text-4xl text-[#C85A32]/30 select-none">✺</span>
      <span aria-hidden="true" className="absolute top-1/2 left-[3%] text-2xl text-[#1D1B19]/20 select-none rotate-12">✶</span>

      {/* header */}
      <header className="max-w-7xl mx-auto px-5 md:px-8 mb-6 md:mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1D1B19] text-[#FFD45A]">
                <Megaphone className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <p className="text-[11px] font-mono tracking-[0.32em] uppercase text-[#1D1B19] font-black">
                The Pinboard
              </p>
            </div>
            <h2
              id="local-voices-title"
              className="font-serif font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#1D1B19] leading-[0.9]"
            >
              Local{" "}
              <span className="relative inline-block italic">
                Voices.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 14"
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#C85A32]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M3 9 C 50 2, 100 12, 160 5 S 210 8, 217 6" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 text-sm text-[#6b5d4e] font-mono max-w-md">
              Pinned to the board — creators, artists & storytellers
              <span className="text-[#C85A32]"> shaping their cities.</span>
            </p>
          </div>

          {/* tier legend */}
          <ul className="flex flex-wrap gap-2 md:justify-end items-center text-[10px] font-mono uppercase tracking-[0.14em]">
            {[
              { Icon: Crown, label: "Top Tier", cls: "bg-[#1D1B19] text-[#FFD45A]" },
              { Icon: Award, label: "Expert", cls: "bg-[#0F0F0F] text-white" },
              { Icon: Sparkles, label: "Rising", cls: "bg-[#C85A32] text-white" },
              { Icon: Flame, label: "130K+", cls: "bg-[#FFD45A] text-[#1D1B19]" },
            ].map(({ Icon, label, cls }) => (
              <li key={label} className={`${cls} px-2.5 py-1 rounded-full flex items-center gap-1 font-black ring-2 ring-white`}>
                <Icon className="w-3 h-3" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* dual-direction polaroid marquees */}
      <div className="space-y-1">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse offsetIdx={3} />
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
        <p className="text-xs font-mono uppercase tracking-[0.24em] text-[#8A7F73]">
          <span className="text-[#1D1B19] font-black">{creators.length}</span> voices pinned · more arriving weekly
        </p>
        <Link
          href="/join"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D1B19] text-white rounded-full text-[11px] font-mono uppercase tracking-[0.24em] font-black hover:bg-[#C85A32] transition-colors"
        >
          Pin yourself to the board
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
