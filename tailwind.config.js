module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    fontFamily: {
      'display': ['Druk Wide', 'Arial', 'sans-serif'],
      'sans': ['Suisse Intl', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#FF5900',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontSize: {
        '2xs': '.65rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
