/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        playFair: "'Playfair', serif",
      }
    },
  },
  plugins: [],
}