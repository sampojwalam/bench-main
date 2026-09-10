import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bench: {
          purple: "#AB55FF",
          blue: "#375FEA",
          primary: "#715AF5",
        },
        ink: {
          950: "#06060A",
          900: "#0B0B12",
          800: "#12121B",
          700: "#1A1A26",
          600: "#252533",
          500: "#3A3A4A",
          400: "#6B6B7D",
          300: "#A1A1AE",
          200: "#D4D4DC",
          100: "#EDEDF1",
          50: "#F6F6F8",
        },
        page: "#FFFFFF",
        surface: "#FAFAFC",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "bench-gradient": "linear-gradient(to right, #AB55FF, #375FEA)",
        "bench-radial":
          "radial-gradient(circle at 50% 0%, rgba(171,85,255,0.18), transparent 60%)",
        "bench-radial-soft":
          "radial-gradient(circle at 50% 0%, rgba(171,85,255,0.10), transparent 60%)",
        grid: "linear-gradient(rgba(11,11,18,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(11,11,18,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,18,0.04), 0 4px 16px -8px rgba(11,11,18,0.08)",
        cardHover:
          "0 1px 2px rgba(11,11,18,0.04), 0 12px 30px -10px rgba(11,11,18,0.12)",
        soft: "0 2px 12px -2px rgba(11,11,18,0.06)",
        glow: "0 20px 60px -20px rgba(171,85,255,0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "fade-up": "fadeUp 0.7s ease-out both",
        glow: "glow 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
