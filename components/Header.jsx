"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useJoinDialog } from "@/components/JoinDialog";
import { HeaderSearchBar } from "@/components/HeaderSearchBar";

export function Header() {
  const { open } = useJoinDialog();

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass h-16 shadow-1">
      <div className="max-w-7xl mx-auto h-full px-5 flex items-center gap-4 md:gap-6">
        <Link
          href="/"
          aria-label="Fleazo home"
          className="flex items-center gap-2 group shrink-0"
        >
          <span className="w-8 h-8 bg-[var(--color-text-primary)] text-white rounded-xs flex items-center justify-center font-serif font-bold italic">
            f.
          </span>
          <span className="hidden sm:inline font-serif font-bold text-xl tracking-tight">
            Fleazo
          </span>
        </Link>

        <div className="flex-1 flex justify-center min-w-0">
          <HeaderSearchBar />
        </div>

        <button
          type="button"
          onClick={open}
          className="md:hidden shrink-0 bg-[var(--color-text-primary)] text-white px-3 py-2 rounded-sm text-xs font-bold shadow-2 hover:bg-white hover:text-[var(--color-text-primary)] transition-colors duration-instant"
        >
          Join
        </button>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider shrink-0"
        >
          <Link
            href="/"
            className="text-[var(--color-text-primary)] hover:opacity-70 transition-opacity duration-instant"
          >
            The Market
          </Link>
          <Link
            href="/about"
            className="text-[var(--color-text-primary)] hover:opacity-70 transition-opacity duration-instant"
          >
            Why Join
          </Link>
          <Link
            href="/faq"
            className="text-[var(--color-text-primary)] hover:opacity-70 transition-opacity duration-instant"
          >
            FAQ
          </Link>
          <Button size="md" variant="primary" onClick={open}>
            Join Free
          </Button>
        </nav>
      </div>
    </header>
  );
}
