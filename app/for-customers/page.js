"use client";

import {
  BadgeCheck,
  Compass,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AudienceLanding } from "@/components/AudienceLanding";

export default function ForCustomersPage() {
  return (
    <AudienceLanding
      eyebrow="For Customers · B2C"
      headline="Skip the fake reviews."
      accent="Find the real stall."
      sub="Every cafe, mechanic, boutique, photographer, and tailor on Fleazo is hand-verified. No paid placements. No inflated ratings. Just real, local, and one tap from a WhatsApp chat."
      ctaPrimary={{ label: "Search Fleazo", href: "/#market-stalls" }}
      ctaSecondary={{ label: "Browse by city", href: "/#cities-title" }}
      stats={[
        { value: "100%", label: "Hand-verified" },
        { value: "0", label: "Paid placements" },
        { value: "1-tap", label: "WhatsApp chat" },
      ]}
      pillarSubtitle="Why use Fleazo"
      pillarTitle="A directory that earns your trust."
      benefits={[
        {
          icon: ShieldCheck,
          title: "Hand-verified listings",
          desc: "Real humans check every shop, artist, and creator before they go live. If we can't verify it, we don't list it. Simple.",
        },
        {
          icon: BadgeCheck,
          title: "No fake reviews",
          desc: "We don't run a star-rating economy that businesses pay to game. Trust scores come from verification — not paid five-star farms.",
        },
        {
          icon: MessageSquare,
          title: "WhatsApp, not call centers",
          desc: "Tap once, you're chatting with the owner or the artist directly. No phone tree, no booking platform skim, no hold music.",
        },
        {
          icon: Search,
          title: "Search like you ask AI",
          desc: "'Best kachori in Jaipur', 'mandala artist for a brand shoot'. Natural-language queries surface the right local stall.",
        },
        {
          icon: Compass,
          title: "Browse by city",
          desc: "Jaipur, Jodhpur, Udaipur — each city is a curated postcard of local directories. Pick a place, explore the stalls.",
        },
        {
          icon: Sparkles,
          title: "Always free",
          desc: "No login. No paywall. No upsell. Use Fleazo as much as you want — the only cost is your taste in chai.",
        },
      ]}
      stepsSubtitle="How to use it"
      stepsTitle="From search to shop in three steps."
      steps={[
        {
          label: "Search or browse",
          desc: "Type what you want, or pick a city. Filter by category — cafe, fashion, mechanic, artist.",
        },
        {
          label: "Read the verified profile",
          desc: "Every listing carries a verification stamp. Read the blurb, see the work, check the city.",
        },
        {
          label: "Tap WhatsApp",
          desc: "The chat opens with the owner directly. Place an order, book a slot, ask a question — your way.",
        },
      ]}
      quote={{
        quote:
          "I asked Fleazo for a wedding photographer in Jodhpur. Twelve minutes later I'd seen three portfolios and was on WhatsApp with one of them.",
        attribution: "A customer in Jaipur",
        role: "Wedding planner",
      }}
      closer={{
        title: "Found something good?",
        accent: "Tap chat.",
        sub: "Every listing has a direct WhatsApp link. No accounts. No friction. Just talk to a real human, in your language.",
        cta: { label: "Search Fleazo", href: "/#market-stalls" },
      }}
    />
  );
}
