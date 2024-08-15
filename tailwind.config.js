/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customNavy: '#243B55',
        customTealDark: '#2C7873',
        customTeal: '#6FB1A0',
        customTealLight: '#A1E3D8',
        customIce: '#D9FFF5',
      }
    },
  },
  plugins: [],
}

