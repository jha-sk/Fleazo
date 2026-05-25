"use client";

import {
  BadgeCheck,
  MessageSquare,
  Search,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AudienceLanding } from "@/components/AudienceLanding";

export default function ForBusinessPage() {
  return (
    <AudienceLanding
      eyebrow="For Business Owners · B2B"
      headline="Stop renting Instagram."
      accent="Own your storefront."
      sub="A permanent digital home that ranks on Google, surfaces in AI search, and routes verified buyers straight to your WhatsApp. No commissions, no middlemen — ever."
      ctaPrimary={{ label: "Get Listed Free", dialog: true }}
      ctaSecondary={{ label: "See market stalls", href: "/#market-stalls" }}
      stats={[
        { value: "0%", label: "Commissions" },
        { value: "24h", label: "Time to live" },
        { value: "∞", label: "Free forever" },
      ]}
      pillarSubtitle="What you get"
      pillarTitle="Built for being found."
      benefits={[
        {
          icon: Search,
          title: "Found on Google & AI search",
          desc: "Schema-rich profiles indexed for Google, ChatGPT, Perplexity, and Gemini. Show up when buyers ask AI for a cafe, a tailor, a mechanic.",
        },
        {
          icon: MessageSquare,
          title: "Direct WhatsApp leads",
          desc: "One tap and customers are chatting with you — not with us. No third-party inbox, no commission, no lost messages.",
        },
        {
          icon: ShieldCheck,
          title: "Verified trust badge",
          desc: "Every listing is checked by hand. Real shop. Real owner. A trust score buyers can rely on — no paid-for fake reviews.",
        },
        {
          icon: Zap,
          title: "Free, forever",
          desc: "No setup fee. No subscription. No upsell. Verified members stay listed forever — that's the whole deal.",
        },
        {
          icon: TrendingUp,
          title: "Discovery network effect",
          desc: "The baker meets the photographer. The artist finds a buyer. One local ecosystem fostering collaborative growth across Fleazo.",
        },
        {
          icon: BadgeCheck,
          title: "Hand-curated catalog",
          desc: "We turn away listings we can't verify. The quality of who you're listed alongside is the quality of who finds you.",
        },
      ]}
      stepsSubtitle="How it works"
      stepsTitle="Three minutes to a permanent profile."
      steps={[
        {
          label: "Submit your details",
          desc: "Name, WhatsApp, city, category. Optional one-liner — we'll polish it before publishing.",
        },
        {
          label: "We verify by hand",
          desc: "Real humans check every listing within 24 hours — no automated scrape, no spam slots.",
        },
        {
          label: "Go live forever",
          desc: "Your profile is indexed by Google + AI search. WhatsApp leads land directly in your phone.",
        },
      ]}
      quote={{
        quote:
          "We used to chase Instagram likes. Now customers find Tapri on Google when they ask 'best chai Jaipur' — and the WhatsApp lights up by 9am.",
        attribution: "Tapri Central",
        role: "Cafe · Jaipur",
      }}
      closer={{
        title: "Your stall is waiting.",
        accent: "Claim it.",
        sub: "Three minutes to publish. Verified within twenty-four hours. Yours forever — at zero commission.",
        cta: { label: "Get Listed Free", dialog: true },
      }}
    />
  );
}
