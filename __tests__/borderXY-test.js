const generateCSS = require('../jest/generateCSS')

const plugins = [
    require('../plugins/utilities/borderXY')
]

test('it generates border-(x|y)', () =>
    generateCSS(plugins, {
        variants: {
            borderWidth: []
        }
    }).then(css => {
        expect(css).toMatchCSS(`
            .border-x-0 {
                border-left-width: 0;
                border-right-width: 0;
            }
            .border-y-0 {
                border-top-width: 0;
                border-bottom-width: 0;
            }
            .border-x-2 {
                border-left-width: 2px;
                border-right-width: 2px;
            }
            .border-y-2 {
                border-top-width: 2px;
                border-bottom-width: 2px;
            }
            .border-x-4 {
                border-left-width: 4px;
                border-right-width: 4px;
            }
            .border-y-4 {
                border-top-width: 4px;
                border-bottom-width: 4px;
            }
            .border-x-8 {
                border-left-width: 8px;
                border-right-width: 8px;
            }
            .border-y-8 {
                border-top-width: 8px;
                border-bottom-width: 8px;
            }
            .border-x {
                border-left-width: 1px;
                border-right-width: 1px;
            }
            .border-y {
                border-top-width: 1px;
                border-bottom-width: 1px;
            }
        `)
    })
)

test('it generates custom width border-(x|y) with hover variant', () =>
    generateCSS(plugins, {
        theme: {
            borderWidth: {
                default: '1px'
            }
        },
        variants: {
            borderWidth: ['hover']
        }
    }).then(css => {
        expect(css).toMatchCSS(`
            .border-x {
                border-left-width: 1px;
                border-right-width: 1px;
            }
            .border-y {
                border-top-width: 1px;
                border-bottom-width: 1px;
            }
            .hover\\:border-x:hover {
                border-left-width: 1px;
                border-right-width: 1px;
            }
            .hover\\:border-y:hover {
                border-top-width: 1px;
                border-bottom-width: 1px;
            }
        `)
    })
)