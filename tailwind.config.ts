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
      spacing: {},
      borderRadius: {},
      fontSize: {},
    },
  },
  plugins: [],
} satisfies Config;
