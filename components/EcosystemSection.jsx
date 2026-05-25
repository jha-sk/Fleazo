import Link from "next/link";
import {
  Store,
  UserCheck,
  Brush,
  ArrowUpRight,
  Asterisk,
} from "lucide-react";
import { JoinTrigger } from "@/components/JoinTrigger";

const CARDS = [
  {
    serial: "N° 01 / 03",
    eyebrow: "B2B · Vendors",
    icon: Store,
    title: "For Business",
    titleAccent: "Owners.",
    desc: "Stop relying only on Instagram. Build a permanent digital storefront so customers find you on Google — not just social media.",
    stub: "ADM · ONE WAY",
    cta: "Get Listed Free",
    theme: "paper",
    tilt: "md:-rotate-[1.2deg]",
    href: "/for-business",
  },
  {
    serial: "N° 02 / 03",
    eyebrow: "B2C · Patrons",
    icon: UserCheck,
    title: "For",
    titleAccent: "Customers.",
    desc: "Looking for a trusted mechanic, boutique, or cafe? Don't fall for fake reviews — every Fleazo listing is verified by hand.",
    stub: "GEN · ADMIT ALL",
    cta: "Search Directory",
    theme: "ink",
    tilt: "md:rotate-[0.6deg] md:-translate-y-3",
    href: "/for-customers",
  },
  {
    serial: "N° 03 / 03",
    eyebrow: "D2C · Creators",
    icon: Brush,
    title: "For Creators",
    titleAccent: "& Artists.",
    desc: "Freelancers, makeup artists, models, painters — present your craft professionally, discoverable by brands and clients.",
    stub: "VIP · BACKSTAGE",
    cta: "Create Portfolio",
    theme: "amber",
    tilt: "md:rotate-[1.4deg]",
    href: "/for-creators",
  },
];

const THEMES = {
  paper: {
    card: "bg-[#FCFAF7] border-[#EBE4D5]",
    serial: "text-[#8A7F73]",
    arch: "bg-gradient-to-b from-purple-500 to-purple-800",
    archRing: "ring-purple-100",
    eyebrow:
      "bg-purple-50 border-purple-300 text-purple-900 [text-shadow:0_0_0.5px_currentColor]",
    title: "text-[#1D1B19]",
    accent: "text-purple-700 italic",
    desc: "text-[#62564C]",
    divider: "border-[#E3D9C5]",
    cta: "text-purple-700 border-purple-200 hover:bg-purple-50",
    stamp: "text-purple-700/30 border-purple-700/30",
    perforation: "[background-image:radial-gradient(circle,#D8CDB6_1px,transparent_1px)]",
  },
  ink: {
    card: "bg-[#1C1A17] border-[#3D352F] text-stone-100",
    serial: "text-stone-400",
    arch: "bg-gradient-to-b from-[#D4AF37] to-[#C85A32]",
    archRing: "ring-amber-500/20",
    eyebrow:
      "bg-amber-500/10 border-amber-400/40 text-amber-300",
    title: "text-white",
    accent: "text-[#D4AF37] italic",
    desc: "text-stone-400",
    divider: "border-stone-700",
    cta: "text-[#D4AF37] border-amber-500/30 hover:bg-amber-500/10",
    stamp: "text-amber-400/25 border-amber-400/25",
    perforation: "[background-image:radial-gradient(circle,#3D352F_1px,transparent_1px)]",
  },
  amber: {
    card: "bg-gradient-to-br from-[#FBF1DE] to-[#F5DCB5] border-[#E8C896]",
    serial: "text-[#9C7B4A]",
    arch: "bg-gradient-to-b from-[#C85A32] to-[#7C2D12]",
    archRing: "ring-orange-100",
    eyebrow:
      "bg-white/60 border-[#C85A32]/40 text-[#7C2D12]",
    title: "text-[#3B2415]",
    accent: "text-[#C85A32] italic",
    desc: "text-[#6B4A2B]",
    divider: "border-[#D9B776]",
    cta: "text-[#7C2D12] border-[#C85A32]/30 hover:bg-white/40",
    stamp: "text-[#7C2D12]/30 border-[#7C2D12]/30",
    perforation: "[background-image:radial-gradient(circle,#C19663_1px,transparent_1px)]",
  },
};

