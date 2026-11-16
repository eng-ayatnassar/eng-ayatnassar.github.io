/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "#090A0F",
        surface: "#151221",
        fuchsia: "#EC4899",
        violet: "#8B5CF6",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
