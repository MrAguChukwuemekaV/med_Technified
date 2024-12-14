/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#7600bc"
      },
      gridTemplateColumns:{
        'auto': "repeat(auto-fill, minmax(165px, 1fr))"
      }
    },
  },
  plugins: [],
}