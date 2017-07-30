//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var extractCSS = new ExtractTextPlugin('bundle.css');
var webpack = require('webpack');
var path = require('path');
var DIST_DIR = path.resolve(__dirname, 'public/dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var PUBLIC_DIR = path.resolve(__dirname, 'public/');

var config = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/public/"
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