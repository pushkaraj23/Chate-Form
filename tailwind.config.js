/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#B21A39', // This sets the default red color
          50: '#FDECEF',
          100: '#F9D4DA',
          200: '#F2A6B3',
          300: '#EB798D',
          400: '#E44B66',
          500: '#B21A39', // Main red color
          600: '#92152E',
          700: '#710F22',
          800: '#510A17',
          900: '#30050D',
        },
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      }
    },
  },
  plugins: [],
}

