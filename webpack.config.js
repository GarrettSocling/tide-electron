var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: ['font-awesome-webpack!./font-awesome.config.js','./app/src/main.js'],
    output: {
        path: './app/build',
        publicPath: 'build/',
        filename: 'build.js'
    },
    target: 'electron',
    resolve: {
      extensions: [
        "",".js",".json"
      ]
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "file-loader"
        }, { 
            test: /\.node$/,
            loader: "node-loader"
        }, { 
            test: /\.(html|css)$/,
            loader: "file-loader"
        }]
    },
    babel: {
        "presets": ["es2015"],
        "plugins": ["transform-runtime"]
    },
    plugins: [
        new webpack.ExternalsPlugin('commonjs', [
            'electron',
            'ptyw.js'
        ])
    ],
    devtool: 'source-map'
}
