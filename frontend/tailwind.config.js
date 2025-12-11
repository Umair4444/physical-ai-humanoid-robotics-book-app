/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'], // Enable dark mode based on class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../docs/**/*.{md,mdx}",
    "../blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
