/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/services/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
    "./src/App.css",
    "./src/components/Search.jsx",
    "./src/services/githubService.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

