const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
    const darkable = 'dark' in theme('screens', {})

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
    }
    const code = {
        fontFamily: theme('fontFamily.mono').join(', '),
        backgroundColor: theme('colors.gray.200'),
        borderRadius: theme('borderRadius.default'),
        fontSize: '.9rem',
        padding: '.15rem .3rem',

        '@media (prefers-color-scheme: dark)': !darkable ? {} : {
            '&': {
                backgroundColor: theme('colors.gray.700')
            }
        }
    }
    const p = {
        marginBottom: theme('spacing.4'),

        code
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

            '@media (prefers-color-scheme: dark)': !darkable ? {} : {
                '&': {
                    borderWidth: theme('borderWidth.default'),
                    borderColor: theme('colors.gray.600')
                }
            }
        }
    }
    const lists = {
        'ol,ul': {
            listStylePosition: 'inside',
            margin: `${theme('spacing.2')} 0 ${theme('spacing.2')} ${theme('spacing.4')}`,

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
            listStyleType: 'list-decimal'
        },
        ul: {
            listStyleType: 'list-disc'
        }
    }
    const headings = {
        'h1,h2,h3,h4,h5,h6': {
            fontWeight: theme('fontWeight.bold'),
            paddingBottom: theme('spacing.3'),
            margin: `${theme('spacing.6')} 0 ${theme('spacing.4')} 0`,

            '.permalink': {
                textColor: theme('colors.gray.700'),
                marginLeft: theme('spacing.2'),
                transition: theme('transitionProperty.colors'),
                transitionDuration: theme('transitionDuration.100'),

                '@media (prefers-color-scheme: dark)': !darkable ? {} : {
                    '&': {
                        textColor: theme('colors.gray.500')
                    }
                },

                '&:hover,&:focus': {
                    textColor: theme('colors.blue.500')
                },

                svg: {
                    fontSize: theme('fontSize.sm')
                }
            },

            code
        },

        'h1,h2': {
            borderBottomWidth: theme('borderWidth.default'),
            borderColor: theme('colors.gray.400'),

            '@media (prefers-color-scheme: dark)': !darkable ? {} : {
                '&': {
                    borderColor: theme('colors.gray.600')
                }
            }
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