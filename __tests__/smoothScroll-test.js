const generateCSS = require('../jest/generateCSS')

const plugins = [
    require('../src/smoothScroll')
]

test('it adds scrolling-behavior to html', async () => {
    const css = await generateCSS(plugins, {}, '@tailwind base')

    expect(css).toMatchCSS(`
        html {
            scroll-behavior: smooth
        }
    `)
})