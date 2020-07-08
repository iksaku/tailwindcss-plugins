const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
    const generator = (value, modifier) => ({
        [`.${e(`border-x${modifier}`)}`]: { borderLeftWidth: `${value}`, borderRightWidth: `${value}` },
        [`.${e(`border-y${modifier}`)}`]: { borderTopWidth: `${value}`, borderBottomWidth: `${value}` }
    })

    const utilities = _.flatMap(theme('borderWidth'), (value, modifier) =>
        generator(value, modifier === 'default' ? '' : `-${modifier}`)
    )

    addUtilities(utilities, variants('borderWidth'))
})