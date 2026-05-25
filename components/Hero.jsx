"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Compass,
  ArrowUpRight,
  MessageSquare,
  Store,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { businesses } from "@/lib/data";

// Real cafe scenes pulled straight from the businesses dataset.
// Explicit allowlist — three non-Brewtopia scenes pulled from real listings.
const HERO_SLUGS = [
  "tapri-central-jaipur",
  "bar-palladio-jaipur",
  "indique-jodhpur",
];

const CAFE_SCENES = HERO_SLUGS
  .map((slug) => businesses.find((b) => b.slug === slug))
  .filter(Boolean)
  .map((b) => ({ src: b.image, name: b.name, city: b.city }));

const ATMOSPHERE = {
  name: "Jaipur Sunrise",
  overlay:
    "bg-gradient-to-r from-amber-500/30 via-stone-900/80 to-stone-950/90",
  accentText: "text-[#D4AF37]",
  badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  spotlight: "from-amber-400/20 via-orange-500/5 to-transparent",
};

function periodFromHour(h) {
  if (h >= 5 && h < 12) return "morning";
  if (h >= 12 && h < 17) return "afternoon";
  if (h >= 17 && h < 21) return "evening";
  return "night";
}

export function Hero() {
  // SSR-safe defaults that match the previously rendered copy.
  const [period, setPeriod] = useState("morning");
  const [mounted, setMounted] = useState(false);
  const [sceneIdx, setSceneIdx] = useState(0);

  // Time-of-day greeting — updates every minute.
  useEffect(() => {
    setMounted(true);
    const update = () => setPeriod(periodFromHour(new Date().getHours()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  // Cafe-image carousel — advances every 5s.
  useEffect(() => {
    if (CAFE_SCENES.length < 2) return;
    const id = setInterval(
      () => setSceneIdx((i) => (i + 1) % CAFE_SCENES.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const activeScene = CAFE_SCENES[sceneIdx] ?? CAFE_SCENES[0];
  const greetingUpper = mounted
    ? `GOOD ${period.toUpperCase()}, EXPLORER`
    : "GOOD DAY, EXPLORER";
  const greetingButton = `Good ${period}. Find a Cafe?`;

  return (
    <div className="bg-[#F9F6F0] text-[#2D2825] font-sans antialiased pb-12 relative overflow-hidden">
      {/* Dotted canvas background */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5DEC9_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80 z-0" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 pt-8">
        {/* Hero banner card */}
        <div className="bg-[#1C1A17] rounded-3xl overflow-hidden shadow-2xl border border-[#3D352F] relative group">
          <div
            className={`absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br ${ATMOSPHERE.spotlight} blur-3xl pointer-events-none opacity-80`}
          />

          {/* Cross-fading cafe carousel */}
          <div className="absolute inset-0 z-0">
            {CAFE_SCENES.map((scene, i) => (
              <img
                key={scene.src}
                src={scene.src}
                alt={scene.name}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out duration-[1500ms] ${
                  i === sceneIdx
                    ? "opacity-85 scale-105 group-hover:scale-100"
                    : "opacity-0"
                } transition-transform duration-[10000ms]`}
              />
            ))}
            <div
              className={`absolute inset-0 ${ATMOSPHERE.overlay} mix-blend-multiply`}
            />
            <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
          </div>

          <div className="relative z-10 px-6 sm:px-12 py-16 sm:py-24 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="mb-8 transform hover:scale-105 transition-all duration-300">
              <span
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest border shadow-lg backdrop-blur-md ${ATMOSPHERE.badgeBg}`}
              >
                <span className="h-2 w-2 rounded-full bg-amber-400 mr-2 animate-pulse shadow-[0_0_8px_#F59E0B]" />
                AI Ready for 2026
              </span>
            </div>

            <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-serif font-black leading-[1.15] tracking-tight max-w-3xl drop-shadow-md">
              Rajasthan Local Search Engine
            </h2>

            <p className="mt-4 text-sm sm:text-base text-stone-300 font-sans tracking-wide max-w-xl leading-relaxed">
              Connecting verified Businesses, Creators &amp; Artists directly
              with customers.
            </p>

            <div className="mt-2 text-[10px] font-mono text-stone-400 opacity-60">
              📍 Current atmosphere preview:{" "}
              <span className="text-white font-bold">{activeScene.name}</span> (
              {ATMOSPHERE.name})
            </div>

            {/* carousel pip indicators */}
            {CAFE_SCENES.length > 1 && (
              <div
                className="mt-3 flex items-center gap-1.5"
                role="tablist"
                aria-label="Cafe scenes"
              >
                {CAFE_SCENES.map((scene, i) => (
                  <button
                    key={scene.src}
                    type="button"
                    role="tab"
                    aria-selected={i === sceneIdx}
                    aria-label={scene.name}
                    onClick={() => setSceneIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === sceneIdx
                        ? "w-6 bg-[#D4AF37]"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="absolute bottom-0 inset-x-0 h-4 bg-[#FCFAF7] rounded-t-2xl border-t border-[#EBE4D5]/30 pointer-events-none" />
        </div>

        {/* Good Day, Explorer block */}
        <div className="max-w-4xl mx-auto text-center mt-12 mb-16 relative">
          <div className="w-[1.5px] h-12 bg-gradient-to-b from-stone-400/30 to-orange-400/50 mx-auto -mt-4 mb-4" />

          <p
            className="text-[11px] font-mono tracking-widest uppercase text-[#C85A32] font-black"
            suppressHydrationWarning
          >
            {greetingUpper}
          </p>

          <div className="mt-4 inline-flex items-center">
            <button
              type="button"
              className="bg-white hover:bg-stone-50 text-indigo-950 font-sans text-xs font-bold px-5 py-2.5 rounded-full shadow-md border border-indigo-100 hover:border-indigo-200 transition-all flex items-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <Sparkles
                size={12}
                className="text-indigo-600 animate-pulse"
              />
              <span suppressHydrationWarning>{greetingButton}</span>
              <ArrowUpRight
                size={12}
                className="text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>

          <div className="mt-12 space-y-2">
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#1D1B19]">
              Your Digital Identity.
            </h1>
            <h2
              className={`text-4xl sm:text-6xl font-serif italic ${ATMOSPHERE.accentText} mt-1 block`}
            >
              Zero Commissions.
            </h2>
          </div>

          <p className="mt-6 text-sm sm:text-base text-[#62564C] leading-relaxed max-w-xl mx-auto">
            Social media likes don&apos;t pay the bills — customers do. Fleazo
            is a Public Directory that helps your business get found on Google
            and AI searches.
          </p>

          <div className="mt-8 max-w-2xl mx-auto text-left">
            <SearchBar />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="#market-stalls"
              className="group inline-flex items-center gap-2 bg-white border border-[#EBE4D5] text-[#2D2825] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all"
            >
              <Store
                size={14}
                className="text-blue-600 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              Find Shops
            </Link>
            <Link
              href="#local-voices"
              className="group inline-flex items-center gap-2 bg-white border border-[#EBE4D5] text-[#2D2825] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5 transition-all"
            >
              <Megaphone
                size={14}
                className="text-purple-600 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              Hire Creators
            </Link>
            <Link
              href="#categories"
              className="group inline-flex items-center gap-2 bg-gradient-to-tr from-[#1C1A17] to-[#3D352F] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Explore All
              <ArrowRight
                size={14}
                className="text-[#D4AF37] group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-y-3 gap-x-6 text-xs font-mono text-[#8A7F73]">
            <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-md border border-[#EBE4D5]">
              <MessageSquare size={12} className="text-emerald-600" /> Direct
              WhatsApp chat
            </span>
            <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-md border border-[#EBE4D5]">
              <Compass size={12} className="text-[#C85A32]" /> Verified trust
              score
            </span>
            <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-md border border-[#EBE4D5]">
              <Sparkles
                size={12}
                className="text-amber-500 animate-spin"
                style={{ animationDuration: "6s" }}
              />{" "}
              No middlemen
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
