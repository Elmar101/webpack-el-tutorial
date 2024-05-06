const path = require('path');

const mode = process.env.NODE_ENV ==='production' ? 'production' : 'development';
module.exports = {
    mode,
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static: './public/',
    },
}