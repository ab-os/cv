module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ['Nunito'],
        body: ['Roboto'],
      },
      colors: {
        primary: {
          dark: '#393E44',
          light: '#F0EEF1',
        },
        secondary: '#DB9F60',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
