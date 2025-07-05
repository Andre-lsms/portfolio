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
        primary: '#71562c',
        secondary: '#c9ae7b',
        tertiary: '#bb923c',
        offwhite: '#F8F3ED',
        
      },
    },
  },
  plugins: [],
};