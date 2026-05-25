import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, LayoutGrid, Tag } from "lucide-react";
import { BusinessCard } from "@/components/BusinessCard";
import { CreatorCard } from "@/components/CreatorCard";
import {
  categories,
  findCategoryBySlug,
  listingsForCategory,
  slugify,
} from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: slugify(c.name) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = findCategoryBySlug(slug);
  if (!cat) return { title: "Category not found · Fleazo" };
  return {
    title: `${cat.name} · Fleazo`,
    description: `Verified ${cat.name.toLowerCase()} listings on Fleazo — hand-checked, no fake reviews, direct WhatsApp.`,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const cat = findCategoryBySlug(slug);
  if (!cat) notFound();

  const { businesses: biz, creators: cre } = listingsForCategory(cat.name);
  const all = [...biz, ...cre];
  const cityBreakdown = [...new Set(all.map((l) => l.city))];

  // Other related categories (siblings)
  const related = categories
    .filter((c) => c.name !== cat.name)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <div className="relative bg-[#F9F6F0] text-[#2D2825] min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#E5DEC9_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-10 pb-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[11px] font-mono uppercase tracking-[0.25em] text-[#8A7F73]">
          <Link href="/" className="hover:text-[#C85A32]">
            Fleazo
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#categories" className="hover:text-[#C85A32]">
            Categories
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1D1B19]">{cat.name}</span>
        </nav>

        {/* Hero */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1D1B19] text-[#D4AF37]">
              <Tag className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <p className="text-[11px] font-mono tracking-[0.32em] uppercase text-[#C85A32] font-black">
              Category · Fleazo
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#1D1B19] leading-[0.95]">
              {cat.name}.
            </h1>

            <div className="grid grid-cols-3 gap-3 md:gap-5 text-center md:text-right">
              <Stat value={biz.length} label="Vendors" />
              <Stat value={cre.length} label="Voices" />
              <Stat value={cityBreakdown.length} label="Cities" />
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg text-[#62564C] max-w-2xl leading-relaxed">
            Every {cat.name.toLowerCase()} listing on Fleazo is{" "}
            <span className="text-[#1D1B19] font-bold">hand-verified.</span>{" "}
            Direct WhatsApp. No fake reviews. No commissions.
          </p>
        </header>

        {/* City filter chips */}
        {cityBreakdown.length > 0 && (
          <section className="mb-12">
            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#8A7F73] mb-3">
              ◆ Available in
            </p>
            <div className="flex flex-wrap gap-2">
              {cityBreakdown.map((cityName) => (
                <Link
                  key={cityName}
                  href={`/city/${cityName}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#EBE4D5] text-[#1D1B19] text-[11px] font-mono uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full hover:border-[#C85A32] hover:text-[#C85A32] transition-colors"
                >
                  {cityName}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Businesses */}
        {biz.length > 0 && (
          <ListingSection
            eyebrow="Verified Vendors"
            title={`${cat.name} stalls.`}
            count={biz.length}
            footnote={`Hand-picked ${cat.name.toLowerCase()} listings.`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {biz.map((b) => (
                <BusinessCard key={b.slug} business={b} />
              ))}
            </div>
          </ListingSection>
        )}

        {/* Creators */}
        {cre.length > 0 && (
          <ListingSection
            eyebrow="Local Voices"
            title={`${cat.name} creators.`}
            count={cre.length}
            footnote={`Verified ${cat.name.toLowerCase()} creators.`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cre.map((c) => (
                <CreatorCard key={c.slug} creator={c} />
              ))}
            </div>
          </ListingSection>
        )}

        {all.length === 0 && <EmptyState categoryName={cat.name} />}

        {/* Related categories */}
        <section className="mt-20 pt-10 border-t border-dashed border-[#E3D9C5]">
          <div className="flex items-center gap-2 mb-4">
            <LayoutGrid size={14} className="text-[#C85A32]" />
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C85A32] font-black">
              Other Categories
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {related.map((c) => (
              <Link
                key={c.name}
                href={`/category/${slugify(c.name)}`}
                className="group inline-flex items-center gap-2 bg-white border border-[#EBE4D5] text-[#1D1B19] text-xs font-bold px-4 py-2.5 rounded-full hover:border-[#C85A32] hover:text-[#C85A32] transition-colors"
              >
                {c.name}
                <span className="text-[10px] font-mono text-[#8A7F73] group-hover:text-[#C85A32] tabular-nums">
                  · {c.count}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-serif font-black text-3xl sm:text-4xl text-[#1D1B19] tabular-nums leading-none">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7F73]">
        {label}
      </p>
    </div>
  );
}

function ListingSection({ eyebrow, title, count, footnote, children }) {
  return (
    <section className="mb-16">
      <header className="flex items-end justify-between gap-4 mb-7">
        <div>
          <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-2">
            {eyebrow}
          </p>
          <h2 className="font-serif font-black text-3xl sm:text-4xl tracking-tight text-[#1D1B19]">
            {title}
          </h2>
          <p className="mt-2 text-xs font-mono text-[#8A7F73]">{footnote}</p>
        </div>
        <span className="shrink-0 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7F73] tabular-nums">
          / {String(count).padStart(2, "0")} entries
        </span>
      </header>
      {children}
    </section>
  );
}

function EmptyState({ categoryName }) {
  return (
    <section className="text-center py-16">
      <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C85A32] font-black mb-3">
        ◆ No listings yet
      </p>
      <h2 className="font-serif font-black text-3xl text-[#1D1B19] mb-3">
        {categoryName} is empty.
      </h2>
      <p className="text-sm text-[#62564C] max-w-md mx-auto mb-6">
        Nobody's pinned a stall in this category yet. Be the first — your
        listing claims the spot.
      </p>
      <Link
        href="/join"
        className="group inline-flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.25em] px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        Claim the category
        <ArrowUpRight
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </Link>
    </section>
  );
}
