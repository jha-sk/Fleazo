import Link from "next/link";
import { Store } from "lucide-react";
import { BusinessCard } from "@/components/BusinessCard";
import { Hero } from "@/components/Hero";
import { EcosystemSection } from "@/components/EcosystemSection";
import { LocalVoicesSection } from "@/components/LocalVoicesSection";
import { CityPostcardsSection } from "@/components/CityPostcards";
import { CategoryStampsSection } from "@/components/CategoryStamps";
import { CharterSection } from "@/components/CharterSection";
import { GalleryMarquee } from "@/components/GalleryMarquee";
import { businesses } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <EcosystemSection />

      <GalleryMarquee />

      {/* Market Stalls — Businesses */}
      <section
        id="market-stalls"
        aria-labelledby="market-stalls-title"
        className="mb-20 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="px-5 md:px-0 flex items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Store
                  className="w-4 h-4 text-[#C85A32]"
                  aria-hidden="true"
                />
                <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black">
                  Verified Vendors
                </p>
              </div>
              <h3
                id="market-stalls-title"
                className="font-serif font-black text-3xl sm:text-4xl tracking-tight text-[#1D1B19] leading-none"
              >
                Market Stalls.
              </h3>
              <p className="mt-2 text-xs text-[#8A7F73] font-mono">
                Hand-picked. Vetted. No fake reviews.
              </p>
            </div>
            <Link
              href="#categories"
              className="group shrink-0 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.25em] font-bold text-[#2D2825] hover:text-[#C85A32] transition-colors"
            >
              View All
              <span className="inline-block h-px w-6 bg-current group-hover:w-10 transition-all" />
              →
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:px-0">
            {businesses.map((b) => (
              <BusinessCard key={b.slug} business={b} />
            ))}
          </div>
        </div>
      </section>

      <LocalVoicesSection />

      <CityPostcardsSection />

      <CategoryStampsSection />

      <CharterSection />
    </>
  );
}
