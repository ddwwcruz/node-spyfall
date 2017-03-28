const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './src/cli'),
    entry: './index.tsx',
    output: {
        filename: 'index.js',
        path: `${__dirname}/build/cli`
    },
    devtool: 'source-map',
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json'
        ],
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /src\/server/
            }
        ]
    },
}
