/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'property':'#383838',
        'value':'#898989',
        'confirm': '#7677F4',
      },
    },
  },
  plugins: [],
}