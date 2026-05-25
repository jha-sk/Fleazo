import Link from "next/link";
import Image from "next/image";
import { Star, ArrowUpRight, BadgeCheck } from "lucide-react";

const TIER_STYLES = {
  "Top Tier": {
    pill: "bg-[#D4AF37] text-[#1D1B19]",
    icon: <Star size={9} className="fill-[#1D1B19] text-[#1D1B19]" />,
    label: "Top Tier",
  },
  Expert: {
    pill: "bg-[#1C1A17] text-[#D4AF37]",
    icon: <BadgeCheck size={10} className="text-[#D4AF37]" />,
    label: "Expert",
  },
};

export function BusinessCard({ business }) {
  const tier = TIER_STYLES[business.tier] ?? TIER_STYLES["Top Tier"];

  return (
    <Link
      href={`/profile/${business.slug}`}
      aria-label={`${business.name} — ${business.category} in ${business.city}`}
      className="group relative block bg-white rounded-[20px] border border-[#EBE4D5] overflow-hidden min-w-[280px] md:min-w-0 snap-center shadow-[0_4px_18px_-10px_rgba(45,40,37,0.18)] hover:shadow-[0_24px_50px_-14px_rgba(45,40,37,0.4)] hover:-translate-y-2 transition-all duration-500"
    >
      {/* Photo */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={business.image}
          alt={business.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
        />

        {/* Layered overlay — top dark for chip legibility, bottom darker that deepens on hover for name slide */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-100" />

        {/* Tier seal — top-left, refined pill */}
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1 ${tier.pill} text-[10px] font-mono font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-md`}
        >
          {tier.icon}
          {tier.label}
        </span>

        {/* City — top-right, mono lockup */}
        <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-[0.25em] text-white/90 bg-black/35 backdrop-blur-sm px-2 py-1 rounded-full border border-white/15">
          {business.city}
        </span>

        {/* Name overlay on the photo — anchored to bottom, lifts/expands on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 z-10">
          <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] mb-1.5">
            {business.category}
          </span>
          <h3 className="font-serif font-black text-2xl leading-[1.05] tracking-tight text-white drop-shadow-md">
            {business.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pt-4 pb-5 relative">
        {/* Gold accent rule */}
        <span className="absolute top-0 left-5 h-[2px] w-10 bg-[#D4AF37] group-hover:w-24 transition-all duration-500" />

        <p className="text-xs text-[#62564C] leading-relaxed line-clamp-2 mt-1">
          {business.blurb}
        </p>

        <div className="mt-4 pt-3 border-t border-dashed border-[#E3D9C5] flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7F73] flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#C85A32]" />
            Visit Stall
          </span>
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FCFAF7] border border-[#EBE4D5] group-hover:bg-[#C85A32] group-hover:border-[#C85A32] transition-colors">
            <ArrowUpRight
              size={13}
              className="text-[#2D2825] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </span>
        </div>
      </div>

      {/* Dog-ear page-fold detail (bottom-right) — signature decoration */}
      <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-[#FCFAF7]" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[18px] border-l-transparent border-b-[18px] border-b-[#EBE4D5] opacity-50" />
      </div>
    </Link>
  );
}
