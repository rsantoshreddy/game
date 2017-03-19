var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './src/app/index',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./src"
    },
    module: {
        preloaders: [{
            test: [/\.js$/, /\.es6$/],
            exclude: /node_modules/,
            loader: "jshint-loader"
        }],
        loaders: [{
            test: [/\.es6$/, /\.js$/],
            exclude: /node_modules/,
            loader: "babel-loader",
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader",
        }]
    },
    resolve: {
        extensions: ["", ".js", ".es6"]
    },
    watch: true
}
