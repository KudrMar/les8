const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExstractPlugin = require('mini-css-extract-plugin');
const path = require('node:path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        },
    entry: "./src/index.js",
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        },
        {
            test: /\.css$/,
            use: [
                MiniCSSExstractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                },
            ],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCSSExstractPlugin({
        }
       )
    ] 
}


