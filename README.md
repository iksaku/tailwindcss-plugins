# tailwind-plugins

This is a personal collection of [TailwindCSS]() plugins that I use on many of my projects.


## Table of Contents

- [Installation](#instalation)
- [Usage](#usage)
- [Plugins](#plugins)
    - [Base Styles](#base-styles)
        - [Smooth Scrolling](#smooth-scrolling)
    - [Components](#components)
        - [`.markdown` Components](#markdown)
    - [Utilities](#utilities)
        - [`border-x`, `border-y` Utilities](#border-x-border-y)
    - [Variants](#variants)
        - [`hocus:` Variant](#hocus)


## Instalation

```cli
# Using NPM
npm install @iksaku/tailwindcss-plugins

# Using Yarn
yarn add @iksaku/tailwindcss-plugins
```


## Usage

- Importing all plugins
    ```js
    // tailwind.config.js
    module.exports = {
        //...
        plugins: [
            // Other plugins...

            ...require('@iksaku/tailwindcss-plugins')
        ]
    }
    ```
- Importing plugins individually:
    Locate the desired plugin under `plugins/` and import it in your configuration file:
    ```js
    // tailwind.config.js
    module.exports = {
        //...
        plugins: [
            //Other plugins...

            require('@iksaku/tailwindcss-plugins/plugins/utilities/borderXY')
        ]
    }
    ```


## Plugins

### Base Styles

#### Smooth Scrolling
This plugin will add the `scroll-behavior: smooth` rule to the base `html` style that is generated along with
`@tailwind base`.

You can learn more about [`scroll-behavior` rule on CSSTricks](https://css-tricks.com/almanac/properties/s/scroll-behavior/).

### Components

#### `.markdown`
This plugin will generate specific classes for rendering Markdown-like text, inspired in Github's
Markdown styles. You can use this by using the `.markdown` class in your HTML file:
```html
<article class="markdown p-4">
    <!-- Content -->
</article>
```

### Utilities

#### `border-x`, `border-y`
This plugin will generate two extra `border` class configurations: `border-x` and `border-y`.
Those will also be generated with the same width configurations as specified in your configuration file:
```js
// tailwind.config.js
module.exports = {
    theme: {
        borderWidth: {
            default: '1px',
            '0': 0,
            '2': '2px',
            '4': '4px',
            '8': '8px',
        }
    },
    plugins: [
        require('@iksaku/tailwindcss-plugins/plugins/utilities/borderXY')
    ]
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

### Variants

#### `hocus:`
This plugin will make the `hocus` variant available for generation with your utilities, which allow utilities to target
both `:hover` and `:focus` interactions with one class. For example, if you want a `.text-red` class to have a `hocus:`
variant, you must register it in your config file and specify it under the `variants` section:
```js
// tailwind.config.js
module.exports = {
    theme: {
        textColor: {
            'red': '#eb1e1e'
        }
    },
    variants: {
        textColor: ['hover', 'focus', 'hocus']
    },
    plugins: [
        require('@iksaku/tailwindcss-plugins/plugins/variants/hocus')
    ]
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

.hocus\:text-red:hover,.hocus\:text-red:focus {
    color: #eb1e1e;
}
```
As you can see, we could simplify the use of `hover:text-red focus:text-red` to `hocus:text-red`