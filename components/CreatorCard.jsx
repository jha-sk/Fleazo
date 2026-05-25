import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles, Crown, Award, Flame, Star } from "lucide-react";

function tierMeta(followers = "") {
  const f = followers.toLowerCase();
  if (f.includes("top tier"))
    return { Icon: Crown, label: "Top Tier" };
  if (f.includes("expert")) return { Icon: Award, label: "Expert" };
  if (f.includes("rising")) return { Icon: Sparkles, label: "Rising" };
  const m = followers.match(/[\d.]+k\+?/i);
  if (m) return { Icon: Flame, label: m[0].toUpperCase() };
  return { Icon: Star, label: followers };
}

export function CreatorCard({ creator }) {
  const { Icon: TierIcon, label: tierLabel } = tierMeta(creator.followers);

  return (
    <Link
      href={`/profile/${creator.slug}`}
      aria-label={`${creator.name} — ${creator.category} in ${creator.city}`}
      className="group relative block bg-[#FCFAF7] rounded-[20px] border border-[#EBE4D5] overflow-hidden min-w-[280px] md:min-w-0 snap-center shadow-[0_4px_18px_-10px_rgba(45,40,37,0.18)] hover:shadow-[0_24px_50px_-14px_rgba(76,29,149,0.25)] hover:-translate-y-2 transition-all duration-500"
    >
      {/* Dotted paper texture top half */}
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(#E5DEC9_1px,transparent_1px)] [background-size:14px_14px] opacity-50 pointer-events-none" />

      {/* Top strip — Voice signature */}
      <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-dashed border-[#E3D9C5] text-[9px] font-mono tracking-[0.3em] uppercase text-[#8A7F73]">
        <span className="flex items-center gap-1.5">
          <Sparkles size={9} className="text-indigo-500" />
          Fleazo Voice
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={9} className="text-[#C85A32]" />
          {creator.city}
        </span>
      </div>

      {/* Portrait in heritage arch */}
      <div className="relative px-8 pt-7 pb-4">
        <div className="relative mx-auto w-32 h-40">
          {/* soft purple halo */}
          <div className="absolute -inset-3 rounded-t-full bg-gradient-to-b from-indigo-200/50 via-purple-100/30 to-transparent blur-xl transition-all duration-500 group-hover:from-indigo-300/70" />
          {/* portrait frame */}
          <div className="relative w-full h-full rounded-t-full overflow-hidden ring-2 ring-indigo-500/40 shadow-lg bg-[#F4EFE5]">
            <Image
              src={creator.image}
              alt={creator.name}
              fill
              sizes="128px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* film tint that fades on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
          </div>
          {/* gold keystone at apex */}
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-sm" />
          {/* tier mark — pinned to bottom-right of arch */}
          <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 bg-[#1C1A17] text-[#D4AF37] text-[9px] font-mono font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-md ring-2 ring-[#FCFAF7]">
            <TierIcon size={9} />
            {tierLabel}
          </span>
        </div>
      </div>

      {/* Name + signature */}
      <div className="relative px-5 text-center">
        <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-indigo-600 font-black mb-1.5">
          {creator.category}
        </p>
        <h3 className="font-serif font-black italic text-2xl leading-[1.1] tracking-tight text-[#1D1B19] group-hover:text-indigo-700 transition-colors">
          {creator.name}
        </h3>

        {/* signature scribble underline */}
        <svg
          aria-hidden="true"
          className="mx-auto mt-1.5 h-2.5 w-16 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          viewBox="0 0 64 10"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M2 5 Q 14 1, 26 5 T 50 5 L 62 4"
            stroke="#7C3AED"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Footer */}
      <div className="relative px-5 pt-4 pb-5">
        <div className="pt-3 border-t border-dashed border-[#E3D9C5] flex items-center justify-between">
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#8A7F73] flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-indigo-500" />
            View portfolio
          </span>
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#EBE4D5] group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">
            <ArrowUpRight
              size={13}
              className="text-[#2D2825] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
