const generateCSS = require('../jest/generateCSS')

const plugins = [
  require('../plugins/hocus'),
  ({ addUtilities, variants }) => {
    addUtilities(
      { '.visible': { visibility: 'visible' } },
      variants('visibility')
    )
  },
]

test("it doesn't generate 'hocus' variants", async () => {
  const css = await generateCSS(plugins, {
    variants: {
      visibility: [],
    },
  })

  expect(css).toMatchCSS(`
        .visible {
            visibility: visible;
        }
    `)
})

test("it generates 'hocus' variants", async () => {
  const css = await generateCSS(plugins, {
    variants: {
      visibility: ['hocus'],
    },
  })

  expect(css).toMatchCSS(`
        .visible {
            visibility: visible;
        }
        .hocus\\:visible:hover,.hocus\\:visible:focus {
            visibility: visible;
        }
    `)
})
