/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './components/**/*.{js,jsx,ts,tsx}'],
  content: [],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
