"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Asterisk,
  Quote,
  Sparkles,
} from "lucide-react";
import { useJoinDialog } from "@/components/JoinDialog";

const PERFORATION =
  "[background-image:radial-gradient(circle,#D8CDB6_1.25px,transparent_1.25px)] [background-size:10px_10px] [background-position:center]";

export function AudienceLanding({
  eyebrow,
  headline,
  accent,
  sub,
  ctaPrimary,
  ctaSecondary,
  stats,
  pillarTitle,
  pillarSubtitle,
  benefits,
  stepsTitle,
  stepsSubtitle,
  steps,
  quote,
  closer,
}) {
  return (
    <div className="relative bg-[#F9F6F0] text-[#2D2825] min-h-screen overflow-hidden">
      {/* Dotted canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5DEC9_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-20">
        <HeroBlock
          eyebrow={eyebrow}
          headline={headline}
          accent={accent}
          sub={sub}
          ctaPrimary={ctaPrimary}
          ctaSecondary={ctaSecondary}
        />

        {stats?.length > 0 && <StatStrip stats={stats} />}

        {benefits?.length > 0 && (
          <BenefitGrid
            title={pillarTitle}
            subtitle={pillarSubtitle}
            benefits={benefits}
          />
        )}

        {steps?.length > 0 && (
          <StepTimeline
            title={stepsTitle}
            subtitle={stepsSubtitle}
            steps={steps}
          />
        )}

        {quote && <QuoteCard {...quote} />}

        {closer && <CloserBanner {...closer} />}
      </div>
    </div>
  );
}

function HeroBlock({ eyebrow, headline, accent, sub, ctaPrimary, ctaSecondary }) {
  return (
    <header className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C85A32]" />
        <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black">
          {eyebrow}
        </p>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C85A32]" />
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight leading-[1.02] max-w-4xl mx-auto">
        {headline}{" "}
        <span className="italic text-[#D4AF37]">{accent}</span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-[#62564C] max-w-2xl mx-auto leading-relaxed">
        {sub}
      </p>

      <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
        <CtaButton {...ctaPrimary} variant="primary" />
        {ctaSecondary && <CtaButton {...ctaSecondary} variant="ghost" />}
      </div>
    </header>
  );
}

function CtaButton({ label, href, dialog, variant }) {
  const { open } = useJoinDialog();
  const cls =
    variant === "primary"
      ? "group inline-flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.25em] px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all"
      : "group inline-flex items-center gap-2 bg-white border border-[#EBE4D5] text-[#2D2825] text-xs font-bold uppercase tracking-[0.25em] px-6 py-3 rounded-full hover:border-[#C85A32] hover:text-[#C85A32] transition-all";
  const arrow = (
    <ArrowUpRight
      size={14}
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
    />
  );
  if (dialog) {
    return (
      <button type="button" onClick={open} className={cls}>
        {label}
        {arrow}
      </button>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label}
      {arrow}
    </Link>
  );
}

function StatStrip({ stats }) {
  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <div className="bg-[#1C1A17] text-stone-100 rounded-3xl border border-[#3D352F] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/15 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="relative grid grid-cols-3 divide-x divide-stone-700">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center">
              <p className="font-serif font-black text-3xl sm:text-5xl tracking-tight text-white">
                {s.value}
              </p>
              <p className="mt-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-stone-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitGrid({ title, subtitle, benefits }) {
  return (
    <section className="mb-20">
      <div className="text-center mb-10">
        {subtitle && (
          <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-3">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#1D1B19] leading-tight">
          {title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <article
            key={b.title}
            className="group relative bg-white border border-[#EBE4D5] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-amber-200/40 via-transparent to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative flex items-start gap-4">
              <div className="w-12 h-14 rounded-t-full bg-gradient-to-b from-[#C85A32] to-[#7C2D12] flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                <b.icon size={20} className="text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif font-black text-lg leading-tight text-[#1D1B19]">
                    {b.title}
                  </h3>
                  <span className="text-[9px] font-mono tabular-nums text-[#8A7F73] shrink-0">
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#62564C] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StepTimeline({ title, subtitle, steps }) {
  return (
    <section className="mb-20">
      <div className="text-center mb-10">
        {subtitle && (
          <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-3">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#1D1B19] leading-tight">
          {title}
        </h2>
      </div>

      <ol className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <li
            key={s.label}
            className="relative bg-[#FCFAF7] border-2 border-[#EBE4D5] rounded-2xl p-6 shadow-[0_4px_18px_-10px_rgba(45,40,37,0.15)]"
          >
            {i < steps.length - 1 && (
              <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-px border-t-2 border-dashed border-[#D4AF37]/50 z-10" />
            )}

            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif font-black text-3xl text-[#D4AF37] italic tabular-nums leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7F73]">
                Step
              </span>
            </div>

            <p className="font-serif font-black text-xl leading-tight text-[#1D1B19] mb-2">
              {s.label}
            </p>
            <p className="text-sm text-[#62564C] leading-relaxed">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function QuoteCard({ quote, attribution, role }) {
  return (
    <section className="mb-20 max-w-3xl mx-auto">
      <article className="relative bg-[#FCFAF7] border-2 border-[#EBE4D5] rounded-[28px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(28,26,23,0.3)]">
        <div className={`h-2 w-full ${PERFORATION}`} />

        <div className="px-7 sm:px-12 py-10 relative">
          <Quote
            size={48}
            className="absolute top-6 left-6 text-[#D4AF37]/20"
          />
          <p className="relative text-xl sm:text-2xl font-serif italic leading-relaxed text-[#1D1B19]">
            “{quote}”
          </p>

          <div className="mt-6 pt-5 border-t border-dashed border-[#E3D9C5] flex items-center justify-between">
            <div>
              <p className="font-serif font-black text-base text-[#1D1B19]">
                {attribution}
              </p>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8A7F73] mt-1">
                {role}
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C85A32] font-black">
              ◆ Verified Voice
            </span>
          </div>
        </div>

        <div className={`h-2 w-full ${PERFORATION}`} />
      </article>
    </section>
  );
}

function CloserBanner({ title, accent, sub, cta }) {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="relative bg-[#1C1A17] text-stone-100 rounded-3xl border border-[#3D352F] shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-400/20 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative px-8 sm:px-12 py-14 text-center">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 border border-amber-400/30 text-[10px] font-mono font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-5">
            <Sparkles size={11} />
            Ready when you are
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-[1.05] text-white max-w-3xl mx-auto">
            {title}{" "}
            <span className="italic text-[#D4AF37]">{accent}</span>
          </h2>

          {sub && (
            <p className="mt-5 text-sm sm:text-base text-stone-400 max-w-xl mx-auto leading-relaxed">
              {sub}
            </p>
          )}

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CtaButton {...cta} variant="primary" />
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-stone-300 hover:text-[#D4AF37] transition-colors"
            >
              <Asterisk size={12} />
              Back to Fleazo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
