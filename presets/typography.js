const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const shared = {
  p: {
    marginTop: defaultTheme.spacing[5],
    marginBottom: defaultTheme.spacing[5]
  },
  'h1,h2,h3,h4,h5,h6': {
    marginTop: defaultTheme.spacing[8],
    marginBottom: defaultTheme.spacing[3]
  },
  'h1,h2': {
    borderBottomWidth: defaultTheme.borderWidth.DEFAULT,
    borderColor: colors.coolGray['300'],
    paddingBottom: defaultTheme.spacing[3],
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
        sm: {
          css: {
            ...shared
          }
        },
        lg: {
          css: {
            ...shared
          }
        },
        xl: {
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
