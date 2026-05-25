import {
  ShieldCheck,
  Sparkles,
  HandCoins,
  Globe,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { JoinButton } from "@/components/JoinTrigger";

const INK = "#1D1B19";
const GOLD = "#D4AF37";
const CREAM = "#FBF6EB";

export const metadata = {
  title: "Why Join Fleazo | The AI-Ready Local Directory",
  description:
    "Fleazo turns Instagram likes into actual customers. Verified, AI-indexed, commission-free.",
};

const reasons = [
  {
    Icon: Globe,
    title: "Indexed by Google and AI",
    desc: "Every Fleazo profile is schema-rich, crawlable, and built so ChatGPT, Perplexity, Gemini, and Google return you when buyers ask.",
  },
  {
    Icon: ShieldCheck,
    title: "Verified, never fake",
    desc: "Manual verification on every listing. The trust badge on your profile is earned, not paid for.",
  },
  {
    Icon: HandCoins,
    title: "Zero commissions",
    desc: "Customers WhatsApp you directly. Fleazo never takes a cut of your revenue — not on bookings, not on referrals, not ever.",
  },
  {
    Icon: MessageCircle,
    title: "Direct WhatsApp chat",
    desc: "One click from listing → your business. No middlemen, no leads marketplace, no auction for your own customers.",
  },
  {
    Icon: Sparkles,
    title: "AI-ready by default",
    desc: "JSON-LD, hyperlocal geo tags, structured FAQs. You get next-generation discoverability without a developer.",
  },
  {
    Icon: Rocket,
    title: "Built for collaboration",
    desc: "Bidirectional network — the baker finds the photographer, the model finds the boutique. The flea-market effect goes digital.",
  },
];

function GoldDashRule() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3">
      <span
        className="flex-1 h-px"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D4AF37 0 6px, transparent 6px 14px)",
        }}
      />
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: GOLD }}
      />
      <span
        className="flex-1 h-px"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D4AF37 0 6px, transparent 6px 14px)",
        }}
      />
    </div>
  );
}

function ReasonCard({ Icon, title, desc }) {
  return (
    <article
      className="group relative bg-white border transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: INK,
        boxShadow: "0 6px 0 -4px rgba(29,27,25,0.08)",
      }}
    >
      {/* gold accent stripe on top — grows on hover */}
      <span
        aria-hidden="true"
        className="block h-[3px] w-12 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: GOLD }}
      />

      {/* tiny gold marginalia dot */}
      <span
        aria-hidden="true"
        className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: GOLD }}
      />

      <div className="p-7 sm:p-8">
        {/* icon in ink disc with gold ring */}
        <span
          className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5"
          style={{
            backgroundColor: INK,
            color: GOLD,
            boxShadow: `inset 0 0 0 2px ${GOLD}`,
          }}
        >
          <Icon className="w-5 h-5" aria-hidden="true" />
        </span>

        <h2
          className="font-serif font-black text-xl sm:text-2xl tracking-tight leading-tight mb-3"
          style={{ color: INK }}
        >
          {title}
        </h2>

        <p
          className="font-serif text-[15px] leading-relaxed"
          style={{ color: "#5C5246" }}
        >
          {desc}
        </p>
      </div>

      {/* gold underline footer */}
      <span
        aria-hidden="true"
        className="block h-px mx-7 sm:mx-8 mb-5"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D4AF37 0 4px, transparent 4px 10px)",
        }}
      />
    </article>
  );
}

export default function AboutPage() {
  return (
    <article
      className="relative overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      {/* double frame */}
      <div
        aria-hidden="true"
        className="absolute inset-4 sm:inset-6 md:inset-8 pointer-events-none border"
        style={{ borderColor: INK }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-6 sm:inset-8 md:inset-10 pointer-events-none border"
        style={{ borderColor: GOLD }}
      />

      {/* corner ornaments */}
      {[
        "top-7 left-7 sm:top-10 sm:left-10",
        "top-7 right-7 sm:top-10 sm:right-10 rotate-90",
        "bottom-7 left-7 sm:bottom-10 sm:left-10 -rotate-90",
        "bottom-7 right-7 sm:bottom-10 sm:right-10 rotate-180",
      ].map((cls, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`absolute w-5 h-5 sm:w-6 sm:h-6 pointer-events-none ${cls}`}
          fill="none"
          stroke={GOLD}
          strokeWidth="1.5"
        >
          <path d="M0 8 L0 0 L8 0" />
          <path d="M3 11 L3 3 L11 3" opacity="0.5" />
        </svg>
      ))}

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        {/* header — original copy preserved */}
        <header className="text-center mb-12 sm:mb-16">
          <p
            className="text-[11px] font-mono uppercase tracking-[0.36em] font-black mb-5"
            style={{ color: GOLD }}
          >
            Why Fleazo
          </p>
          <h1
            className="font-serif font-black text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight"
            style={{ color: INK }}
          >
            The local web,{" "}
            <span className="italic relative inline-block" style={{ color: GOLD }}>
              finally yours.
              <svg
                aria-hidden="true"
                viewBox="0 0 320 14"
                className="absolute -bottom-3 left-0 w-full h-3"
                fill="none"
                stroke={GOLD}
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M3 9 C 80 2, 180 13, 280 6 S 310 9, 317 7" />
              </svg>
            </span>
          </h1>

          <p
            className="mt-10 font-serif text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#5C5246" }}
          >
            Most platforms rent you visibility — then sell that same visibility to
            your competitor next week. Fleazo is a public directory: you own your
            profile, your customers reach you directly, and the AI agents of 2026
            actually know you exist.
          </p>
        </header>

        {/* gold rule between intro + grid */}
        <div className="mb-12 sm:mb-16">
          <GoldDashRule />
        </div>

        {/* reasons grid */}
        <section className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {reasons.map((r) => (
            <ReasonCard
              key={r.title}
              Icon={r.Icon}
              title={r.title}
              desc={r.desc}
            />
          ))}
        </section>

        {/* footer: rule + seal + CTA — original CTA text preserved */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center text-center relative">
          <GoldDashRule />

          {/* wax seal — pure ornament, no text */}
          <div className="relative my-10">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full blur-md opacity-30"
              style={{ backgroundColor: GOLD }}
            />
            <div
              aria-hidden="true"
              className="relative w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: INK,
                boxShadow: `inset 0 0 0 2px ${GOLD}, 0 8px 24px -8px rgba(0,0,0,0.35)`,
              }}
            >
              <span
                className="block w-10 h-10 rounded-full border-2"
                style={{ borderColor: GOLD }}
              />
            </div>
          </div>

          <JoinButton size="lg" variant="primary">
            Get listed free
          </JoinButton>
          <p
            className="mt-4 text-xs uppercase tracking-wider"
            style={{ color: "#8A7F73" }}
          >
            Takes under 3 minutes
          </p>
        </div>
      </div>
    </article>
  );
}
