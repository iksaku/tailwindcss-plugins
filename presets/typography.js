const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const shared = {
  'h1,h2,h3,h4,h5,h6': {
    marginBottom: defaultTheme.spacing[4]
  },
  'h1,h2': {
    borderBottomWidth: defaultTheme.borderWidth.DEFAULT,
    borderColor: colors.coolGray['300'],
    paddingBottom: defaultTheme.spacing[4],
  }
}

module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],

  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: colors.coolGray['900'],

            a: {
              color: colors.blue['700'],
              textDecoration: 'none',
              '&:hover,&:focus': {
                color: colors.blue['900']
              },
            },

            ...shared
          }
        },
        'sm': {
          css: {
            ...shared
          }
        },
        'lg': {
          css: {
            ...shared
          }
        },
        'xl': {
          css: {
            ...shared
          }
        },
        '2xl': {
          css: {
            ...shared
          }
        }
      })
    }
  }
}
