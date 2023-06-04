/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-500": "rgb(142, 142, 160)",
        "gray-600": "rgb(86, 88, 105)",
        "gray-800": "rgb(52,53,65)",
        "gray-900": "rgb(32,33,35)",
      },
      boxShadow: {
        "xs": "0 0 15px rgba(0,0,0,.1)",
        "fade-in" : "0 2px 4px rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}
