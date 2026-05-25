"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { businesses, creators } from "@/lib/data";
import { useTypewriterPlaceholder } from "@/lib/useTypewriterPlaceholder";

const PLACEHOLDER_QUERIES = [
  "Best kachori, Jaipur",
  "Wedding photographer",
  "Heritage cafe",
  "Mandala artist",
  "Italian dinner",
  "Single-origin coffee",
];

export function HeaderSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
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
      .filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q) ||
          e.city.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [pool, query]);

  function submit() {
    if (results[0]) router.push(`/profile/${results[0].slug}`);
  }

  return (
    <div
      className="relative w-full max-w-md"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
          setFocused(false);
        }
      }}
    >
      <div
        className={`flex items-center bg-white rounded-full border transition-all duration-300 ${
          focused
            ? "border-[#D4AF37] shadow-[0_4px_18px_-6px_rgba(212,175,55,0.45)]"
            : "border-[#EBE4D5] shadow-sm hover:border-[#D4AF37]/60"
        }`}
      >
        <div className="flex items-center pl-4 pr-2.5">
          <Search
            size={14}
            className={`transition-colors ${
              focused ? "text-[#D4AF37]" : "text-[#8A7F73]"
            }`}
            aria-hidden="true"
          />
        </div>

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
          className="flex-1 bg-transparent text-sm font-medium text-[#1D1B19] py-2 outline-none focus:shadow-none focus-visible:shadow-none placeholder:text-[#A89B8D] placeholder:font-normal"
        />

        <button
          type="button"
          onClick={submit}
          aria-label="Search"
          className="group m-1 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white shadow-sm hover:shadow-md hover:scale-105 active:scale-100 transition-all"
        >
          <ArrowRight
            size={13}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>

      {open && results.length > 0 && (
        <ul
          role="listbox"
          aria-label="Search suggestions"
          className="absolute top-full mt-2 inset-x-0 bg-white border border-[#EBE4D5] rounded-2xl shadow-[0_20px_50px_-12px_rgba(45,40,37,0.25)] overflow-hidden z-50"
        >
          <li className="px-4 py-2 bg-[#FCFAF7] border-b border-[#EBE4D5] flex items-center gap-2">
            <Sparkles size={10} className="text-[#D4AF37]" />
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
                className="w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-[#FAF6EC] transition-colors group"
              >
                <span className="flex flex-col min-w-0">
                  <span className="font-bold text-sm text-[#1D1B19] truncate">
                    {r.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8A7F73] mt-0.5 flex items-center gap-1.5">
                    <span>{r.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>{r.city}</span>
                  </span>
                </span>
                <ArrowRight
                  size={12}
                  className="text-[#C85A32] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-3"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query && results.length === 0 && (
        <div className="absolute top-full mt-2 inset-x-0 bg-white border border-[#EBE4D5] rounded-2xl shadow-[0_20px_50px_-12px_rgba(45,40,37,0.25)] z-50 px-4 py-3 text-xs text-[#62564C]">
          No matches for{" "}
          <span className="font-bold text-[#1D1B19]">&ldquo;{query}&rdquo;</span>
          . Try{" "}
          <span className="font-bold text-[#C85A32]">Cafe</span> or{" "}
          <span className="font-bold text-[#C85A32]">Jaipur</span>.
        </div>
      )}
    </div>
  );
}
