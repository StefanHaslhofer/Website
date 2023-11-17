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
      },
      transitionTimingFunction: {
        'website-cubic': 'cubic-bezier(0.445, 0.045, 0.355, 1)'
      }
    },
  },
  plugins: [],
}

