const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase, addUtilities, theme, variants }) => {
    // Ask for Tailwind's 'sans' font family, if not present in user's config, use Inter's default.
    let sans = theme('fontFamily.sans', 'sans-serif')

    // If 'Inter var' is already provided in user's config, there's no need adjust CSS.
    if (sans.includes('Inter var')) {
        return
    }

    if (Array.isArray(sans)) {
        // Compiles list of Font Families for CSS.
        sans = sans.join(', ')
    }

    let isInterOnly = false
    const interIsIncluded = sans.includes('Inter')

    if (interIsIncluded) {
        sans = sans.replace(
            /["']?Inter["']?,? ?(.*)/g,
            '$1'
        )
    }

    if (sans.length < 1) {
        // Use Inter's default.
        sans = 'sans-serif'
        isInterOnly = true
    }

    const baseStyles = {}, utilities = {}

     if (!interIsIncluded || isInterOnly) {
        // By default, Tailwind adds its own 'sans' font families, but since we want Inter, we will override those.
        baseStyles['html'] = {
            fontFamily: `"Inter", ${sans}`
        }

        // Override '.font-sans' class with Inter Family
        utilities['.font-sans'] = {
            fontFamily: `"Inter", ${sans}`
        }
    }

    // Include support for 'Inter var' if browser supports font variations
    baseStyles['@supports (font-variation-settings: normal)'] = {
        html: {
            fontFamily: `"Inter var", ${sans}`
        }
    }

    // Override '.font-sans' class with support for 'Inter var' if browser supports font variations
    utilities['@supports (font-variation-settings: normal)'] = {
        '.font-sans': {
            fontFamily: `"Inter var", ${sans}`
        }
    }

    // Add root html support for Inter fonts
    addBase(baseStyles)

    if (theme('fontFamily.sans', false) !== false) {
        // Will be skipped if user disabled fontFamily.sans or didn't enable utility classes
        addUtilities(utilities, variants('fontFamily'))
    }
})