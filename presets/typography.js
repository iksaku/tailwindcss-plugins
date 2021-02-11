const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const shared = {
  p: {
    marginTop: defaultTheme.spacing[5],
    marginBottom: defaultTheme.spacing[5],
  },
  'h1,h2,h3,h4,h5,h6': {
    marginTop: defaultTheme.spacing[8],
    marginBottom: defaultTheme.spacing[3],
  },
}

module.exports = {
  plugins: [require('@tailwindcss/typography')],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: colors.coolGray['900'],
            a: {
              color: colors.blue['700'],
              textDecoration: 'none',
              '&:hover,&:focus': {
                color: colors.blue['900'],
              },
            },
            pre: {
              borderRadius: defaultTheme.borderRadius.lg,
              borderWidth: defaultTheme.borderWidth.DEFAULT,
              borderColor: colors.coolGray['400'],
            },
            'h1,h2': {
              borderBottomWidth: defaultTheme.borderWidth.DEFAULT,
              borderColor: colors.coolGray['300'],
              paddingBottom: defaultTheme.spacing[3],
            },
            ':is(h1,h2,h3,h4,h5,h6)[id]': {
              a: {
                paddingLeft: defaultTheme.spacing[2],
              },
            },

            ...shared,
          },
        },
        sm: {
          css: {
            ...shared,
          },
        },
        lg: {
          css: {
            ...shared,
          },
        },
        xl: {
          css: {
            ...shared,
          },
        },
        '2xl': {
          css: {
            ...shared,
          },
        },
        light: {
          css: {
            color: colors.gray['200'],
            a: {
              color: colors.blue['300'],
              '&:hover,&:focus': {
                color: colors.blue['500'],
              },
            },
            strong: {
              color: colors.white,
            },
            'ol > li::before': {
              color: colors.gray['300'],
            },
            'ul > li::before': {
              backgroundColor: colors.gray['500'],
            },
            hr: {
              borderColor: colors.gray['100'],
            },
            blockquote: {
              color: colors.gray['100'],
              borderLeftColor: colors.gray['500'],
            },
            'h1,h2,h3,h4,h5,h6': {
              color: colors.white,
            },
            'figure figcaption': {
              color: colors.gray['300'],
            },
            code: {
              color: colors.white,
            },
            'a code': {
              color: colors.white,
            },
            pre: {
              color: colors.gray['100'],
              backgroundColor: colors.gray['800'],
              borderColor: colors.coolGray['600'],
            },
            thead: {
              color: colors.white,
              borderBottomColor: colors.gray['300'],
            },
            'tbody tr': {
              borderBottomColor: colors.gray['500'],
            },
          },
        },
      },
    },
  },

  variants: {
    extend: {
      typography: ['dark'],
    },
  },
}
