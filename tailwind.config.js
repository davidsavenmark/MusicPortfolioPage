/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'aboreto': ['Aboreto'],
      'anton': ['Anton'],
      'poppins': ['Poppins'],
    },
    extend: {},
  },
  plugins: [],
}