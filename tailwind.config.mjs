/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf7ff",
          100: "#d6ecff",
          200: "#b5dfff",
          300: "#83cdff",
          400: "#48b0ff",
          500: "#1e8bff",
          600: "#066aff",
          700: "#0055ff",
          800: "#0841c5",
          900: "#0d3c9b",
          950: "#0e265d",
        },
        secondary: {
          50: "#edfcff",
          100: "#d6f7ff",
          200: "#b5f3ff",
          300: "#83eeff",
          400: "#48e1ff",
          500: "#1ec7ff",
          600: "#06acff",
          700: "#0099ff",
          800: "#0874c5",
          900: "#0d629b",
          950: "#0e3b5d",
        },
      },
    },
  },
  plugins: [],
};
