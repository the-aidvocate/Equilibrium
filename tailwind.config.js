/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fcf7f3',
          100: '#f7ede2',
          200: '#e5d1c2',
          300: '#cbad9b',
          400: '#a37e69',
          500: '#8c6853',
          600: '#755442',
          700: '#5a4032',
          800: '#422e23',
          900: '#261a14',
        },
        accent: {
          light: '#d4bba9',
          DEFAULT: '#b38d72',
          dark: '#8b6951'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
