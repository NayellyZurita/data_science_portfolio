/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom palette shared across sections/pages
        grey: "#E4E3EC",
        teal: "#00D7D2",
        purple: "#8E72EE",
        dark: "#191927",
        night: "#08090f",
        midnight: "#0f111a",
        ink: "#090b12",
        ocean: "#355C7D",
        sand: "#DAD7CD",
        accent: "#E84A5F",

        pgreen:{
          light: "#A3B18A",
          dark: "#283618",
        },
        pbeige:{
          light: "#DAD7CD", 
        },
      },
      fontFamily: {
        sans: ["'Inter'", "'Segoe UI'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
