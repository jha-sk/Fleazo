import Link from "next/link";
import Image from "next/image";
import { MapPin, Compass, Plane } from "lucide-react";
import { cities, businesses, creators } from "@/lib/data";

const CITY_META = {
  Jaipur: {
    code: "JAI",
    pin: "302001",
    nickname: "The Pink City",
    coords: "26.92° N · 75.79° E",
    est: "1727",
    accent: "#E26D5A", // terracotta / pink-city
    accentSoft: "#FCE6DF",
    ink: "#7A2E1F",
  },
  Jodhpur: {
    code: "JOD",
    pin: "342001",
    nickname: "The Blue City",
    coords: "26.23° N · 73.02° E",
    est: "1459",
    accent: "#3A5DA8", // indigo / blue-city
    accentSoft: "#DDE5F4",
    ink: "#1F2F5C",
  },
};

function listingsByCity(cityName) {
  const biz = businesses.filter((b) => b.city === cityName);
  const cre = creators.filter((c) => c.city === cityName);
  const topCats = [...new Set(biz.map((b) => b.category))].slice(0, 3);
  return { biz: biz.length, creators: cre.length, topCats };
}

function Postcard({ city, idx }) {
  const meta = CITY_META[city.name] || {
    code: city.name.slice(0, 3).toUpperCase(),
    pin: "------",
    nickname: "Destination",
    coords: "—",
    est: "—",
    accent: "#1D1B19",
    accentSoft: "#F4EFE5",
    ink: "#1D1B19",
  };
  const stats = listingsByCity(city.name);
  const tilt = idx % 2 === 0 ? -0.6 : 0.6;

  return (
    <Link
      href={`/city/${city.name}`}
      aria-label={`Explore ${city.name} — ${city.count} listings`}
      className="group relative block"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* postcard body */}
      <article
        className="relative bg-[#FBF6EB] border border-[#E6DCC2] overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_24px_50px_-20px_rgba(31,15,5,0.35)]"
        style={{ boxShadow: "0 10px 30px -18px rgba(31,15,5,0.3)" }}
      >
        {/* PAR AVION striped edge */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-2 z-20"
          style={{
            background:
              "repeating-linear-gradient(135deg, #E26D5A 0 10px, #FBF6EB 10px 18px, #3A5DA8 18px 28px, #FBF6EB 28px 36px)",
          }}
        />

        {/* photo */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={city.image}
            alt={city.name}
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover sepia-[0.18] saturate-[0.85] group-hover:sepia-0 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
          />
          {/* duotone wash that fades on hover */}
          <div
            aria-hidden="true"
            className="absolute inset-0 mix-blend-multiply opacity-50 group-hover:opacity-20 transition-opacity duration-700"
            style={{
              background: `linear-gradient(160deg, ${meta.accent} 0%, transparent 55%, ${meta.ink} 100%)`,
            }}
          />

          {/* round postage stamp — top-right, rotated */}
          <div
            aria-hidden="true"
            className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#FBF6EB]/95 border-2 border-dashed flex flex-col items-center justify-center text-center font-mono leading-none rotate-[-8deg] shadow-md"
            style={{ borderColor: meta.accent, color: meta.ink }}
          >
            <span className="text-[7px] tracking-[0.18em] uppercase font-black opacity-70">
              Rajasthan · IN
            </span>
            <span className="text-[22px] font-black tracking-tight mt-0.5">
              {meta.code}
            </span>
            <span className="text-[7px] tracking-[0.18em] uppercase font-black opacity-70 mt-0.5">
              EST. {meta.est}
            </span>
          </div>

          {/* postmark — diagonal slash */}
          <div
            aria-hidden="true"
            className="absolute top-6 left-[-30px] rotate-[-8deg] px-10 py-1 border-y-2 border-dashed text-[9px] font-mono uppercase tracking-[0.3em] font-black"
            style={{
              borderColor: meta.accent,
              color: meta.accent,
              background: "rgba(251,246,235,0.92)",
            }}
          >
            {meta.coords}
          </div>

          {/* compass watermark */}
          <Compass
            aria-hidden="true"
            className="absolute bottom-4 left-4 w-8 h-8 text-white/70 group-hover:rotate-90 transition-transform duration-700"
          />
        </div>

        {/* perforated divider */}
        <div
          aria-hidden="true"
          className="relative h-3"
          style={{
            background: `radial-gradient(circle at 8px 50%, #FBF6EB 4px, transparent 4.5px) 0 50% / 16px 100% repeat-x, ${meta.accentSoft}`,
          }}
        />

        {/* caption / address block */}
        <div className="px-6 pt-5 pb-6 bg-[#FBF6EB] grid grid-cols-12 gap-3">
          {/* left: handwriting */}
          <div className="col-span-7">
            <p
              className="text-[10px] font-mono uppercase tracking-[0.3em] font-black"
              style={{ color: meta.accent }}
            >
              {meta.nickname}
            </p>
            <h4
              className="mt-1 font-serif font-black italic text-4xl sm:text-5xl tracking-tight leading-[0.95]"
              style={{ color: meta.ink }}
            >
              {city.name}.
            </h4>
            <p className="mt-2 text-[11px] font-mono text-[#6b5d4e]">
              {stats.topCats.length > 0
                ? stats.topCats.join(" · ").toLowerCase()
                : "more arriving soon"}
            </p>
          </div>

          {/* right: stats column */}
          <div className="col-span-5 flex flex-col items-end justify-between">
            <div
              className="text-right font-mono"
              style={{ color: meta.ink }}
            >
              <span className="block text-[9px] uppercase tracking-[0.24em] opacity-60 font-black">
                Listings
              </span>
              <span className="block font-serif font-black text-5xl leading-none mt-0.5">
                {city.count}
              </span>
            </div>
            <div className="text-right text-[9px] font-mono uppercase tracking-[0.2em] text-[#8A7F73] mt-2">
              <span className="block">{stats.biz} vendors</span>
              <span className="block">{stats.creators} voices</span>
            </div>
          </div>

          {/* full-width CTA bar */}
          <div className="col-span-12 mt-4 pt-4 border-t border-dashed border-[#D7CBA8] flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#8A7F73]">
              PIN · {meta.pin}
            </span>
            <span
              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] font-black transition-all"
              style={{ color: meta.accent }}
            >
              Explore the route
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </span>
          </div>
        </div>

        {/* corner cancel stamp — appears on hover */}
        <div
          aria-hidden="true"
          className="absolute bottom-24 right-6 opacity-0 group-hover:opacity-100 rotate-[-12deg] border-2 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] font-black transition-all duration-500 group-hover:rotate-[-6deg]"
          style={{
            borderColor: meta.accent,
            color: meta.accent,
            background: "rgba(251,246,235,0.92)",
          }}
        >
          Visited
        </div>
      </article>
    </Link>
  );
}

