import Link from "next/link";
import {
  ArrowUpRight,
  Asterisk,
  BadgeCheck,
  Eye,
  Fingerprint,
  Handshake,
  Mail,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  ShieldOff,
  X,
} from "lucide-react";

export const metadata = {
  title: "Trust & Verification · Fleazo",
  description:
    "How Fleazo hand-verifies every business and creator listing. No paid placements, no fake reviews, no commission.",
};

const STEPS = [
  {
    icon: Mail,
    label: "Application arrives",
    desc: "Vendor or creator submits the join form. Name, WhatsApp, city, category, optional one-liner.",
  },
  {
    icon: PhoneCall,
    label: "We call the number",
    desc: "Real humans call the WhatsApp number on file. Confirm identity, confirm the listing matches.",
  },
  {
    icon: Eye,
    label: "We check the work",
    desc: "Cafes: photos + walk-by. Creators: portfolio review. Brands: registration check. No shortcut.",
  },
  {
    icon: BadgeCheck,
    label: "We stamp & publish",
    desc: "Listing goes live with a verification badge — Top Tier, Expert, or Rising Star — within 24 hours.",
  },
];

const PROMISES = [
  {
    icon: ShieldCheck,
    title: "Every listing is checked by a human.",
    desc: "No automated scraping. No \"unclaimed\" placeholder profiles. If you see a Fleazo badge, a person verified it.",
  },
  {
    icon: ShieldOff,
    title: "We never accept paid placements.",
    desc: "Top positions can't be bought. Trust scores can't be inflated. We don't sell ad slots — that's the whole brand.",
  },
  {
    icon: Handshake,
    title: "Direct WhatsApp, no skim.",
    desc: "Every chat link goes from buyer to seller. No middle inbox, no commission, no \"contact via Fleazo\" funnel.",
  },
  {
    icon: Fingerprint,
    title: "Listings are owner-controlled.",
    desc: "The verified owner controls their profile. Reviews aren't a star-rating economy that businesses pay to game.",
  },
];

const RED_FLAGS = [
  "Anyone asking you to pay Fleazo to rank higher",
  "Listings without a verification badge claiming to be \"verified\"",
  "Anyone offering to buy or sell Fleazo accounts",
  "Reviews that read like marketing copy",
];

