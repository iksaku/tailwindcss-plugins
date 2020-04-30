const generateCSS = require('../../jest/generateCSS')

const plugins = [
    require('../../plugins/components/markdown')
]

test('it generates markdown component', async () => {
    const css = await generateCSS(plugins, {}, '@tailwind components')

    return expect(css).toMatchCSS(`
        .markdown {
          font-size: 1.125rem;
          line-height: 1.375;
        }
    
        .markdown:first-child {
          margin-top: 0 !important;
        }
    
        .markdown:last-child {
          margin-bottom: 0 !important;
        }
    
        .markdown code {
          font-family: Menlo;
          font-family: Monaco;
          font-family: Consolas;
          font-family: "Liberation Mono";
          font-family: "Courier New";
          font-family: monospace;
          background-color: #edf2f7;
          border-radius: 0.25rem;
          font-size: .9rem;
          padding: .15rem .3rem;
        }
    
        @media (prefers-color-scheme: dark) {
          .markdown code {
            background-color: #4a5568;
          }
        }
    
        .markdown p {
          font-family: system-ui;
          font-family: -apple-system;
          font-family: BlinkMacSystemFont;
          font-family: "Segoe UI";
          font-family: Roboto;
          font-family: "Helvetica Neue";
          font-family: Arial;
          font-family: "Noto Sans";
          font-family: sans-serif;
          font-family: "Apple Color Emoji";
          font-family: "Segoe UI Emoji";
          font-family: "Segoe UI Symbol";
          font-family: "Noto Color Emoji";
          margin-bottom: 1rem;
        }
    
        .markdown a {
          cursor: pointer;
          text-color: #4299e1;
          transition: background-color, border-color, color, fill, stroke;
          transition-duration: 100ms;
        }
    
        .markdown a:hover,.markdown a:focus {
          text-color: #2b6cb0;
        }
    
        .markdown a:focus {
          outline: 0;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
        }
    
        .markdown pre {
          margin-bottom: 1rem;
        }
    
        .markdown pre code {
          font-size: 0.875rem;
          border-radius: 0.5rem;
          -webkit-overflow-scrolling: touch;
        }
    
        @media (prefers-color-scheme: dark) {
          .markdown pre {
            border-width: 1px;
            border-color: #718096;
          }
        }
    
        .markdown ol,.markdown ul {
          list-style-position: inside;
          margin: 0.5rem 0 0.5rem 1rem;
        }
    
        .markdown ol li ol,.markdown ol li ul,.markdown ul li ol,.markdown ul li ul {
          margin-top: 0;
        }
    
        .markdown ol li ol li ol, .markdown ol li ul li ol, .markdown ul li ol li ol, .markdown ul li ul li ol {
          list-style-type: lower-latin;
        }
    
        .markdown ol li ol li ul, .markdown ol li ul li ul, .markdown ul li ol li ul, .markdown ul li ul li ul {
          list-style-type: square;
        }
    
        .markdown ol li ol, .markdown ul li ol {
          list-style-type: lower-roman;
        }
    
        .markdown ol li ul, .markdown ul li ul {
          list-style-type: circle;
        }
    
        .markdown ol {
          list-style-type: list-decimal;
        }
    
        .markdown ul {
          list-style-type: list-disc;
        }
    
        .markdown h1,.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6 {
          font-weight: 700;
          padding-bottom: 0.75rem;
          margin: 1.5rem 0 1rem 0;
        }
    
        .markdown h1 .permalink, .markdown h2 .permalink, .markdown h3 .permalink, .markdown h4 .permalink, .markdown h5 .permalink, .markdown h6 .permalink {
          text-color: #4a5568;
          margin-left: 0.5rem;
          transition: background-color, border-color, color, fill, stroke;
          transition-duration: 100ms;
        }
    
        @media (prefers-color-scheme: dark) {
          .markdown h1 .permalink, .markdown h2 .permalink, .markdown h3 .permalink, .markdown h4 .permalink, .markdown h5 .permalink, .markdown h6 .permalink {
            text-color: #a0aec0;
          }
        }
    
        .markdown h1 .permalink:hover,.markdown h1 .permalink:focus,.markdown h2 .permalink:hover,.markdown h2 .permalink:focus,.markdown h3 .permalink:hover,.markdown h3 .permalink:focus,.markdown h4 .permalink:hover,.markdown h4 .permalink:focus,.markdown h5 .permalink:hover,.markdown h5 .permalink:focus,.markdown h6 .permalink:hover,.markdown h6 .permalink:focus {
          text-color: #4299e1;
        }
    
        .markdown h1 .permalink svg, .markdown h2 .permalink svg, .markdown h3 .permalink svg, .markdown h4 .permalink svg, .markdown h5 .permalink svg, .markdown h6 .permalink svg {
          font-size: 0.875rem;
        }
    
        .markdown h1,.markdown h2 {
          border-bottom-width: 1px;
          border-color: #cbd5e0;
        }
    
        @media (prefers-color-scheme: dark) {
          .markdown h1, .markdown h2 {
            border-color: #718096;
          }
        }
    
        .markdown h1 {
          font-size: 1.875rem;
        }
    
        .markdown h2 {
          font-size: 1.5rem;
        }
    
        .markdown h3 {
          font-size: 1.25rem;
        }
    
        .markdown h4 {
          font-size: 1.125rem;
        }
    
        .markdown h5 {
          font-size: 1rem;
        }
    
        .markdown h6 {
          font-size: 0.875rem;
        }
    `)
})