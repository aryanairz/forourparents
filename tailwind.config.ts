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
    },
  },
  plugins: [],
};

export default config;
