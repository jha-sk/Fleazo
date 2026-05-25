import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Compass, MapPin } from "lucide-react";
import { BusinessCard } from "@/components/BusinessCard";
import { CreatorCard } from "@/components/CreatorCard";
import {
  cities,
  findCityByName,
  listingsForCity,
  slugify,
} from "@/lib/data";

const CITY_META = {
  Jaipur: {
    code: "JAI",
    pin: "302001",
    nickname: "The Pink City",
    coords: "26.92° N · 75.79° E",
    est: "1727",
    accent: "#E26D5A",
  },
  Jodhpur: {
    code: "JOD",
    pin: "342001",
    nickname: "The Blue City",
    coords: "26.23° N · 73.02° E",
    est: "1459",
    accent: "#3A5DA8",
  },
};

export function generateStaticParams() {
  return cities.map((c) => ({ name: c.name }));
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const city = findCityByName(decodeURIComponent(name));
  if (!city) return { title: "City not found · Fleazo" };
  return {
    title: `${city.name} · Fleazo`,
    description: `Discover verified local stalls and creators in ${city.name}, Rajasthan.`,
  };
}

export default async function CityPage({ params }) {
  const { name } = await params;
  const city = findCityByName(decodeURIComponent(name));
  if (!city) notFound();

  const meta = CITY_META[city.name] ?? {
    code: city.name.slice(0, 3).toUpperCase(),
    pin: "------",
    nickname: "Destination",
    coords: "—",
    est: "—",
    accent: "#C85A32",
  };
  const { businesses: biz, creators: cre } = listingsForCity(city.name);
  const cityCategories = [
    ...new Set([...biz, ...cre].map((l) => l.category)),
  ].slice(0, 8);

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
          <Link href="/#cities-title" className="hover:text-[#C85A32]">
            Cities
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1D1B19]">{city.name}</span>
        </nav>

        {/* Hero with postcard accents */}
        <header className="relative mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1D1B19] text-[#FBF6EB]">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <p
              className="text-[11px] font-mono tracking-[0.32em] uppercase font-black"
              style={{ color: meta.accent }}
            >
              {meta.nickname} · Rajasthan
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-serif font-black text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#1D1B19] leading-[0.9]">
                {city.name}.
              </h1>
              <p className="mt-5 text-sm font-mono text-[#62564C] max-w-md">
                ◆ Est. {meta.est} · {meta.coords} · PIN {meta.pin}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-5 text-center md:text-right">
              <Stat value={biz.length} label="Vendors" />
              <Stat value={cre.length} label="Voices" />
              <Stat value={cityCategories.length} label="Categories" />
            </div>
          </div>
        </header>

        {/* Category chips */}
        {cityCategories.length > 0 && (
          <section className="mb-14">
            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#8A7F73] mb-3">
              ◆ Found in {city.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {cityCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${slugify(cat)}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#EBE4D5] text-[#1D1B19] text-[11px] font-mono uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full hover:border-[#C85A32] hover:text-[#C85A32] transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Businesses */}
        {biz.length > 0 && (
          <ListingSection
            id="vendors"
            eyebrow="Verified Vendors"
            title="Market stalls."
            count={biz.length}
            footnote={`Hand-picked vendors based in ${city.name}.`}
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
            id="voices"
            eyebrow="Local Voices"
            title="Creators & artists."
            count={cre.length}
            footnote={`Verified creators based in ${city.name}.`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cre.map((c) => (
                <CreatorCard key={c.slug} creator={c} />
              ))}
            </div>
          </ListingSection>
        )}

        {biz.length === 0 && cre.length === 0 && (
          <EmptyState cityName={city.name} />
        )}

        {/* Other cities footer */}
        <section className="mt-20 pt-10 border-t border-dashed border-[#E3D9C5]">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C85A32] font-black mb-4">
            ◆ Other Routes
          </p>
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.name !== city.name)
              .map((c) => (
                <Link
                  key={c.name}
                  href={`/city/${c.name}`}
                  className="group inline-flex items-center gap-2 bg-white border border-[#EBE4D5] text-[#1D1B19] text-xs font-bold px-4 py-2.5 rounded-full hover:border-[#C85A32] hover:text-[#C85A32] transition-colors"
                >
                  <Compass size={12} />
                  {c.name}
                  <span className="text-[10px] font-mono text-[#8A7F73] group-hover:text-[#C85A32]">
                    · {c.count}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
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

function ListingSection({ id, eyebrow, title, count, footnote, children }) {
  return (
    <section id={id} className="mb-16">
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

function EmptyState({ cityName }) {
  return (
    <section className="text-center py-16">
      <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C85A32] font-black mb-3">
        ◆ No stalls yet
      </p>
      <h2 className="font-serif font-black text-3xl text-[#1D1B19] mb-3">
        {cityName} is fresh paper.
      </h2>
      <p className="text-sm text-[#62564C] max-w-md mx-auto mb-6">
        No one's pinned a stall here yet. Be the first to set up shop and claim
        the territory.
      </p>
      <Link
        href="/join"
        className="group inline-flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.25em] px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        Claim the territory
        <ArrowUpRight
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </Link>
    </section>
  );
}
