# Fleazo 🌟

> **Fleazo** is a premium, AI-ready local directory and discovery network that connects human-vetted businesses, creators, and artists across India directly with their audience — with **zero commissions**, **zero ads**, and **no platform cuts**.

Designed with a warm, editorial, and tactile aesthetic inspired by classical flea markets and premium print media, Fleazo offers a schema-rich digital registry optimized for modern SEO, AI search engines (like ChatGPT, Perplexity, and Gemini), and direct WhatsApp-based business conversations.

---

## 🎨 Visual Identity & Design System

Fleazo is crafted to feel tactile, interactive, and alive. It rejects generic modern corporate layouts in favor of an **editorial, heritage print aesthetic** combined with modern animations and micro-interactions.

### 🎨 Color Palette
- **Primary Background (`#FDFBF7`)**: A warm, soothing sand-cream background that provides an analog, paper-like canvas.
- **Primary Text (`#0F0F0F`)**: Deep ink-charcoal text ensuring elegant contrast and readability (WCAG AA compliant).
- **Secondary Text (`#6B7280`) & Tertiary (`#9CA3AF`)**: Understated neutral tones for metadata and secondary labels.
- **Accents**: 
  - **Terracotta / Coral (`#C85A32`)**: Burnt earthy orange used for verification tags, focus highlights, and active vendor labels.
  - **Rajput Gold (`#D4AF37`)**: A royal gold color reserved for hero script accents, timeline step numbers, and premium badges.

### ✍️ Typography
- **Serif (`Playfair Display`)**: Editorial headlines, quote cards, and dramatic hero statements.
- **Sans (`Outfit`)**: Clean, circular modern sans-serif utilized for buttons, navigation links, and body content.
- **Mono (`monospace` fallback)**: Spaced uppercase tracking for high-end technical labels and counts.

### ✨ Dynamic Design & Glassmorphism
- **Tactile Details**: Utilizes **washi tape headers**, **polaroid pinboard grids** for local voice showcases, and **perforated tear-off paper edges** for verified quote cards.
- **Frosted Glassmorphism**: Utilizes highly saturated frosted-glass panels (`.glass-frosted`) backed by native browser sat-blur and smooth fallbacks.
- **Keyboard accessibility (WCAG 2.2 AA)**: Seamless keyboard-first focus indicators (`*:focus-visible`) utilizing a dual-layer white-and-gold outline ring.

---

## ⚙️ Core Technical Features

### 1. 🤖 Client-Side AI Assistant (`lib/assistant.js`)
Fleazo features a zero-network, high-performance client-side directory assistant widget:
- **Intelligent Tokenizer**: Sanitizes natural queries, breaks them down into search tokens, and flags geographical modifiers.
- **Semantic Mapping (Alias Engine)**: Maps casual colloquial expressions (e.g., *"eat"*, *"rooftop"*, *"saas"*, *"wellness"*) directly to database tags (*"food"*, *"rooftop"*, *"software"*, *"nutrition"*).
- **Tier-based Weighted Scoring**: Employs a smart scoring matrix giving priority weight to matching entity names (5pts) and categories (4pts), with an additional slight tier boost (+1pt) for verified *Top Tier* or popular profiles.

### 2. ⚡ Schema-Rich SEO & AI Crawlability
- Built on Next.js 14, every page is rendered semantic and clean to ensure that artificial intelligence crawlers (e.g., OpenAI, Perplexity, Google Bard/Gemini) can index profiles perfectly.
- Dynamic profile rendering at `/profile/[slug]` ensures proper microdata structure so that questions like *"best mandala artist in Jaipur"* yield Fleazo profiles as immediate direct answers.

### 3. 💬 WhatsApp Brief Delivery
- Replaces traditional platform inboxes and booking portals with a single-click direct messaging link.
- Customers and brands communicate **directly** on their own terms.
- Ensures **zero transaction fees** or platform take-rates for verified local creators.

---

## 📂 Project Directory Structure

The project utilizes Next.js **App Router** for clean dynamic nested pathways:

```markdown
Fleazo/
├── app/
│   ├── about/              # Brand values and origin details
│   ├── category/
│   │   └── [slug]/         # Dynamic categories (e.g., /category/cafe)
│   ├── city/
│   │   └── [name]/         # Dynamic city hubs (e.g., /city/jaipur)
│   ├── contact/            # Support and custom inquiries
│   ├── faq/                # Interactive frequently asked questions
│   ├── for-business/       # Business onboarding page (AudienceLanding)
│   ├── for-creators/       # Creator onboarding page (AudienceLanding)
│   ├── for-customers/      # Customer-facing value page (AudienceLanding)
│   ├── profile/
│   │   └── [slug]/         # Rich detailed profiles for all creators/businesses
│   ├── trust/              # Verification process documentation
│   ├── globals.css         # Custom utility classes, animations & design tokens
│   ├── layout.js           # Core wrapper: Fonts, providers & Global Nav
│   ├── page.js             # Main landing: Hero, verified vendor stalls, pinboard
│   └── not-found.js        # Custom 404 fallback page
│
├── components/
│   ├── ui/                 # Shadcn-inspired reusable custom building blocks
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   └── input.jsx
│   ├── AssistantWidget.jsx # AI directory chat assistant UI
│   ├── AudienceLanding.jsx # Dynamic template for business/creator/customer funnels
│   ├── BusinessCard.jsx    # Burnt-accent display card for local entities
│   ├── CategoryStamps.jsx  # Styled custom categorical grid
│   ├── CityPostcards.jsx   # Interactive image panels for active cities
│   ├── Footer.jsx          # Multi-column semantic footer
│   ├── Header.jsx          # Scroll-aware navigation bar
│   ├── Hero.jsx            # Dynamic headline banner with typewriter inputs
│   └── JoinDialog.jsx      # Portal dialog for requesting listing verification
│
├── lib/
│   ├── assistant.js        # Client-side tokenizer, search scorer, and response builder
│   ├── data.js             # Seed database containing verified entities and helpers
│   ├── utils.js            # General helper functions (cn utility, tailwind-merge)
│   └── useTypewriterPlaceholder.js
│
└── public/                 # Static media: Local vendor photos, icons, and postcards
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js** (v18.x or above) and **npm** installed.

### 📥 Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 💻 Local Development
Launch the local development environment:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 🏗️ Build & Production Deployment
Compile a highly optimized production bundle:
```bash
npm run build
```

To run the compiled production build locally:
```bash
npm run start
```

---

## 📋 Technology Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Library:** [React 18](https://react.dev/)
* **Styles:** [Tailwind CSS v3](https://tailwindcss.com/) & Vanilla CSS modules
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typefaces:** Google Fonts via `next/font` (`Outfit` & `Playfair Display`)