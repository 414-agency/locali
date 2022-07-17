/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '505px': '505px',
      },
      margin: {
        '300px': '300px',
      }
    },
  },
  plugins: [],
}
