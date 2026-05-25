"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search, ArrowRight, Sparkles } from "lucide-react";
import { businesses, creators } from "@/lib/data";
import { useTypewriterPlaceholder } from "@/lib/useTypewriterPlaceholder";

const cityOptions = ["All", "Jaipur", "Jodhpur"];

const PLACEHOLDER_QUERIES = [
  "Best kachori in Jaipur",
  "Wedding photographer in Udaipur",
  "Heritage cafe with a terrace",
  "Mandala artist for a brand shoot",
  "Single-origin coffee, Jodhpur",
  "Italian dinner in a haveli",
  "Fashion model for a campaign",
  "Boutique with handloom sarees",
];

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);

  const placeholder = useTypewriterPlaceholder(PLACEHOLDER_QUERIES, {
    active: !query && !focused,
  });

  const pool = useMemo(() => [...businesses, ...creators], []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return pool
      .filter((e) => {
        const cityOk = city === "All" || e.city === city;
        return (
          cityOk &&
          (e.name.toLowerCase().includes(q) ||
            e.category.toLowerCase().includes(q) ||
            e.city.toLowerCase().includes(q))
        );
      })
      .slice(0, 6);
  }, [pool, query, city]);

  function submit() {
    if (results[0]) router.push(`/profile/${results[0].slug}`);
  }

  return (
    <div
      className="relative w-full"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
          setFocused(false);
        }
      }}
    >
      <div
        className={`relative flex items-center bg-white rounded-full border transition-all duration-300 ${
          focused
            ? "border-[#D4AF37] shadow-[0_8px_32px_-8px_rgba(212,175,55,0.35)]"
            : "border-[#EBE4D5] shadow-[0_4px_20px_-8px_rgba(45,40,37,0.18)] hover:border-[#D4AF37]/60"
        }`}
      >
        {/* City selector */}
        <label className="hidden md:flex items-center gap-2 pl-5 pr-4 py-3.5 border-r border-[#EBE4D5] cursor-pointer group">
          <MapPin
            size={15}
            className="text-[#C85A32] group-hover:scale-110 transition-transform"
            aria-hidden="true"
          />
          <span className="sr-only">City</span>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent text-xs font-bold uppercase tracking-wider text-[#2D2825] outline-none cursor-pointer appearance-none pr-1"
          >
            {cityOptions.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All Cities" : c}
              </option>
            ))}
          </select>
        </label>

        {/* Search icon + input */}
        <div className="flex-1 flex items-center pl-5 md:pl-4 pr-2">
          <Search
            size={16}
            className={`mr-3 transition-colors ${
              focused ? "text-[#D4AF37]" : "text-[#8A7F73]"
            }`}
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => {
              setOpen(true);
              setFocused(true);
            }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder={placeholder ? `${placeholder}…` : "Search Fleazo…"}
            aria-label="Search businesses and creators"
            autoComplete="off"
            className="flex-1 bg-transparent text-sm font-medium text-[#1D1B19] py-3.5 outline-none focus:shadow-none focus-visible:shadow-none placeholder:text-[#A89B8D] placeholder:font-normal"
          />
        </div>

        {/* Submit pill */}
        <button
          type="button"
          onClick={submit}
          aria-label="Search"
          className="group relative m-1.5 flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all"
        >
          <span className="hidden sm:inline">Search</span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>

      {/* Suggestions dropdown */}
      {open && results.length > 0 && (
        <ul
          role="listbox"
          aria-label="Search suggestions"
          className="absolute top-full mt-3 inset-x-0 bg-white border border-[#EBE4D5] rounded-2xl shadow-[0_20px_50px_-12px_rgba(45,40,37,0.25)] overflow-hidden z-50"
        >
          <li className="px-5 py-2 bg-[#FCFAF7] border-b border-[#EBE4D5] flex items-center gap-2">
            <Sparkles size={11} className="text-[#D4AF37]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7F73] font-bold">
              Top matches
            </span>
          </li>
          {results.map((r) => (
            <li key={r.slug}>
              <button
                type="button"
                role="option"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => router.push(`/profile/${r.slug}`)}
                className="w-full text-left px-5 py-3 flex items-center justify-between hover:bg-[#FAF6EC] transition-colors group"
              >
                <span className="flex flex-col min-w-0">
                  <span className="font-bold text-sm text-[#1D1B19] truncate">
                    {r.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A7F73] mt-0.5 flex items-center gap-1.5">
                    <span>{r.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>{r.city}</span>
                  </span>
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C85A32] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-3"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query && results.length === 0 && (
        <div className="absolute top-full mt-3 inset-x-0 bg-white border border-[#EBE4D5] rounded-2xl shadow-[0_20px_50px_-12px_rgba(45,40,37,0.25)] z-50 px-5 py-4 text-sm text-[#62564C] font-normal">
          No matches for{" "}
          <span className="font-bold text-[#1D1B19]">&ldquo;{query}&rdquo;</span>
          . Try a category like{" "}
          <span className="font-bold text-[#C85A32]">Cafe</span> or{" "}
          <span className="font-bold text-[#C85A32]">Fashion</span>.
        </div>
      )}
    </div>
  );
}
