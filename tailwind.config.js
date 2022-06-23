/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          700: '#006B5D',
        },
        teal: {
          200: '#84DDE0',
          500: '#68BAB1',
        },
        orange: {
          500: '#FFa62b',
        },
        red: {
          700: '#931621'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    },
  },
  plugins: [],
}