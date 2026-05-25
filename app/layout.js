import { Outfit, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JoinDialogProvider } from "@/components/JoinDialog";
import { AssistantWidget } from "@/components/AssistantWidget";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Fleazo | AI-Ready Local Directory",
  description:
    "Verified businesses, creators and artists across India. Discoverable on Google, AI search, and WhatsApp — zero commissions.",
  keywords: [
    "Local Business Directory",
    "Influencer Marketing India",
    "Digital Flea Market",
    "AI SEO",
    "Jaipur Businesses",
    "Content Creators",
    "Hyperlocal Search",
  ],
  authors: [{ name: "Fleazo Network" }],
  openGraph: {
    title: "Fleazo | AI-Ready Local Directory",
    description: "Connect with verified businesses and creators.",
    url: "https://fleazo.com/",
    siteName: "Fleazo",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} scroll-smooth h-full`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[var(--color-text-primary)] focus:text-white focus:px-4 focus:py-2 focus:rounded-xs"
        >
          Skip to content
        </a>
        <JoinDialogProvider>
          <Header />
          <main id="main" className="pt-16 pb-24 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileNav />
          <AssistantWidget />
        </JoinDialogProvider>
      </body>
    </html>
  );
}
