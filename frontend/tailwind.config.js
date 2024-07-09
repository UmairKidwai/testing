/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E3A8A',
        'light-blue': '#60A5FA',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
