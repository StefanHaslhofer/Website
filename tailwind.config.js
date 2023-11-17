/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'website-white': '#ffffff',
        'website-creme': '#eeeeeb',
        'website-dark': '#31302B',
        'website-brown': '#987654'
      }
    },
  },
  plugins: [],
}

