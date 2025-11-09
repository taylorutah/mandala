import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#10b981", // Emerald 500
          light: "#34d399",   // Emerald 400
          dark: "#065f46"     // Emerald 800
        },
        gray: {
          850: "#1f1f1f"      // Custom gray tone for dark backgrounds
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      boxShadow: {
        "soft-glow": "0 0 20px rgba(16, 185, 129, 0.3)"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease both"
      }
    }
  },
  darkMode: "class",
  plugins: []
};

export default config;