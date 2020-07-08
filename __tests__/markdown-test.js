const generateCSS = require('../jest/generateCSS')

const plugins = [
    require('../src/markdown')
]

test('it generates markdown component', async () => {
    const css = await generateCSS(plugins, {}, '@tailwind components')

    expect(css).toMatch('.markdown')
})