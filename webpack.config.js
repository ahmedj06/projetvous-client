"use strict";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('bundle.css');
//var nodeExternals = require('webpack-node-externals');

var webpack = require('webpack');
var path = require('path');
var DIST_DIR = path.resolve(__dirname, 'public/dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var PUBLIC_DIR = path.resolve(__dirname, 'public');

var config = {
    //target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: SRC_DIR + '/index.js',
    output: {
        //publicPath: "./public",
        path: DIST_DIR + "/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css', '.json']
    },
    //devtool: 'inline-source-map',
    devServer: {
        //publicPath: "./",
        contentBase: "./",
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            // Loaders
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                include: SRC_DIR,
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
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
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractCSS
    ],
    externals: {
        // exclude react
        "react": "React",
        "react-dom": "ReactDOM"
    }
}

module.exports = config;