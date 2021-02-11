const generateCSS = require('../jest/generateCSS')

const plugins = [require('../plugins/borderXY')]

test('it generates border-(x|y)', async () => {
  const css = await generateCSS(plugins, {
    variants: {
      borderWidth: [],
    },
  })

  expect(css).toMatchCSS(`
        .border-x-0 {
            border-left-width: 0px;
            border-right-width: 0px
        }
        .border-y-0 {
            border-top-width: 0px;
            border-bottom-width: 0px
        }
        .border-x-2 {
            border-left-width: 2px;
            border-right-width: 2px
        }
        .border-y-2 {
            border-top-width: 2px;
            border-bottom-width: 2px
        }
        .border-x-4 {
            border-left-width: 4px;
            border-right-width: 4px
        }
        .border-y-4 {
            border-top-width: 4px;
            border-bottom-width: 4px
        }
        .border-x-8 {
            border-left-width: 8px;
            border-right-width: 8px
        }
        .border-y-8 {
            border-top-width: 8px;
            border-bottom-width: 8px
        }
        .border-x {
            border-left-width: 1px;
            border-right-width: 1px
        }
        .border-y {
            border-top-width: 1px;
            border-bottom-width: 1px
        }
    `)
})

test('it generates custom width border-(x|y) with hover variant', async () => {
  const css = await generateCSS(plugins, {
    theme: {
      borderWidth: {
        DEFAULT: '1px',
      },
    },
    variants: {
      borderWidth: ['hover'],
    },
  })

  expect(css).toMatchCSS(`
        .border-x {
            border-left-width: 1px;
            border-right-width: 1px
        }
        .border-y {
            border-top-width: 1px;
            border-bottom-width: 1px
        }
        .hover\\:border-x:hover {
            border-left-width: 1px;
            border-right-width: 1px
        }
        .hover\\:border-y:hover {
            border-top-width: 1px;
            border-bottom-width: 1px
        }
    `)
})
