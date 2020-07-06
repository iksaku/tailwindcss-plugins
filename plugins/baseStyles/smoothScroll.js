const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
    addBase({
        html: {
            scrollBehavior: 'smooth'
        }
    })
})