export default function TrustPage() {
  return (
    <div className="relative bg-[#F9F6F0] text-[#2D2825] min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#E5DEC9_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80" />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-10 pb-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[11px] font-mono uppercase tracking-[0.25em] text-[#8A7F73]">
          <Link href="/" className="hover:text-[#C85A32]">
            Fleazo
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1D1B19]">Trust & Verification</span>
        </nav>

        {/* Hero */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C85A32]" />
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black">
              The Trust Charter
            </p>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C85A32]" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight leading-[1.02] max-w-3xl mx-auto">
            Every badge,{" "}
            <span className="italic text-[#D4AF37]">earned.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#62564C] max-w-2xl mx-auto leading-relaxed">
            Fake reviews built the modern web. We're building something different.
            Here's exactly how we check every business, every creator, every
            time — and what we promise never to do.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 bg-amber-50 border border-[#D4AF37]/40 text-[#7C5C18] text-[10px] font-mono font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
            <Asterisk size={11} className="text-[#D4AF37]" />
            Last updated · {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
          </div>
        </header>

        {/* Verification process */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-3">
              The Verification Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#1D1B19]">
              Four checks. Twenty-four hours.
            </h2>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <li
                key={s.label}
                className="relative bg-[#FCFAF7] border-2 border-[#EBE4D5] rounded-2xl p-6 shadow-[0_4px_18px_-10px_rgba(45,40,37,0.15)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-14 rounded-t-full bg-gradient-to-b from-[#C85A32] to-[#7C2D12] flex items-center justify-center shadow-md">
                    <s.icon size={18} className="text-white" />
                  </div>
                  <span className="font-serif font-black text-3xl text-[#D4AF37] italic tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-serif font-black text-lg leading-tight text-[#1D1B19] mb-2">
                  {s.label}
                </p>
                <p className="text-xs text-[#62564C] leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Tier system */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-3">
              The Badge System
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#1D1B19]">
              Three tiers. One meaning.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <TierCard
              label="Top Tier"
              pillClass="bg-[#D4AF37] text-[#1D1B19]"
              desc="Established, hand-vetted, with a verifiable track record. The original stalls of Fleazo."
            />
            <TierCard
              label="Expert"
              pillClass="bg-[#1C1A17] text-[#D4AF37]"
              desc="Specialists at the top of their craft. Verified, recommended, and trusted by their peers."
            />
            <TierCard
              label="Rising Star"
              pillClass="bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white"
              desc="New voices we've personally vetted. Less history, equal trust — every badge is hand-stamped."
            />
          </div>
        </section>

        {/* Our promises */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-3">
              Our Promises
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#1D1B19]">
              What we'll never do.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PROMISES.map((p, i) => (
              <article
                key={p.title}
                className="group relative bg-white border border-[#EBE4D5] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-amber-200/40 via-transparent to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-14 rounded-t-full bg-gradient-to-b from-[#C85A32] to-[#7C2D12] flex items-center justify-center shadow-md">
                      <p.icon size={18} className="text-white" />
                    </div>
                    <span className="text-[9px] font-mono text-[#8A7F73] tabular-nums">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-lg leading-tight text-[#1D1B19] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#62564C] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Red flags */}
        <section className="mb-20">
          <article className="bg-[#1C1A17] text-stone-100 rounded-3xl border border-[#3D352F] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-red-500/15 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative px-7 sm:px-12 py-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/15 border border-red-400/30 text-red-300">
                  <X size={14} />
                </span>
                <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-red-300 font-black">
                  Red Flags
                </p>
              </div>

              <h2 className="font-serif font-black text-3xl sm:text-4xl tracking-tight leading-tight text-white mb-6">
                If you ever see this,{" "}
                <span className="italic text-[#D4AF37]">tell us.</span>
              </h2>

              <ul className="space-y-3">
                {RED_FLAGS.map((flag) => (
                  <li
                    key={flag}
                    className="flex items-start gap-3 text-sm text-stone-300"
                  >
                    <X
                      size={16}
                      className="text-red-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    {flag}
                  </li>
                ))}
              </ul>

              <p className="mt-7 pt-5 border-t border-dashed border-stone-700 text-[11px] font-mono text-stone-400 leading-relaxed">
                ◆ Anything you see that doesn't feel right — DM us on{" "}
                <a
                  href="https://wa.me/919999900000"
                  className="text-[#D4AF37] hover:underline"
                >
                  WhatsApp
                </a>{" "}
                or write{" "}
                <a
                  href="mailto:trust@fleazo.com"
                  className="text-[#D4AF37] hover:underline"
                >
                  trust@fleazo.com
                </a>
                . We investigate every report within 48 hours.
              </p>
            </div>
          </article>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="relative bg-[#FCFAF7] border-2 border-[#EBE4D5] rounded-[28px] px-7 sm:px-12 py-12 shadow-[0_20px_50px_-20px_rgba(28,26,23,0.25)]">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-[#D4AF37]/40 text-[#7C5C18] text-[10px] font-mono font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-5">
              <BadgeCheck size={11} className="text-[#D4AF37]" />
              Hand-stamped, every time
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight leading-tight text-[#1D1B19] max-w-2xl mx-auto">
              Want your own badge?{" "}
              <span className="italic text-[#D4AF37]">Earn it.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#62564C] max-w-xl mx-auto leading-relaxed">
              Three minutes to apply. Twenty-four hours to verify. Forever free.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/join"
                className="group inline-flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.25em] px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Apply for Verification
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2D2825] hover:text-[#C85A32] transition-colors px-4 py-2.5"
              >
                <MessageSquare size={12} />
                Report a listing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TierCard({ label, pillClass, desc }) {
  return (
    <article className="relative bg-white border border-[#EBE4D5] rounded-2xl p-6 text-center shadow-[0_4px_18px_-10px_rgba(45,40,37,0.15)]">
      <span
        className={`inline-flex items-center gap-1 ${pillClass} text-[11px] font-mono font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md mb-4`}
      >
        <BadgeCheck size={11} />
        {label}
      </span>
      <p className="text-sm text-[#62564C] leading-relaxed">{desc}</p>
    </article>
  );
}
