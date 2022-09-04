/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'aboreto': ['Aboreto'],
      'anton': ['Anton'],
      'poppins': ['Poppins'],
      'roboto': ['Roboto'],
    },
    extend: {},
  },
  plugins: [],
}