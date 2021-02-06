const generateCSS = require('../jest/generateCSS')

const plugins = [
  require('../plugins/interFontFamily')
]

test('it includes Inter Font Families in html with Tailwind\'s default Sans Families', async () => {
  const css = await generateCSS(plugins, {}, '@tailwind base')

  expect(css).toMatch('font-family: "Inter"')
  expect(css).toMatch('font-family: "Inter var"')
})

test('it generates Inter Family when there is no \'sans\' font family available in config', async () => {
  const css = await generateCSS(plugins, {
    corePlugins: ['fontFamily'],
    theme: {
      fontFamily: {},
    },
    variants: {
      fontFamily: []
    }
  }, '@tailwind base; @tailwind utilities')

  expect(css).toMatchCSS(`
        html {
            font-family: "Inter", sans-serif
        }

        @supports (font-variation-settings: normal) {
            html {
                font-family: "Inter var", sans-serif
            }
        }
    `)
})

test('it overrides class \'font-sans\' if enabled in config', async () => {
  const css = await generateCSS(plugins, {
    corePlugins: ['fontFamily']
  })

  expect(css).toMatch('font-family: "Inter", ')
  expect(css).toMatch('font-family: "Inter var", ')
})

test('it overrides user\'s custom \'font-sans\' configuration', async () => {
  const css = await generateCSS(plugins, {
    corePlugins: ['fontFamily'],
    theme: {
      fontFamily: {
        sans: ['FontA', 'FontB']
      }
    },
    variants: {
      fontFamily: []
    }
  }, '@tailwind base; @tailwind utilities')

  expect(css).toMatchCSS(`
        html {
            font-family: "Inter", FontA, FontB
        }

        @supports (font-variation-settings: normal) {
            html {
                font-family: "Inter var", FontA, FontB
            }
        }

        .font-sans {
            font-family: FontA, FontB
        }

        .font-sans {
            font-family: "Inter", FontA, FontB
        }

        @supports (font-variation-settings: normal) {
            .font-sans {
                font-family: "Inter var", FontA, FontB
            }
        }
    `)
})

test('it only adds support for "Inter var" if Intel Family is already specified in config', async () => {
  const interOnly = await generateCSS(plugins, {
    corePlugins: ['fontFamily'],
    theme: {
      fontFamily: {
        sans: '"Inter"'
      }
    },
    variants: {
      fontFamily: []
    }
  }, '@tailwind base; @tailwind utilities')

  const interAndOthers = await generateCSS(plugins, {
    corePlugins: ['fontFamily'],
    theme: {
      fontFamily: {
        sans: '"Inter", Roboto, sans-serif'
      }
    },
    variants: {
      fontFamily: []
    }
  }, '@tailwind base; @tailwind utilities')

  expect(interOnly).toMatchCSS(`
        html {
            font-family: "Inter", sans-serif
        }

        @supports (font-variation-settings: normal) {
            html {
                font-family: "Inter var", sans-serif
            }
        }

        .font-sans {
            font-family: "Inter"
        }

        .font-sans {
            font-family: "Inter", sans-serif
        }

        @supports (font-variation-settings: normal) {
            .font-sans {
                font-family: "Inter var", sans-serif
            }
        }
    `)

  expect(interAndOthers).toMatchCSS(`
        @supports (font-variation-settings: normal) {
            html {
                font-family: "Inter var", Roboto, sans-serif
            }
        }

        .font-sans {
            font-family: "Inter", Roboto, sans-serif
        }

        @supports (font-variation-settings: normal) {
            .font-sans {
                font-family: "Inter var", Roboto, sans-serif
            }
        }
    `)
})

test('it skips adding Inter Family if "Inter var" is already specified', async () => {
  const css = await generateCSS(plugins, {
    corePlugins: ['fontFamily'],
    theme: {
      fontFamily: {
        sans: '"Inter var", sans-serif'
      }
    },
    variants: {
      fontFamily: []
    }
  }, '@tailwind base; @tailwind utilities')

  expect(css).toMatch('font-family: "Inter var"')
  expect(css).not.toMatch('font-family: "Inter"')
})
