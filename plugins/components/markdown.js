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

    addComponents({
        '.markdown': {
            fontSize: theme('fontSize.lg'),
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
            },

            'p, pre, ol, ul, h1, h2, h3, h4, h5, h6': {
                marginBottom: theme('spacing.4'),
            },

            a: {
                cursor: 'pointer',
                color: theme('colors.blue.500'),
                transition: theme('transitionProperty.colors'),
                transitionDuration: theme('transitionDuration.100'),

                '&:hover,&:focus': {
                    textColor: theme('colors.blue.700')
                },

                '&:focus': {
                    outline: 0,
                    boxShadow: theme('boxShadow.outline')
                }
            },

            pre: {
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
            },

            'ol, ul': {
                listStylePosition: 'outside',
                marginLeft: theme('spacing.6'),

                li: {
                    'ol, ul': {
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
            'ol + ul, ul + ol': {
                marginTop: `-${theme('spacing.2')}`,
            },
            ol: {
                listStyleType: 'decimal'
            },
            ul: {
                listStyleType: 'disc'
            },

            'h1, h2, h3, h4, h5, h6': {
                fontWeight: theme('fontWeight.bold'),
                marginTop: theme('spacing.6'),

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

            'h1, h2': {
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
    })
})