export function CityPostcardsSection() {
  return (
    <section
      aria-labelledby="cities-title"
      className="relative px-5 md:px-8 mb-16 py-14 overflow-hidden"
    >
      {/* decorative dashed flight path */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 220"
        className="absolute inset-x-0 top-24 w-full h-40 opacity-30 pointer-events-none"
        fill="none"
        stroke="#C85A32"
        strokeWidth="1.5"
        strokeDasharray="6 8"
      >
        <path d="M40 160 C 260 30, 540 200, 760 80 S 1100 60, 1180 140" />
      </svg>
      <Plane
        aria-hidden="true"
        className="absolute top-20 right-[8%] w-6 h-6 text-[#C85A32] rotate-[20deg] opacity-60"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1D1B19] text-[#FBF6EB]">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <p className="text-[11px] font-mono tracking-[0.32em] uppercase text-[#1D1B19] font-black">
                Routes · Rajasthan
              </p>
            </div>
            <h3
              id="cities-title"
              className="font-serif font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#1D1B19] leading-[0.9]"
            >
              Mailed from{" "}
              <span className="italic relative">
                two cities.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #E26D5A 0%, #3A5DA8 100%)",
                  }}
                />
              </span>
            </h3>
            <p className="mt-5 text-sm text-[#6b5d4e] font-mono max-w-md">
              Postcards from the desert — pick a city, pick a stall, pick a friend.
            </p>
          </div>

          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#8A7F73] md:text-right">
            More routes opening
            <br className="hidden md:block" /> · Bikaner · Udaipur · Pushkar ·
          </p>
        </header>

        {/* postcards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {cities.map((city, idx) => (
            <Postcard key={city.name} city={city} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
