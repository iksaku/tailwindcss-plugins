# tailwind-plugins

This is a personal collection of [TailwindCSS]() plugins that I use on many of
my projects.

## Table of Contents

- [Installation](#instalation)
- [Usage](#usage)
- [Plugins](#plugins)
  - [`border-x`, `border-y` Utilities](#border-x-border-y-utilities)
  - [`hocus:` Variant](#hocus-variant)
  - [Smooth Scrolling](#smooth-scrolling)
  - [Inter Font Family](#inter-font-family)
- [Presets](#presets)
  - [Inter Font Family Preset](#inter-font-family-preset)
  - [Typography Preset](#typography-preset)

## Instalation

```cli
# Using NPM
npm install @iksaku/tailwindcss-plugins --save-dev

# Using Yarn
yarn add -D @iksaku/tailwindcss-plugins
```

## Usage

You can import specific plugins from this package, just locate the desired
plugin under `plugins/` and import it in your configuration file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // Other plugins...
    require('@iksaku/tailwindcss-plugins/plugins/borderXY'),
  ],
}
```

## Plugins

### `border-x`, `border-y` Utilities

This plugin will generate two extra `border` class configurations: `border-x`
and `border-y`. Those will also be generated with the same width configurations
as specified in your configuration file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    borderWidth: {
      default: '1px',
      0: 0,
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },
  plugins: [require('@iksaku/tailwindcss-plugins/plugins/borderXY')],
}
```

The plugin will generate the following output:

```css
.border-x-0 {
  border-left-width: 0;
  border-right-width: 0;
}
.border-y-0 {
  border-top-width: 0;
  border-bottom-width: 0;
}
.border-x-2 {
  border-left-width: 2px;
  border-right-width: 2px;
}
.border-y-2 {
  border-top-width: 2px;
  border-bottom-width: 2px;
}
.border-x-4 {
  border-left-width: 4px;
  border-right-width: 4px;
}
.border-y-4 {
  border-top-width: 4px;
  border-bottom-width: 4px;
}
.border-x-8 {
  border-left-width: 8px;
  border-right-width: 8px;
}
.border-y-8 {
  border-top-width: 8px;
  border-bottom-width: 8px;
}
.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}
.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
```

### `hocus:` Variant

This plugin will make the `hocus` variant available for generation with your
utilities, which allow utilities to target both `:hover` and `:focus`
interactions with one class. For example, if you want a `.text-red` class to
have a `hocus:` variant, you must register it in your config file and specify it
under the `variants` section:

```js
// tailwind.config.js
module.exports = {
  theme: {
    textColor: {
      red: '#eb1e1e',
    },
  },
  variants: {
    textColor: ['hover', 'focus', 'hocus'],
  },
  plugins: [require('@iksaku/tailwindcss-plugins/plugins/hocus')],
}
```

That will generate the following output:

```css
.text-red {
  color: #eb1e1e;
}

.hover\:text-red:hover {
  color: #eb1e1e;
}

.focus\:text-red:focus {
  color: #eb1e1e;
}

.hocus\:text-red:hover,
.hocus\:text-red:focus {
  color: #eb1e1e;
}
```

As you can see, we could simplify the use of `hover:text-red focus:text-red` to
`hocus:text-red`

### Smooth Scrolling

This plugin will add the `scroll-behavior: smooth` rule to the base `html` style
that is generated along with `@tailwind base`. You must register the plugin in
your config file:

```js
// tailwind.config.js
module.exports = {
  plugins: [require('@iksaku/tailwindcss-plugins/plugins/smoothScroll')],
}
```

You can learn more about
[`scroll-behavior` rule on CSSTricks](https://css-tricks.com/almanac/properties/s/scroll-behavior/).

### Inter Font Family

This plugin will adjust Tailwind to add support for the
[Inter Font Family](https://rsms.me/inter). It will add custom rules to
Tailwind's Base Styles (via `@tailwind base`) and override the `.font-sans`
class (via `@tailwind utilities`) to reflect Inter support.

**NOTE**: You still need to import Inter's fonts from either their own CDN or
Google Fonts, or provide them yourself.

> If you plan to use the Inter Font Family as the only font in your application,
> you may want to check out the
> [Inter Font Family Preset](#inter-font-family-preset) instead.

Enable this plugin by registering it in your config:

```js
// tailwind.config.js
module.exports = {
  plugins: [require('@iksaku/tailwindcss-plugins/plugins/interFontFamily')],
}
```

This will generate the following additional CSS rules:

```css
/* @tailwind base */
html {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
}

/* @tailwind utilities */
.font-sans {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@supports (font-variation-settings: normal) {
  .font-sans {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
}
```

If, for some reason, you modified the default `fontFamily.sans` value in your
config, then this plugin will prepend the Inter font to the values you
specified:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [require('@iksaku/tailwindcss-plugins/plugins/interFontFamily')],
}
```

Result:

```css
/* @tailwind base */
html {
  font-family: 'Inter', Roboto, sans-serif;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter', Roboto, sans-serif;
  }
}

/* @tailwind utilities */
.font-sans {
  font-family: 'Inter', Roboto, sans-serif;
}

@supports (font-variation-settings: normal) {
  .font-sans {
    font-family: 'Inter', Roboto, sans-serif;
  }
}
```

If you removed the `fontFamily.sans` property or left it empty, then this plugin
will use the default Inter Fonts:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      sans: '',
    },
  },
  plugins: [require('@iksaku/tailwindcss-plugins/plugins/interFontFamily')],
}
```

Result:

```css
/* @tailwind base */
html {
  font-family: 'Inter', sans-serif;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter', sans-serif;
  }
}

/* @tailwind utilities */
.font-sans {
  font-family: 'Inter', sans-serif;
}

@supports (font-variation-settings: normal) {
  .font-sans {
    font-family: 'Inter', sans-serif;
  }
}
```

## Presets

### Inter Font Family Preset

This preset will adjust Tailwind to add support for the
[Inter Font Family](https://rsms.me/inter). It will make use of the
[Inter Font Family Plugin](#inter-font-family) under the hood to provide support
for the [Inter Variable Font Type](https://rsms.me/inter/#variable).

**NOTE**: You still need to import Inter's fonts from either their own CDN or
Google Fonts, or provide them yourself.

> If you are going to use more fonts other than Inter Font Family in your
> application, you may want to check out the
> [Inter Font Family Preset](#inter-font-family-preset) instead.

Enable this preset by registering it in your config:

```js
// tailwindcss.config.js
module.exports = {
  presets: [require('@iksaku/tailwindcss-plugins/presets/interFontFamily')],
}
```

### Typography Preset

In previous versions, we shipped a markdown plugin with some opinionated styles,
based on GitHub's own GFM styles, however, there's now a better alternative
which happens to be made by the core TailwindCSS team :tada:.

So, since
[v3.0 of this plugin](https://github.com/iksaku/tailwindcss-plugins/releases/tag/v3.0),
we removed support for our own markdown plugin and encourage developers to use
the
[Typography plugin for TailwindCSS](https://github.com/tailwindlabs/tailwindcss-typography).
However, we still want to provide some different opinions, which is why we
created this preset.

This preset provides some color and spacing modifications to the default
`typography plugin` styles.

Enable this preset by registering it in your config:

```js
// tailwindcss.config.js
module.exports = {
  presets: [require('@iksaku/tailwindcss-plugins/presets/interFontFamily')],
}
```

Since [v3.1 of this plugin](https://github.com/iksaku/tailwindcss-plugins/releases/tag/v3.0), we also added dark mode support. You can use it by
enabling the `dark` variant for the typography plugin as follows:

```js
// tailwindcss.config.js
modufle.exports = {
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
}
```

Then, a new `dark:prose-light` class will be made available for you, which
modifies the `prose` class in order to use bright colors with your dark
backgrounds.
