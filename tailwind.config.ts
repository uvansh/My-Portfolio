import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#403E43",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "typewriter": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "color-change": {
          "0%": { color: "lightblue" },
          "50%": { color: "white" },
          "100%": { color: "lightblue" },
        },
        "border-color-change": {
          "0%": { borderColor: "pink" },
          "50%": { borderColor: "purple" },
          "100%": { borderColor: "pink" },
          },
          "rotate": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-right": "fade-in-right 1s ease-out",
        "typewriter": "typewriter 2s steps(50, end)",
        "color-change": "color-change 3s infinite",
        "border-color-change": "border-color-change 3s infinite",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;