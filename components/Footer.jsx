import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const INK = "#1D1B19";
const GOLD = "#D4AF37";
const CREAM = "#FBF6EB";

const navLinkClass =
  "inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.18em] font-bold transition-colors duration-200";

const forYouLinks = [
  { label: "For Business", href: "/for-business" },
  { label: "For Creators", href: "/for-creators" },
  { label: "For Customers", href: "/for-customers" },
  { label: "Apply Free", href: "/join" },
];

const discoverLinks = [
  { label: "Jaipur", href: "/city/Jaipur" },
  { label: "Jodhpur", href: "/city/Jodhpur" },
  { label: "Cafes", href: "/category/cafe" },
  { label: "Photography", href: "/category/photography" },
  { label: "All Stalls", href: "/#market-stalls" },
];

const exploreLinks = [
  { label: "The Market", href: "/" },
  { label: "Why Join", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Trust & Verification", href: "/trust", type: "link" },
  { label: "Privacy", href: "/privacy", type: "link" },
  { label: "Terms", href: "/terms", type: "link" },
  { label: "Report a listing", href: "mailto:trust@fleazo.com", type: "a" },
];

const socials = [
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:hello@fleazo.com", label: "Email" },
];

function NavColumn({ label, items }) {
  return (
    <nav
      aria-label={`Footer — ${label}`}
      className="col-span-6 md:col-span-3 lg:col-span-2"
    >
      <h4
        className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.32em] font-black mb-5"
        style={{ color: GOLD }}
      >
        <span
          aria-hidden="true"
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: GOLD }}
        />
        {label}
      </h4>
      <ul className="space-y-3">
        {items.map((l) => {
          const inner = (
            <>
              <span
                aria-hidden="true"
                className="inline-block w-3 h-px transition-all duration-300 group-hover:w-5"
                style={{ backgroundColor: GOLD }}
              />
              <span className="transition-colors group-hover:text-[#FBF6EB]">
                {l.label}
              </span>
            </>
          );
          const cls = `${navLinkClass} group`;
          const style = { color: "rgba(251,246,235,0.7)" };
          return (
            <li key={l.label}>
              {l.type === "a" ? (
                <a href={l.href} className={cls} style={style}>
                  {inner}
                </a>
              ) : (
                <Link href={l.href} className={cls} style={style}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

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

export function Footer() {
  return (
    <footer
      className="relative mt-0 overflow-hidden"
      style={{ backgroundColor: INK, color: CREAM }}
    >
      {/* giant editorial watermark */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] sm:bottom-[-5rem] font-serif italic font-black select-none pointer-events-none whitespace-nowrap leading-none"
        style={{
          color: GOLD,
          opacity: 0.06,
          fontSize: "min(28vw, 360px)",
          letterSpacing: "-0.04em",
        }}
      >
        Fleazo.
      </span>

      {/* gold + cream double top border */}
      <div
        aria-hidden="true"
        className="h-1"
        style={{ backgroundColor: GOLD }}
      />
      <div
        aria-hidden="true"
        className="h-px"
        style={{ backgroundColor: "rgba(251,246,235,0.15)" }}
      />

      {/* corner ornaments */}
      {[
        "top-6 left-6 sm:top-8 sm:left-8",
        "top-6 right-6 sm:top-8 sm:right-8 rotate-90",
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

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-10">
        {/* top: imprint colophon */}
        <div className="grid grid-cols-12 gap-8 sm:gap-12">
          {/* brand block */}
          <div className="col-span-12 md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-black italic text-lg"
                style={{
                  backgroundColor: CREAM,
                  color: INK,
                  boxShadow: `inset 0 0 0 2px ${GOLD}`,
                }}
              >
                f.
              </span>
              <span
                className="relative font-serif font-black italic text-4xl sm:text-5xl tracking-tight leading-none"
                style={{ color: CREAM }}
              >
                Fleazo
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -bottom-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
              </span>
            </div>

            <p
              className="font-serif text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ color: "rgba(251,246,235,0.85)" }}
            >
              India&apos;s AI-ready local directory. Verified businesses, creators &amp;
              artists — discoverable on Google, AI search, and WhatsApp. Zero
              commissions, ever.
            </p>

            {/* socials — gold-outlined circles */}
            <ul className="flex items-center gap-3 mt-8">
              {socials.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="group w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: GOLD, color: CREAM }}
                  >
                    <Icon
                      className="w-4 h-4 transition-transform group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <NavColumn label="For You" items={forYouLinks} />
          <NavColumn label="Discover" items={discoverLinks} />
          <NavColumn label="Explore" items={exploreLinks} />
          <NavColumn label="Legal" items={legalLinks} />
        </div>

        {/* gold dashed divider */}
        <div className="mt-14 sm:mt-16">
          <GoldDashRule />
        </div>

        {/* bottom imprint strip */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.24em]">
          <span style={{ color: "rgba(251,246,235,0.55)" }}>
            © {new Date().getFullYear()} Fleazo Network. Made in India.
          </span>

         
        </div>
      </div>
    </footer>
  );
}
