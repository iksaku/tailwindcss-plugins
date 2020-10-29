module.exports = {
    purge: {
        options: {
            whitelistPatternsChildren: [
                /markdown$/
            ]
        }
    },

    plugins: [
        require('../src/markdown')
    ]
}