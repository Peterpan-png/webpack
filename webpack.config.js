const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: '芳芳',
            template: 'src/assets/index.html'
        }),
    ],
    output: {
        filename: 'index.[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, ],
    },
};