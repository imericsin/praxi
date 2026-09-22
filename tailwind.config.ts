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
      colors: {},
      // Figma `layout` semantic collection (see .claude/skills/figma-translation-framework).
      spacing: {
        "margin-x": "20px", // layout/margin/x
        "section-max-w": "1200px", // layout/section/max-width
      },
      borderRadius: {},
      fontSize: {},
    },
  },
  plugins: [],
} satisfies Config;
