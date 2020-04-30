const generateCSS = require('../../jest/generateCSS')

const plugins = (variants = []) => [
    require('../../plugins/variants/hocusVariant'),
    ({ addUtilities }) => {
        addUtilities({ '.visible': { visibility: 'visible' } }, variants)
    }
]

test('it doesn\'t generate \'hocus\' variants', async () => {
    const css = await generateCSS(plugins())
    
    return expect(css).toMatchCSS(`
        .visible {
            visibility: visible;
        }
    `)
})

test('it generates \'hocus\' variants', async () => {
    const css = await generateCSS(plugins(['hocus']))

    return expect(css).toMatchCSS(`
        .visible {
            visibility: visible;
        }
        .hocus\\:visible:hover,.hocus\\:visible:focus {
            visibility: visible;
        }
    `)
})