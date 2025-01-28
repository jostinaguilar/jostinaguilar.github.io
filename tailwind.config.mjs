/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at 50% 50%, hsla(210, 40%, 98%, 1) 0px, transparent 50%), radial-gradient(circle at 0% 0%, hsla(210, 40%, 98%, 1) 0px, transparent 50%), radial-gradient(circle at 100% 0%, hsla(210, 40%, 98%, 1) 0px, transparent 50%), radial-gradient(ellipse 70% 100% at 40% 0%, hsla(220, 100%, 50%, 1) 0px, transparent 50%), radial-gradient(ellipse 70% 100% at 60% 0%, hsla(250, 90%, 50%, 0.7) 0px, transparent 50%)",
        "mesh-gradient-dark":
          "radial-gradient(circle at 50% 50%, hsla(229, 84%, 5%, 1) 0px, transparent 50%), radial-gradient(circle at 0% 0%, hsla(229, 84%, 5%, 1) 0px, transparent 50%), radial-gradient(circle at 100% 0%, hsla(229, 84%, 5%, 1) 0px, transparent 50%), radial-gradient(ellipse 70% 100% at 40% 0%, hsla(220, 100%, 50%, 1) 0px, transparent 50%), radial-gradient(ellipse 70% 100% at 60% 0%, hsla(250, 90%, 50%, 0.7) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
