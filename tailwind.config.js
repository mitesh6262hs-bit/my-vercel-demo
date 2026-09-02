/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        dark: '#0c0e14',
        card: '#1a1f2e',
        border: '#2a3452',
        muted: '#6a6a7a',
      }
    }
  },
  plugins: [],
}
