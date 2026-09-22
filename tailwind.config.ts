import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      // mobile is the unprefixed default
      tablet: "640px",
      desktop: "1024px",
    },
    extend: {
      colors: {
        // Figma color tokens (see .claude/skills/figma-translation-framework).
        foreground: {
          1: "#0c0a09", // Foreground/1
          2: "#44403c", // Foreground/2
          3: "#78716c", // Foreground/3
        },
        background: {
          1: "#ffffff", // Background/1
          2: "#f5f5f4", // Background/2
        },
        stone: {
          200: "#e7e5e4", // color/stone-200
        },
      },
      // Figma `layout` semantic collection (see .claude/skills/figma-translation-framework).
      spacing: {
        "margin-x": "20px", // layout/margin/x
        "section-max-w": "1200px", // layout/section/max-width
      },
      // Figma `custom` collection (display-large) + font-family/sans token.
      fontFamily: {
        sans: ["var(--font-inter)"], // font-family/sans
        "display-large": ["var(--font-inter-tight)"], // custom/*/display-large
      },
      borderRadius: {},
      fontSize: {},
    },
  },
  plugins: [],
} satisfies Config;
