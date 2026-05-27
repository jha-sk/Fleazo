<div align="center">

# Fleazo

**An AI-Ready Local Directory & Discovery Network**

*Connecting verified businesses, creators, and freelancers across India*  
*Zero commissions · Zero ads · Zero platform cuts*

<br>

[![Next.js](https://img.shields.io/badge/Next.js-14.2-0F0F0F?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=0F0F0F)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Commissions](https://img.shields.io/badge/Commissions-0%25-C85A32?style=for-the-badge)](#)
[![AI Ready](https://img.shields.io/badge/SEO-AI--Ready-D4AF37?style=for-the-badge)](#)

</div>

<br>

---

## <img src=".github/icons/palette.svg" width="22" align="top"> &nbsp; Visual Identity & Design System

![Fleazo Design System](public/images/image.png)

The visual framework merges an editorial, tactile flea-market aesthetic with high-performance modern web tech. No cold corporate grids — instead, washi-tape panels, polaroid pinboards, and perforated ticket details.

> [!NOTE]
> **Design Philosophy** — Every surface is crafted to feel like a curated print artifact. Glassmorphism panels, washi-tape header accents, polaroid pinboard grids for local voices, and perforated tear-off edges on verified quote cards.

| Token | Value | Usage |
|:---|:---|:---|
| **Background** | `#FDFBF7` | Warm sand-cream canvas across all pages |
| **Ink** | `#0F0F0F` | Primary text — deep charcoal (WCAG AA) |
| **Terracotta** | `#C85A32` | Verification badges, CTA borders, active states |
| **Gold** | `#D4AF37` | Hero accents, timeline numbers, premium tags |
| **Muted** | `#8A7F73` | Secondary labels, metadata, timestamps |
| **Border** | `#EBE4D5` | Card outlines, dividers, subtle frames |

**Typography** — Serif headlines (`Playfair Display`), sans-serif body (`Outfit`), monospace tracking for technical labels.

---

## <img src=".github/icons/settings.svg" width="22" align="top"> &nbsp; Core Features

### <img src=".github/icons/chat.svg" width="18" align="top"> &nbsp; 1. Zero-Commission WhatsApp Briefs

No booking portals. No platform inboxes. When a customer finds a listing, they tap and land directly in a WhatsApp conversation with the vendor. Zero fees. Zero take-rates. The vendor keeps every rupee.

> [!IMPORTANT]
> **0% commission. Forever.** — Fleazo never takes a cut from any transaction, booking, or invoice between the customer and the vendor. The directory is free to list, free to discover, and free to transact.

### <img src=".github/icons/bot.svg" width="18" align="top"> &nbsp; 2. Client-Side AI Assistant

> [!WARNING]
> **No API keys required.** This assistant runs entirely in the browser — zero network calls, zero latency, zero third-party dependencies. All matching happens client-side against the local data seed.

A fully in-browser search agent (`lib/assistant.js`) that matches natural language queries to the directory:

```
User: "rooftop dining"        →  Tapri Central, Bar Palladio, Indique
User: "wellness fitness"      →  Sky Fitness Club, Re-Shape Nutrition
User: "mandala artist jaipur" →  Sakshi Jain
```

How it works under the hood:
- **Alias Engine** — Maps colloquial phrases to data tags (`"eat"` → `food`, `"saas"` → `software`)
- **Weighted Scorer** — Name match (5pts), category match (4pts), general haystack (1pt), tier boost (+1pt for Top Tier)
- **City & Kind Filters** — Auto-detects city names and entity types from the query

### <img src=".github/icons/bolt.svg" width="18" align="top"> &nbsp; 3. AI-Crawler SEO

Every page uses semantic HTML5 so AI search engines (ChatGPT, Perplexity, Gemini) can index profiles cleanly. Dynamic routes at `/profile/[slug]` ensure structured answers for queries like *"best mandala artist in Jaipur."*

> [!CAUTION]
> **This is not traditional SEO.** Fleazo profiles are structured specifically for LLM crawlers — so when someone asks ChatGPT or Perplexity *"best cafe in Jaipur"*, the answer comes from Fleazo's verified data, not from paid ads or review-gamed platforms.

---

## <img src=".github/icons/folder.svg" width="22" align="top"> &nbsp; Project Structure

<details>
<summary><img src=".github/icons/folder.svg" width="16" align="top"> &nbsp; <strong>App Routes</strong> — Next.js App Router pages</summary>

```
app/
├── about/                  Brand values and origin story
├── category/[slug]/        Dynamic category hubs (e.g., /category/cafe)
├── city/[name]/            Dynamic city pages (e.g., /city/jaipur)
├── contact/                Support and custom inquiries
├── faq/                    Interactive accordion FAQs
├── for-business/           Business onboarding funnel
├── for-creators/           Creator onboarding funnel
├── for-customers/          Customer value proposition page
├── join/                   Registration flow
├── profile/[slug]/         Rich profiles for businesses & creators
├── trust/                  Verification documentation
├── globals.css             Design tokens, animations, glass utilities
├── layout.js               Root layout with fonts & global providers
├── page.js                 Landing page — hero, stalls, voices, stamps
└── not-found.js            Custom 404
```

</details>

<details>
<summary><img src=".github/icons/package.svg" width="16" align="top"> &nbsp; <strong>Components</strong> — React component catalog</summary>

```
components/
├── ui/
│   ├── badge.jsx           Styled status badges
│   ├── button.jsx          Variant-driven button system
│   ├── card.jsx            Base card with hover states
│   └── input.jsx           Accessible input fields
├── AssistantWidget.jsx     Floating AI chat panel
├── AudienceLanding.jsx     Configurable landing template (business/creator/customer)
├── BusinessCard.jsx        Verified vendor card with tier indicator
├── CategoryStamps.jsx      Browsable category grid
├── CityPostcards.jsx       Visual city discovery panels
├── CreatorCard.jsx         Creator profile card
├── CharterSection.jsx      Community charter callout
├── EcosystemSection.jsx    Platform value visualization
├── Footer.jsx              Multi-column semantic footer
├── GalleryMarquee.jsx      Auto-scrolling image ribbon
├── Header.jsx              Scroll-aware glass navigation bar
├── HeaderSearchBar.jsx     Inline header search input
├── Hero.jsx                Typewriter hero with animated search
├── JoinDialog.jsx          Modal for listing verification requests
├── JoinTrigger.jsx         CTA button wired to the join dialog
├── LocalVoicesSection.jsx  Polaroid-style community showcase
├── MobileNav.jsx           Bottom tab bar for mobile
└── SearchBar.jsx           Full search interface
```

</details>

<details>
<summary><img src=".github/icons/terminal.svg" width="16" align="top"> &nbsp; <strong>Lib</strong> — Utilities and data layer</summary>

```
lib/
├── assistant.js                  Tokenizer, alias engine, scorer, response builder
├── data.js                       17 businesses + 21 creators seed data
├── useTypewriterPlaceholder.js   Typewriter animation hook
└── utils.js                      cn() helper (clsx + tailwind-merge)
```

</details>

---

## <img src=".github/icons/rocket.svg" width="22" align="top"> &nbsp; Getting Started

> [!TIP]
> **Quick start** — Clone → `npm install` → `npm run dev` → open `localhost:3000`. That's it. No environment variables, no database setup, no API keys needed.

**Prerequisites** — Node.js v18+ and npm.

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

Open **http://localhost:3000** after running `npm run dev`.

---

## <img src=".github/icons/layers.svg" width="22" align="top"> &nbsp; Tech Stack

| Layer | Technology | Details |
|:---|:---|:---|
| **Framework** | Next.js 14 | App Router with optimized metadata and static generation |
| **UI** | React 18 | Client & server components |
| **Styling** | Tailwind CSS 3 | Custom design tokens + vanilla CSS utilities |
| **Icons** | Lucide React | Consistent 24×24 stroke icon set |
| **Fonts** | Google Fonts | `Outfit` (sans) and `Playfair Display` (serif) via `next/font` |
| **Utilities** | clsx + tailwind-merge | Conditional className composition |

---

> [!TIP]
> Try the built-in AI Assistant on the landing page — ask it *"cafes in Jaipur"* or *"wedding photographers"* and watch it score and rank results instantly, entirely in-browser.