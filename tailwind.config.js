/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Outfit", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      fontSize: {
        // Aligned to design tokens (px values)
        xs: ["10px", { lineHeight: "14px" }],
        sm: ["12px", { lineHeight: "16px" }],
        md: ["14px", { lineHeight: "20px" }],
        lg: ["16px", { lineHeight: "24px" }],
        xl: ["18px", { lineHeight: "26px" }],
        "2xl": ["20px", { lineHeight: "28px" }],
        "3xl": ["24px", { lineHeight: "32px" }],
        "4xl": ["30px", { lineHeight: "38px" }],
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "10px",
        4: "12px",
        5: "16px",
        6: "20px",
        7: "24px",
        8: "32px",
      },
      borderRadius: {
        xs: "12px",
        sm: "9999px",
        DEFAULT: "12px",
      },
      colors: {
        // Semantic token aliases (also exposed via CSS vars in globals)
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          inverse: "var(--color-text-inverse)",
        },
        surface: {
          base: "var(--color-surface-base)",
          muted: "var(--color-surface-muted)",
          raised: "var(--color-surface-raised)",
          strong: "var(--color-surface-strong)",
        },
        border: {
          DEFAULT: "var(--color-border-default)",
          muted: "var(--color-border-muted)",
        },
        brand: {
          black: "#0F0F0F",
          gold: "#D4AF37",
          cream: "#FDFBF7",
        },
        accent: "var(--accent)",
      },
      boxShadow: {
        1: "rgba(0,0,0,0.05) 0px 1px 2px 0px",
        2: "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px",
        3: "rgba(0,0,0,0.1) 0px 20px 25px -5px, rgba(0,0,0,0.1) 0px 8px 10px -6px",
        4: "rgba(0,0,0,0.25) 0px 25px 50px -12px",
      },
      transitionDuration: {
        instant: "150ms",
        fast: "300ms",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 300ms ease-out both",
        shimmer: "shimmer 1.5s infinite linear",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(rgb(229 231 235) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
    },
  },
  plugins: [],
};
