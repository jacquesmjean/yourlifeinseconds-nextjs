import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0a0e1a",
          "bg-secondary": "#0f1424",
          card: "#151b2e",
          "card-hover": "#1a2138",
          elevated: "#1e2540",
          input: "#131930",
        },
        accent: {
          DEFAULT: "#00d4aa",
          bright: "#00f5c8",
          dim: "#009e7e",
          glow: "rgba(0, 212, 170, 0.15)",
          blue: "#00b4d8",
          "blue-dark": "#0096c7",
        },
        text: {
          primary: "#f0f2f8",
          secondary: "#8892a8",
          muted: "#5a6480",
        },
        status: {
          danger: "#ff4d6a",
          warning: "#ffb347",
          success: "#00d4aa",
          info: "#00b4d8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Fira Code", "monospace"],
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.06)",
        "subtle-hover": "rgba(255, 255, 255, 0.12)",
        "accent-dim": "rgba(0, 212, 170, 0.3)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 212, 170, 0.15)",
        "glow-strong": "0 0 60px rgba(0, 212, 170, 0.25)",
        "glow-btn": "0 4px 15px rgba(0, 212, 170, 0.3)",
        "glow-btn-hover": "0 6px 25px rgba(0, 212, 170, 0.45)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00d4aa 0%, #00b4d8 50%, #0096c7 100%)",
        "gradient-accent-vivid": "linear-gradient(135deg, #00f5c8 0%, #00d4aa 40%, #0096c7 100%)",
        "gradient-hero": "linear-gradient(180deg, #0a0e1a 0%, #0d1225 40%, #101830 100%)",
      },
      animation: {
        "clock-rotate": "clockRotate 60s linear infinite",
        "clock-rotate-reverse": "clockRotate 120s linear infinite reverse",
        "tick-pulse": "tickPulse 1s ease infinite",
        "scroll-bounce": "scrollBounce 2s ease infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-up-delay-1": "fadeUp 0.8s ease 0.15s forwards",
        "fade-up-delay-2": "fadeUp 0.8s ease 0.3s forwards",
        "fade-up-delay-3": "fadeUp 0.8s ease 0.45s forwards",
        "fade-up-delay-4": "fadeUp 0.8s ease 0.6s forwards",
      },
      keyframes: {
        clockRotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        tickPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "rotate(45deg) translateY(0)", opacity: "1" },
          "50%": { transform: "rotate(45deg) translateY(6px)", opacity: "0.5" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
