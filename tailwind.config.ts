import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // American Red / White / Navy palette
        primary: "#C41E3A",
        "primary-dark": "#8B1429",
        "primary-light": "#FFF0F3",
        navy: "#1B2A4A",
        "navy-light": "#243658",
        success: "#16A34A",
        "success-light": "#DCFCE7",
        "success-border": "#86EFAC",
        danger: "#DC2626",
        "danger-light": "#FEE2E2",
        "danger-border": "#FCA5A5",
        accent: "#1B2A4A",
        "accent-light": "#E8EDF5",
        bg: "#F8F9FA",
        "bg-secondary": "#F1F3F6",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        callout: "#FFF0F3",
        "text-heading": "#1B2A4A",
        "text-body": "#374151",
        "text-secondary": "#6B7280",
        // Category colors
        "cat-government": "#1B2A4A",
        "cat-rights": "#0891B2",
        "cat-history": "#B45309",
        "cat-symbols": "#C41E3A",
      },
      borderRadius: {
        "card": "16px",
        "btn": "12px",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "q-body": ["1.125rem", { lineHeight: "1.6" }],
        "q-heading": ["1.375rem", { lineHeight: "1.4" }],
        "q-large": ["1.5rem", { lineHeight: "1.4" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.1)",
        btn: "0 2px 4px rgba(196,30,58,0.25)",
      },
      screens: {
        xs: "375px",
      },
      maxWidth: {
        content: "720px",
        grid: "1024px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "70%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(196,30,58,0.3)" },
          "50%": { boxShadow: "0 0 0 8px rgba(196,30,58,0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out both",
        fadeIn: "fadeIn 0.3s ease-in",
        popIn: "popIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both",
        slideDown: "slideDown 0.2s ease-out",
        bob: "bob 2.4s ease-in-out infinite",
        shake: "shake 0.3s ease-in-out",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
