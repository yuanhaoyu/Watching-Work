var webpack = require('webpack');
var extract = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        "index": "./static/src/js/index.js",
        "login": "./static/src/js/login.js",
        "regist": "./static/src/js/regist.js",
        "mine": "./static/src/js/mine.js",
        "money": "./static/src/js/money.js",
        "taskList": "./static/src/js/taskList.js",
        "taskMore": "./static/src/js/taskMore.js",
    },
    output: {
        path: __dirname + '/static/dist',
        filename: "./js/[name].app.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: extract.extract("style", "css!autoprefixer!sass")
        }, {
            test: /\.js$/,
            loaders: ['babel?presets[]=es2015'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader?name=./image/[name].[ext]'
        }, {
            test: /\.(ico|woff|eot|ttf|svg)$/,
            loader: 'file-loader?name=./font/[name].[ext]'
        },{
            test: /\.vue$/,
            loader: 'vue',
            query: {
                loaders: {
                    css: 'style!css!autoprefixer!sass'
                }
            }
        }]
    },
    plugins: [
        new extract("./css/[name].app.css")
    ]
};
