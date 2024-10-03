

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/app/**/*.{js,ts,jsx,tsx}", // Path for files under the 'app' directory
      "./src/app/components/**/*.{js,ts,jsx,tsx}", // Path for component files
      "./pages/**/*.{js,ts,jsx,tsx}" // Path for page files
    ],

  theme: {
    extend: {},
  },
  plugins: [],
}

