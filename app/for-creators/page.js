"use client";

import {
  Brush,
  Camera,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AudienceLanding } from "@/components/AudienceLanding";

export default function ForCreatorsPage() {
  return (
    <AudienceLanding
      eyebrow="For Creators & Artists · D2C"
      headline="Your portfolio belongs to"
      accent="you."
      sub="A professional, discoverable home for makeup artists, models, photographers, illustrators, and freelancers. No algorithm. No follower count. Just your craft, found by the right brand."
      ctaPrimary={{ label: "Create Portfolio", dialog: true }}
      ctaSecondary={{ label: "See local voices", href: "/#local-voices" }}
      stats={[
        { value: "0%", label: "Platform cut" },
        { value: "1", label: "Place that's yours" },
        { value: "∞", label: "Free forever" },
      ]}
      pillarSubtitle="What you get"
      pillarTitle="A home outside the algorithm."
      benefits={[
        {
          icon: Layers,
          title: "Portfolio that ranks",
          desc: "A schema-rich profile that Google and AI search can read. When brands ask 'best mandala artist in Jaipur', your work shows up first.",
        },
        {
          icon: MessageSquare,
          title: "Direct WhatsApp briefs",
          desc: "Clients tap, you chat. No DM purgatory, no platform inbox, no commission shaved off your invoice.",
        },
        {
          icon: ShieldCheck,
          title: "Verified Creator badge",
          desc: "We check every portfolio. Real artist, real work, real reviews. Clients trust the badge — that's the entire pitch.",
        },
        {
          icon: Camera,
          title: "Show your range",
          desc: "Upload a body of work, not a feed. Brands and agencies can see your craft on one page — without scrolling past lifestyle posts.",
        },
        {
          icon: Sparkles,
          title: "Network effect, locally",
          desc: "Stylists meet photographers. Models find labels. Illustrators get briefs from cafes in the same directory. Discovery flows both ways.",
        },
        {
          icon: Brush,
          title: "Free, forever",
          desc: "No subscription. No paid placement. We don't take a percentage of your work — we just help people find it.",
        },
      ]}
      stepsSubtitle="How it works"
      stepsTitle="From submission to shoot in twenty-four hours."
      steps={[
        {
          label: "Submit your craft",
          desc: "Stage name, WhatsApp, city, what you do. One sample link if you have one — we'll fetch the rest.",
        },
        {
          label: "We verify the work",
          desc: "Humans review every portfolio. We confirm you're you, then we polish the page so it reads professionally.",
        },
        {
          label: "Briefs land in WhatsApp",
          desc: "Brands and clients message you directly through the listing. Your number, your terms, your invoice.",
        },
      ]}
      quote={{
        quote:
          "Three commissions came in the first week — two from out of state. I didn't have to post once. The page just sits there, working.",
        attribution: "Sakshi Jain",
        role: "Mandala Artist · Jaipur",
      }}
      closer={{
        title: "Your craft. Your page.",
        accent: "No cut.",
        sub: "Three minutes to publish. Verified within twenty-four hours. Yours forever — at zero commission.",
        cta: { label: "Create Portfolio", dialog: true },
      }}
    />
  );
}
