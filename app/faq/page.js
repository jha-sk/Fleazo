import { Plus } from "lucide-react";

const INK = "#1D1B19";
const GOLD = "#D4AF37";
const CREAM = "#FBF6EB";

export const metadata = {
  title: "FAQ | Fleazo",
  description: "Common questions about Fleazo's AI-ready local directory.",
};

const faqs = [
  {
    q: "Is Fleazo really free?",
    a: "Yes. Listing on Fleazo is permanently free for verified businesses, creators, and artists. We never take commissions on leads, bookings, or referrals.",
  },
  {
    q: "How are listings verified?",
    a: "Our team checks identity, address, and operational signals before any listing goes live. Verification typically takes under 24 hours.",
  },
  {
    q: "How does AI discovery work?",
    a: "Every profile ships with JSON-LD schema, hyperlocal geo metadata, and structured FAQs — exactly the signals ChatGPT, Perplexity, Gemini, and Google use to answer location-based queries.",
  },
  {
    q: "Where do customer enquiries land?",
    a: "Directly on your WhatsApp. Fleazo never sits between you and the buyer — we don't collect, resell, or auction leads.",
  },
  {
    q: "Which cities are live today?",
    a: "Jaipur and Jodhpur are fully live with 17 verified businesses and 21 creators. We are rolling out Udaipur and Ajmer next.",
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

export default function FAQPage() {
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

      <section className="relative max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        {/* header — original copy preserved */}
        <header className="text-center mb-12 sm:mb-16">
          <p
            className="text-[11px] font-mono uppercase tracking-[0.36em] font-black mb-5"
            style={{ color: GOLD }}
          >
            Frequently asked
          </p>
          <h1
            className="font-serif font-black text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight"
            style={{ color: INK }}
          >
            Honest answers,{" "}
            <span className="italic relative inline-block" style={{ color: GOLD }}>
              no fine print.
              <svg
                aria-hidden="true"
                viewBox="0 0 280 14"
                className="absolute -bottom-3 left-0 w-full h-3"
                fill="none"
                stroke={GOLD}
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M3 9 C 60 2, 160 13, 240 6 S 270 9, 277 7" />
              </svg>
            </span>
          </h1>
        </header>

        {/* gold rule above the column */}
        <div className="mb-2">
          <GoldDashRule />
        </div>

        {/* Q&A column — typographic, not boxed */}
        <ul className="relative">
          {faqs.map(({ q, a }, i) => (
            <li key={q} className="relative">
              <details className="group">
                <summary
                  className="list-none cursor-pointer py-6 sm:py-7 grid grid-cols-[1fr_auto] gap-6 items-start"
                  style={{ color: INK }}
                >
                  <h2 className="font-serif font-black text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight">
                    {q}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 group-open:rotate-45 group-open:bg-[#1D1B19]"
                    style={{ borderColor: INK }}
                  >
                    <Plus
                      className="w-4 h-4 transition-colors group-open:text-[#D4AF37]"
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                  </span>
                </summary>

                {/* answer — gold left bar + serif body */}
                <div
                  className="pb-7 sm:pb-9 pr-12 pl-5 sm:pl-6 border-l-2 ml-1"
                  style={{ borderColor: GOLD }}
                >
                  <p
                    className="font-serif text-base sm:text-lg leading-relaxed"
                    style={{ color: "#5C5246" }}
                  >
                    {a}
                  </p>
                </div>
              </details>

              {/* divider — gold dashed between each item */}
              {i < faqs.length - 1 && (
                <div aria-hidden="true">
                  <GoldDashRule />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* bottom rule + textless ornament */}
        <div className="mt-2">
          <GoldDashRule />
        </div>

        <div className="mt-12 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full"
            style={{
              backgroundColor: INK,
              boxShadow: `inset 0 0 0 2px ${GOLD}`,
            }}
          >
            <span
              className="block w-5 h-5 rounded-full border-2"
              style={{ borderColor: GOLD }}
            />
          </span>
        </div>
      </section>
    </article>
  );
}