export function EcosystemSection() {
  return (
    <section
      aria-label="Who Fleazo serves"
      className="px-5 md:px-8 mb-24 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 relative">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C85A32]" />
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black">
              The Fleazo Ledger
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C85A32]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#1D1B19] leading-[1.05]">
            One directory.{" "}
            <span className="italic text-[#D4AF37] inline-block">
              Three tickets.
            </span>
          </h2>
          <p className="mt-4 text-sm text-[#8A7F73] font-mono">
            Tear along the dotted line. Claim your stall.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
          {CARDS.map((card) => (
            <EcosystemTicket key={card.title + card.titleAccent} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemTicket({
  serial,
  eyebrow,
  icon: Icon,
  title,
  titleAccent,
  desc,
  stub,
  cta,
  theme,
  tilt,
  href,
  join,
}) {
  const t = THEMES[theme];

  const ctaInner = (
    <>
      <span>{cta}</span>
      <ArrowUpRight
        size={14}
        className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
      />
    </>
  );

  const ctaClass = `group/cta inline-flex items-center justify-between w-full px-4 py-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all ${t.cta}`;

  return (
    <article
      className={`group relative ${tilt} transition-all duration-500 hover:rotate-0 hover:-translate-y-2 hover:scale-[1.02]`}
    >
      {/* Tape strip at top — like pinned to a corkboard */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="w-16 h-5 bg-amber-200/70 border border-amber-300/50 rotate-[-2deg] shadow-sm backdrop-blur-sm" />
      </div>

      <div
        className={`relative rounded-2xl border-2 ${t.card} shadow-[0_10px_30px_-12px_rgba(45,40,37,0.25)] group-hover:shadow-[0_24px_50px_-12px_rgba(45,40,37,0.4)] transition-shadow overflow-hidden`}
      >
        {/* Perforated top edge */}
        <div
          className={`h-2 w-full ${t.perforation} [background-size:8px_8px] [background-position:center]`}
        />

        {/* Header strip: serial + brand mark */}
        <div className={`flex items-center justify-between px-6 pt-4 pb-2 text-[10px] font-mono tracking-widest ${t.serial}`}>
          <span className="flex items-center gap-1.5">
            <Asterisk size={10} />
            FLEAZO
          </span>
          <span className="tabular-nums">{serial}</span>
        </div>

        {/* Inked watermark stamp — diagonal */}
        <div className={`absolute top-20 right-4 w-24 h-24 border-2 ${t.stamp} rounded-full flex items-center justify-center rotate-[-18deg] pointer-events-none opacity-60`}>
          <div className="text-center leading-tight">
            <div className={`text-[8px] font-mono font-black tracking-widest ${t.stamp}`}>
              VERIFIED
            </div>
            <div className={`text-[7px] font-mono ${t.stamp} mt-0.5`}>
              EST · MMXXVI
            </div>
          </div>
        </div>

        {/* Heritage arch icon (jharokha-inspired) */}
        <div className="px-6 pt-6 pb-2 relative z-10">
          <div className="flex items-end gap-3">
            <div
              className={`relative w-14 h-16 rounded-t-full ${t.arch} ring-4 ${t.archRing} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
            >
              <Icon size={22} className="text-white" aria-hidden="true" />
              {/* Arch keystone dot */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
            {/* Hand-stamped eyebrow */}
            <span
              className={`-rotate-2 inline-block px-2.5 py-1 border-2 border-dashed ${t.eyebrow} rounded-md text-[10px] font-mono font-black uppercase tracking-wider mb-2 shadow-sm`}
            >
              {eyebrow}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="px-6 mt-4 relative z-10">
          <h3 className={`font-serif font-black text-3xl leading-[1.05] tracking-tight ${t.title}`}>
            {title}
            <br />
            <span className={t.accent}>{titleAccent}</span>
          </h3>
        </div>

        {/* Description */}
        <p className={`px-6 mt-4 text-sm leading-relaxed ${t.desc} relative z-10`}>
          {desc}
        </p>

        {/* Hand-drawn dashed divider */}
        <div className="px-6 mt-6 mb-4 relative z-10">
          <div className={`border-t-2 border-dashed ${t.divider}`} />
        </div>

        {/* CTA */}
        <div className="px-6 pb-4 relative z-10">
          {join ? (
            <JoinTrigger className={ctaClass}>{ctaInner}</JoinTrigger>
          ) : (
            <Link href={href} className={ctaClass}>
              {ctaInner}
            </Link>
          )}
        </div>

        {/* Footer stub caption */}
        <div className={`px-6 pb-3 text-[9px] font-mono tracking-[0.25em] uppercase ${t.serial} flex items-center justify-between relative z-10`}>
          <span>◆ {stub}</span>
          <span>FL · 2026</span>
        </div>

        {/* Perforated bottom edge */}
        <div
          className={`h-2 w-full ${t.perforation} [background-size:8px_8px] [background-position:center]`}
        />
      </div>

      {/* Side notches — the "tear here" cutouts */}
      <div className="absolute left-[-6px] top-[26px] w-3 h-3 rounded-full bg-[#F9F6F0] border border-[#EBE4D5] shadow-inner z-10" />
      <div className="absolute right-[-6px] top-[26px] w-3 h-3 rounded-full bg-[#F9F6F0] border border-[#EBE4D5] shadow-inner z-10" />
    </article>
  );
}
