const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant, e }) => {
  addVariant('hocus', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) =>
      ['hover', 'focus'].map(variant => `.${e(`hocus${separator}${className}`)}:${variant}`).join(',')
    )
  })
})
