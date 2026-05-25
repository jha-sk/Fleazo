import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MessageCircle,
  Phone,
  MapPin,
  Share2,
  Star,
  ShieldCheck,
  Globe,
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  Clock,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { businesses, creators, findEntity, isCreator } from "@/lib/data";

export async function generateStaticParams() {
  return [...businesses, ...creators].map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const entity = findEntity(params.slug);
  if (!entity) return { title: "Not found | Fleazo" };
  return {
    title: `${entity.name} — ${entity.category} in ${entity.city} | Fleazo`,
    description:
      entity.blurb ||
      `${entity.name} is a verified ${entity.category} on Fleazo in ${entity.city}.`,
  };
}

const TIER_PILL = {
  "Top Tier": "bg-[#D4AF37] text-[#1D1B19]",
  Expert: "bg-[#1C1A17] text-[#D4AF37]",
};

export default function ProfilePage({ params }) {
  const entity = findEntity(params.slug);
  if (!entity) notFound();
  const creator = isCreator(params.slug);
  const similar = (creator ? creators : businesses)
    .filter((e) => e.slug !== entity.slug && e.city === entity.city)
    .slice(0, 6);
  const tierPill = TIER_PILL[entity.tier] ?? TIER_PILL["Top Tier"];

  return (
    <div className="relative bg-[#F9F6F0] text-[#2D2825] font-sans antialiased pb-20 overflow-hidden">
      {/* Dotted canvas — matches Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5DEC9_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80 z-0" />

      <article className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#8A7F73] hover:text-[#C85A32] mb-6 transition-colors"
        >
          <ArrowLeft
            className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform"
            aria-hidden="true"
          />
          Back to directory
        </Link>

        {/* Hero card — dark stone slab like the homepage hero */}
        <section className="relative bg-[#1C1A17] rounded-[28px] overflow-hidden border border-[#3D352F] shadow-[0_30px_80px_-30px_rgba(28,26,23,0.5)] group">
          {/* gold spotlight */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/25 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />

          <div className="relative h-72 sm:h-[420px]">
            <Image
              src={entity.image}
              alt={entity.name}
              fill
              priority
              sizes="(min-width:768px) 100vw, 100vw"
              className="object-cover object-center opacity-90 scale-105 group-hover:scale-100 transition-transform duration-[10000ms]"
            />
            {/* warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-stone-900/70 to-stone-950/90 mix-blend-multiply" />
            <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/95 via-[#1C1A17]/40 to-transparent" />
          </div>

          {/* Top-row chips */}
          <div className="absolute top-5 left-5 right-5 z-10 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#C85A32] text-white text-[10px] font-mono font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full shadow-md">
                <Hash size={10} aria-hidden="true" />
                {entity.category}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-mono font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-white/15">
                <BadgeCheck size={11} className="text-emerald-400" aria-hidden="true" />
                Verified
              </span>
              {!creator && entity.tier && (
                <span
                  className={`inline-flex items-center gap-1.5 ${tierPill} text-[10px] font-mono font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full shadow-md`}
                >
                  <Star size={10} className="fill-current" aria-hidden="true" />
                  {entity.tier}
                </span>
              )}
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.3em] text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Sparkles size={10} className="text-[#D4AF37]" aria-hidden="true" />
              AI-Ready Listing
            </span>
          </div>

          {/* Title block */}
          <div className="absolute bottom-0 inset-x-0 z-10 p-6 sm:p-10">
            <span className="block text-[10px] font-mono uppercase tracking-[0.4em] text-[#D4AF37] mb-3">
              Fleazo Profile · {entity.city}
            </span>
            <h1 className="font-serif font-black text-white text-4xl sm:text-6xl leading-[1.02] tracking-tight drop-shadow-md max-w-3xl">
              {entity.name}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-stone-300 font-sans flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
              {entity.city}, Rajasthan
              <span className="mx-2 text-stone-500">·</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-400">
                fleazo.com/{entity.slug}
              </span>
            </p>
          </div>

          {/* Cream lip — matches Hero card */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-[#F9F6F0] rounded-t-2xl border-t border-[#EBE4D5]/40 pointer-events-none" />
        </section>

        {/* Body */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Main */}
          <div className="md:col-span-2 space-y-12">
            {/* About — editorial pull-quote feel */}
            <section aria-labelledby="about-title" className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-10 bg-[#D4AF37]" />
                <p
                  id="about-title"
                  className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#8A7F73]"
                >
                  About
                </p>
              </div>
              <p className="font-serif text-2xl sm:text-3xl leading-[1.35] tracking-tight text-[#1D1B19]">
                <span className="text-[#D4AF37] font-serif italic">&ldquo;</span>
                {entity.blurb ||
                  `${entity.name} is a verified ${entity.category} based in ${entity.city}, listed on Fleazo's AI-ready local directory. Reach out directly via WhatsApp — no middlemen, no commissions.`}
                <span className="text-[#D4AF37] font-serif italic">&rdquo;</span>
              </p>
            </section>

            {/* Trust signals — stamps row */}
            <section aria-labelledby="trust-title">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-10 bg-[#C85A32]" />
                <p
                  id="trust-title"
                  className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#8A7F73]"
                >
                  Trust signals
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TrustStamp
                  Icon={ShieldCheck}
                  label="Manually verified"
                  value="ID + address confirmed"
                  accent="#10B981"
                />
                <TrustStamp
                  Icon={Globe}
                  label="AI-indexed"
                  value="Schema-rich JSON-LD"
                  accent="#D4AF37"
                />
                <TrustStamp
                  Icon={MessageCircle}
                  label="Direct chat"
                  value="WhatsApp first response"
                  accent="#C85A32"
                />
              </ul>
            </section>

            {/* What to expect — value strip */}
            <section aria-labelledby="expect-title">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-10 bg-[#1C1A17]" />
                <p
                  id="expect-title"
                  className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#8A7F73]"
                >
                  What to expect
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[#EBE4D5] p-6 shadow-[0_4px_18px_-10px_rgba(45,40,37,0.18)]">
                <ul className="grid sm:grid-cols-2 gap-4 text-sm leading-relaxed text-[#3D352F]">
                  <li className="flex gap-3">
                    <Clock size={16} className="text-[#C85A32] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="block text-[11px] font-mono uppercase tracking-widest text-[#8A7F73] mb-0.5">
                        Reply time
                      </strong>
                      Typically replies within an hour on WhatsApp.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck size={16} className="text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="block text-[11px] font-mono uppercase tracking-widest text-[#8A7F73] mb-0.5">
                        Zero commissions
                      </strong>
                      Talk and book directly. Fleazo never sits between you.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Sparkles size={16} className="text-[#D4AF37] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="block text-[11px] font-mono uppercase tracking-widest text-[#8A7F73] mb-0.5">
                        AI-discoverable
                      </strong>
                      Indexed for Google, ChatGPT, and Perplexity searches.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin size={16} className="text-[#1C1A17] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="block text-[11px] font-mono uppercase tracking-widest text-[#8A7F73] mb-0.5">
                        Local in {entity.city}
                      </strong>
                      Verified on-the-ground by the Fleazo team.
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar — business card */}
          <aside aria-label="Contact" className="md:col-span-1">
            <div className="md:sticky md:top-24 space-y-6">
              <div className="relative bg-white rounded-2xl border border-[#EBE4D5] shadow-[0_24px_50px_-20px_rgba(45,40,37,0.25)] p-6 pt-9 overflow-hidden">
                {/* Washi tape */}
                <div
                  className="washi-tape absolute -top-1 left-8 w-20 h-5 rotate-[-4deg] rounded-sm"
                  aria-hidden="true"
                />

                {/* Gold rule */}
                <span className="absolute top-0 right-6 h-[3px] w-10 bg-[#D4AF37]" />

                <p className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#8A7F73]">
                  Connect
                </p>
                <p className="mt-2 font-serif font-black text-2xl tracking-tight text-[#1D1B19]">
                  No middlemen.
                </p>
                <p className="mt-1 text-xs text-[#62564C] leading-relaxed">
                  Reach {entity.name} directly. No forms, no callbacks.
                </p>

                <a
                  href={`https://wa.me/${(entity.whatsapp || "919999900000").replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-5"
                >
                  <Button variant="primary" size="lg" className="w-full rounded-full">
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    WhatsApp directly
                  </Button>
                </a>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <a
                    href={`tel:${entity.phone || "+919999900000"}`}
                    className="block"
                  >
                    <Button variant="outline" size="md" className="w-full rounded-full">
                      <Phone className="w-4 h-4" aria-hidden="true" /> Call
                    </Button>
                  </a>
                  <Button variant="outline" size="md" className="rounded-full">
                    <Share2 className="w-4 h-4" aria-hidden="true" /> Share
                  </Button>
                </div>

                {/* Dotted divider */}
                <div className="my-6 border-t border-dashed border-[#E3D9C5]" />

                <dl className="space-y-4">
                  <DetailRow
                    Icon={MapPin}
                    label="Location"
                    value={`${entity.city}, Rajasthan`}
                  />
                  <DetailRow
                    Icon={Globe}
                    label="Live profile"
                    value={`fleazo.com/${entity.slug}`}
                  />
                  <DetailRow
                    Icon={ShieldCheck}
                    label="Status"
                    value="Verified · AI-indexed"
                  />
                </dl>

                {/* Dog-ear */}
                <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-[#F9F6F0]" />
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[18px] border-l-transparent border-b-[18px] border-b-[#EBE4D5] opacity-50" />
                </div>
              </div>

              {/* Join CTA — ticket stub */}
              <Link
                href="/join"
                className="group relative block rounded-2xl bg-gradient-to-br from-[#1C1A17] via-[#241F1A] to-[#3D352F] text-white overflow-hidden shadow-[0_24px_50px_-20px_rgba(28,26,23,0.55)] hover:shadow-[0_30px_60px_-20px_rgba(28,26,23,0.7)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* warm glow */}
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#D4AF37]/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-8 w-40 h-40 rounded-full bg-[#C85A32]/15 blur-3xl pointer-events-none" />

                {/* perforation notches (ticket-stub feel) */}
                <span
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F9F6F0]"
                  aria-hidden="true"
                />
                <span
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F9F6F0]"
                  aria-hidden="true"
                />
                {/* dashed tear-line */}
                <span
                  className="absolute left-4 right-4 top-1/2 -translate-y-1/2 border-t border-dashed border-white/15 pointer-events-none"
                  aria-hidden="true"
                />

                {/* TOP — admit-one stub */}
                <div className="relative px-5 pt-5 pb-6">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[10px] font-mono font-black uppercase tracking-[0.35em] text-[#D4AF37]">
                      Admit one
                    </p>
                    {/* gold rotated seal */}
                    <span
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#D4AF37]/70 text-[#D4AF37] rotate-[-12deg] shadow-[inset_0_0_0_2px_rgba(212,175,55,0.15)] group-hover:rotate-0 transition-transform duration-500"
                      aria-hidden="true"
                    >
                      <span className="text-[8px] font-mono font-black uppercase tracking-[0.15em] leading-[1.05] text-center">
                        Free<br />Forever
                      </span>
                    </span>
                  </div>

                  <p className="mt-4 font-serif font-black text-2xl leading-[1.1] tracking-tight">
                    Run a business?
                  </p>
                  <p className="mt-2 font-serif italic text-[#D4AF37] text-lg leading-snug">
                    Claim your stall.
                  </p>

                  <ul className="mt-4 space-y-1.5 text-[11px] font-mono uppercase tracking-[0.15em] text-stone-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                      Verified in 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                      Direct WhatsApp leads
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                      Zero commissions
                    </li>
                  </ul>
                </div>

                {/* BOTTOM — stub action */}
                <div className="relative px-5 pt-5 pb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-stone-400">
                      Ticket
                    </p>
                    <p className="text-[11px] font-mono font-black uppercase tracking-[0.25em] text-white">
                      Fleazo · 2026
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#1C1A17] text-[11px] font-mono font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-[0_6px_14px_-6px_rgba(212,175,55,0.7)] group-hover:bg-white transition-colors">
                    Join Fleazo
                    <ArrowUpRight
                      size={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </div>
          </aside>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <section
            aria-labelledby="similar-title"
            className="mt-20 pt-12 border-t border-dashed border-[#E3D9C5]"
          >
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[2px] w-10 bg-[#D4AF37]" />
                  <p
                    id="similar-title"
                    className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#8A7F73]"
                  >
                    Nearby in {entity.city}
                  </p>
                </div>
                <h2 className="font-serif font-black text-3xl tracking-tight text-[#1D1B19]">
                  Other stalls worth a visit
                </h2>
              </div>
              <Link
                href="/"
                className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono font-black uppercase tracking-widest text-[#2D2825] hover:text-[#C85A32] transition-colors"
              >
                Browse all
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {similar.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/profile/${e.slug}`}
                    className="group relative block bg-white rounded-2xl border border-[#EBE4D5] overflow-hidden shadow-[0_4px_18px_-10px_rgba(45,40,37,0.18)] hover:shadow-[0_20px_40px_-14px_rgba(45,40,37,0.35)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-32 sm:h-36 overflow-hidden">
                      <Image
                        src={e.image}
                        alt={e.name}
                        fill
                        sizes="(min-width:768px) 25vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <span className="absolute top-2 left-2 text-[9px] font-mono uppercase tracking-[0.25em] text-white/90 bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {e.category}
                      </span>
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between gap-2">
                      <p className="font-serif font-black text-base leading-tight text-[#1D1B19] truncate">
                        {e.name}
                      </p>
                      <ArrowUpRight
                        size={14}
                        className="text-[#8A7F73] shrink-0 group-hover:text-[#C85A32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  );
}

function TrustStamp({ Icon, label, value, accent }) {
  return (
    <li className="relative bg-white rounded-2xl p-5 border border-[#EBE4D5] shadow-[0_4px_18px_-10px_rgba(45,40,37,0.18)] hover:-translate-y-1 hover:shadow-[0_18px_38px_-14px_rgba(45,40,37,0.32)] transition-all duration-300">
      <span
        className="absolute top-0 left-5 h-[2px] w-8"
        style={{ background: accent }}
        aria-hidden="true"
      />
      <div
        className="inline-flex items-center justify-center w-9 h-9 rounded-full mb-3"
        style={{ background: `${accent}1a`, color: accent }}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>
      <p className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#8A7F73]">
        {label}
      </p>
      <p className="mt-1 font-serif text-base font-bold text-[#1D1B19] leading-snug">
        {value}
      </p>
    </li>
  );
}

function DetailRow({ Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FCFAF7] border border-[#EBE4D5] shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-[#62564C]" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <dt className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#8A7F73]">
          {label}
        </dt>
        <dd className="text-sm font-medium text-[#1D1B19] break-words">
          {value}
        </dd>
      </div>
    </div>
  );
}
