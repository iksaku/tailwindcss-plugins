const generateCSS = require('../../jest/generateCSS')

const plugins = [
    require('../../plugins/baseStyles/smoothScroll')
]

test('it adds scrolling-behavior to html', async () => {
    const css = await generateCSS(plugins, {}, '@tailwind base')

    return expect(css).toMatchCSS(`
        html {
            scroll-behavior: smooth
        }
    `)
})