const generateCSS = require('../jest/generateCSS')

const plugins = (variants = []) => [
    require('../plugins/variants/hocusVariant'),
    ({ addUtilities }) => {
        addUtilities({ '.visible': { visibility: 'visible' } }, variants)
    }
]

test('it doesn\'t generate \'hocus\' variants', () =>
    generateCSS(plugins())
        .then(css => {
            expect(css).toMatchCSS(`
                .visible {
                    visibility: visible;
                }
            `)
        })
)

test('it generates \'hocus\' variants', () =>
    generateCSS(plugins(['hocus'])).then(css => {
            expect(css).toMatchCSS(`
                .visible {
                    visibility: visible;
                }
                .hocus\\:visible:hover,.hocus\\:visible:focus {
                    visibility: visible;
                }
            `)
        })
)