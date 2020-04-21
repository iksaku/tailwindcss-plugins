const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

require('tailwindcss/defaultConfig')

module.exports = (plugins, config = {}) =>
    postcss(
        tailwindcss({
            plugins: plugins,
            ...{ ...{ corePlugins: false }, ...config }
        })
    )
        .process('@tailwind utilities', { from: undefined })
        .then(result => {
            return result.css
        })
