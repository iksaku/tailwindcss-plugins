const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
    const ifDarkModeEnabled = styles => {
        if (!('dark' in theme('screens', {}))) {
            return {}
        }

        return {
            '@media (prefers-color-scheme: dark)': styles
        }
    }

    const base = {
        fontSize: theme('fontSize.lg'),
        fontFamily: theme('fontFamily.sans').join(', '),
        lineHeight: theme('lineHeight.snug'),

        '& > :first-child': {
            marginTop: '0 !important'
        },
        '& > :last-child': {
            marginBottom: '0 !important'
        },

        ':not(pre) code': {
            fontFamily: theme('fontFamily.mono').join(', '),
            backgroundColor: theme('colors.gray.200'),
            borderRadius: theme('borderRadius.default'),
            fontSize: '80%',
            padding: '.15rem .3rem',
            verticalAlign: 'middle',

            ...ifDarkModeEnabled({
                '&': {
                    backgroundColor: theme('colors.gray.700')
                }
            })
        }
    }
    const p = {
        marginBottom: theme('spacing.4'),
    }
    const a = {
        cursor: 'pointer',
        textColor: theme('colors.blue.500'),
        transition: theme('transitionProperty.colors'),
        transitionDuration: theme('transitionDuration.100'),

        '&:hover,&:focus': {
            textColor: theme('colors.blue.700')
        },

        '&:focus': {
            outline: 0,
            boxShadow: theme('boxShadow.outline')
        }
    }
    const pre = {
        marginBottom: theme('spacing.4'),

        code: {
            fontSize: theme('fontSize.sm'),
            borderRadius: theme('borderRadius.lg'),
            '-webkit-overflow-scrolling': 'touch',

            ...ifDarkModeEnabled({
                '&': {
                    borderWidth: theme('borderWidth.default'),
                    borderColor: theme('colors.gray.600')
                }
            })
        }
    }
    const lists = {
        'ol,ul': {
            listStylePosition: 'outside',
            margin: `${theme('spacing.2')} ${theme('spacing.6')}`,

            li: {
                'ol,ul': {
                    marginTop: 0,

                    li: {
                        ol: {
                            listStyleType: 'lower-latin'
                        },
                        ul: {
                            listStyleType: 'square'
                        }
                    }
                },
                ol: {
                    listStyleType: 'lower-roman'
                },
                ul: {
                    listStyleType: 'circle'
                },
            }
        },
        ol: {
            listStyleType: 'decimal'
        },
        ul: {
            listStyleType: 'disc'
        }
    }
    const headings = {
        'h1,h2,h3,h4,h5,h6': {
            fontWeight: theme('fontWeight.bold'),
            margin: `${theme('spacing.6')} 0 ${theme('spacing.4')} 0`,

            '.permalink': {
                textColor: theme('colors.gray.700'),
                marginLeft: theme('spacing.2'),
                transition: theme('transitionProperty.colors'),
                transitionDuration: theme('transitionDuration.100'),

                ...ifDarkModeEnabled({
                    '&': {
                        textColor: theme('colors.gray.500')
                    }
                }),

                '&:hover,&:focus': {
                    textColor: theme('colors.blue.500')
                },

                svg: {
                    fontSize: theme('fontSize.sm')
                }
            },
        },

        'h1,h2': {
            borderBottomWidth: theme('borderWidth.default'),
            borderColor: theme('colors.gray.400'),
            paddingBottom: theme('spacing.3'),

            ...ifDarkModeEnabled({
                '&': {
                    borderColor: theme('colors.gray.600')
                }
            })
        },

        h1: {
            fontSize: theme('fontSize.3xl')
        },

        h2: {
            fontSize: theme('fontSize.2xl')
        },

        h3: {
            fontSize: theme('fontSize.xl')
        },

        h4: {
            fontSize: theme('fontSize.lg')
        },

        h5: {
            fontSize: theme('fontSize.base')
        },

        h6: {
            fontSize: theme('fontSize.sm')
        }
    }

    addComponents({
        '.markdown': {
            ...base,
            p,
            a,
            pre,
            ...lists,
            ...headings
        }
    })
})