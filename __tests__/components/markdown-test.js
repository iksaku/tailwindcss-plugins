const generateCSS = require('../../jest/generateCSS')

const plugins = [
    require('../../plugins/components/markdown')
]

test('it generates markdown component', async () => {
    const css = await generateCSS(plugins, {}, '@tailwind components')

    return expect(css).toContain('.markdown')
})