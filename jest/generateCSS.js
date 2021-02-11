const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

require('tailwindcss/defaultConfig')

module.exports = async (
  plugins,
  config = {},
  tailwindGenerator = '@tailwind utilities'
) => {
  const result = await postcss(
    tailwindcss({
      plugins: plugins,
      ...{ ...{ corePlugins: false }, ...config },
    })
  ).process(tailwindGenerator, { from: undefined })

  return result.css
}
