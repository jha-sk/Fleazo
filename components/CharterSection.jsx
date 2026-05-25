import { Network, ShieldCheck, Search as SearchIcon, Star } from "lucide-react";
import { JoinButton } from "@/components/JoinTrigger";

const INK = "#1D1B19";
const GOLD = "#D4AF37";

const CLAUSES = [
  {
    roman: "I.",
    Icon: Network,
    title: "The Network Effect",
    body:
      "Bidirectional discovery — the baker finds the photographer, the artist finds the customer. One local ecosystem fostering collaborative growth.",
  },
  {
    roman: "II.",
    Icon: ShieldCheck,
    title: "Verified Trust",
    body:
      "Every listing is checked. Real businesses. Real people. Trust scores you can actually rely on — no paid-for fake reviews.",
  },
  {
    roman: "III.",
    Icon: SearchIcon,
    title: "AI-Ready by Default",
    body:
      "Schema-rich profiles indexed for Google, ChatGPT, Perplexity, and Gemini — your business shows up when buyers ask AI.",
  },
  {
    roman: "IV.",
    Icon: Star,
    title: "Zero Commissions",
    body:
      "Customers contact you directly via WhatsApp. We never sit between you and your revenue. Forever free for verified members.",
  },
];

function Clause({ clause, index }) {
  const { roman, Icon, title, body } = clause;
  const flip = index % 2 === 1;

  return (
    <article
      className={`group relative grid grid-cols-12 gap-4 sm:gap-8 py-10 sm:py-14 first:pt-2 ${
        flip ? "sm:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* roman numeral pillar */}
      <div className="col-span-12 sm:col-span-4 flex sm:block items-baseline gap-3">
        <span
          aria-hidden="true"
          className="font-serif font-black italic leading-none tracking-tighter select-none text-[88px] sm:text-[140px] md:text-[180px]"
          style={{ color: GOLD }}
        >
          {roman}
        </span>
        <span
          aria-hidden="true"
          className="sm:mt-2 inline-flex items-center justify-center w-9 h-9 rounded-full border-2 self-end"
          style={{ borderColor: INK, color: INK }}
        >
          <Icon className="w-4 h-4" strokeWidth={2.5} />
        </span>
      </div>

      {/* clause body */}
      <div className="col-span-12 sm:col-span-8 sm:pt-6 relative">
        <span
          aria-hidden="true"
          className="hidden sm:block absolute -left-4 top-7 w-1 h-1 rounded-full"
          style={{ backgroundColor: GOLD }}
        />
        <h3
          className="font-serif font-black text-3xl sm:text-4xl md:text-5xl leading-[0.95] tracking-tight"
          style={{ color: INK }}
        >
          {title}
        </h3>
        <p
          className="mt-4 text-[15px] leading-relaxed max-w-xl font-normal"
          style={{ color: "#5C5246" }}
        >
          {body}
        </p>
      </div>
    </article>
  );
}

function GoldRule() {
  return (
    <div className="relative flex items-center" aria-hidden="true">
      <span
        className="flex-1 h-px"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D4AF37 0 6px, transparent 6px 14px)",
        }}
      />
      <span
        className="mx-3 inline-block w-1.5 h-1.5 rounded-full"
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

export function CharterSection() {
  return (
    <section
      aria-labelledby="charter-title"
      className="relative px-5 md:px-8 mb-24 py-16 sm:py-20 overflow-hidden"
      style={{ backgroundColor: "#FBF6EB" }}
    >
      {/* decorative double border frame */}
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

      <div className="relative max-w-5xl mx-auto">
        {/* header — original copy preserved verbatim */}
        <header className="text-center mb-12 sm:mb-16">
          <h2
            id="charter-title"
            className="font-serif font-black text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight"
            style={{ color: INK }}
          >
            Why join the{" "}
            <span className="italic relative inline-block">
              &ldquo;Digital Flea Market&rdquo;?
              <svg
                aria-hidden="true"
                viewBox="0 0 480 14"
                className="absolute -bottom-3 left-0 w-full h-3"
                fill="none"
                stroke={GOLD}
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M3 9 C 100 2, 240 13, 380 6 S 470 9, 477 7" />
              </svg>
            </span>
          </h2>

          <p
            className="mt-8 text-md font-normal"
            style={{ color: "#5C5246" }}
          >
            Because likes don&apos;t pay bills. Being found does.
          </p>
        </header>

        {/* clauses */}
        <div className="relative">
          {CLAUSES.map((c, i) => (
            <div key={c.roman}>
              <Clause clause={c} index={i} />
              {i < CLAUSES.length - 1 && <GoldRule />}
            </div>
          ))}
        </div>

        {/* seal + CTA */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center text-center relative">
          <GoldRule />

          {/* decorative wax seal — no text, pure ornament */}
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
            Join the Platform — It&apos;s Free
          </JoinButton>
        </div>
      </div>
    </section>
  );
}
