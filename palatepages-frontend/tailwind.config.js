/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        'light-text': '#f4f5f2',
        'attention-gray': '#a9adbd',
        'main-color': '#ee5e67',
        'attention-gray2': `#978998`,
        'dark-text': `#3b4b5b`,
      },
      fontFamily: {
        sans: [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
