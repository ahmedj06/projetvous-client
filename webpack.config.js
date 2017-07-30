//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var extractCSS = new ExtractTextPlugin('bundle.css');
var webpack = require('webpack');
var path = require('path');
var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: "bundle.js",
        publicPath: "/app/"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css', '.json']
    },
    module: {
        loaders: [
            // Loaders
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                include: SRC_DIR,
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
        ]
    },
}

module.exports = config;