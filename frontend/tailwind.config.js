const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.green,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.amber,
    },
    extend: {
      spacing: {
        '1/2': '50%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        'fit': 'fit-content',
      },
    },
  },
  corePlugins: {
    fontFamily: false,
  }
};
