const path = require('path')
const HTMLplugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src/components'),
            '@auth': path.resolve(__dirname, 'src/components/Auth'),
            '@dashboard': path.resolve(__dirname, 'src/components/Dashboard')
        }
    },
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.js(x?)$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devServer: { historyApiFallback: true },
    plugins: [new HTMLplugin({template: 'index.html'})]
}