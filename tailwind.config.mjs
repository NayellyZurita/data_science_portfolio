import { Instrument_Serif } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // New custom palette
        grey: "#E4E3EC",
        teal: "#00D7D2",
        purple: "#8E72EE",
        dark: "#191927",

        pgreen:{
          light: "#A3B18A",
          dark: "#283618",
        },
        pbeige:{
          light: "#DAD7CD", 
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          Instrument_Serif: ["Instrument_Serif", "serif"],
        },
      },
    },
  },
  plugins: [],
};
