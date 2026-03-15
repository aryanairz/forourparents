import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA580C",
        "primary-dark": "#C2410C",
        success: "#16A34A",
        "success-light": "#DCFCE7",
        danger: "#DC2626",
        "danger-light": "#FEE2E2",
        warm: "#FFF8F0",
        "warm-dark": "#FFF1E0",
      },
      fontSize: {
        "q-body": ["1.125rem", "1.625rem"],
        "q-heading": ["1.5rem", "2rem"],
        "q-large": ["1.75rem", "2.25rem"],
      },
      screens: {
        xs: "375px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "70%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideOutUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-24px)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out both",
        popIn: "popIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both",
        slideInDown: "slideInDown 0.35s ease-out both",
        bob: "bob 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
