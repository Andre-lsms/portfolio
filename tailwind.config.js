// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garanta que este caminho abrange todos os seus arquivos!
  ],
  theme: {
    extend: {
      colors: {
        primary: "#71562C",
        secondary: "#C9AE7B",
        offwhite: "#F8F3ED",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        titulo: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
