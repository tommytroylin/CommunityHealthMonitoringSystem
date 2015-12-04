var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {app: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')]},
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.png$/, loader: 'url?limit=10000&mimetype=image/png'},
            {test: /\.jpg$/, loader: 'url?limit=10000&mimetype=image/jpeg'}
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {}),
        new CopyWebpackPlugin([
            {from: 'node_modules/jquery/dist/jquery.min.js', to: 'lib/jquery.min.js'},
            {from: 'node_modules/highcharts-release/highcharts.js', to: 'lib/highcharts.js'},
            {from: 'node_modules/highcharts-release/highcharts-more.js', to: 'lib/highcharts-more.js'},
            {from: 'node_modules/highmaps-release/modules/map.js', to: 'lib/map.js'},
            {from: 'node_modules/jquery-knob/dist/jquery.knob.min.js', to: 'lib/jquery.knob.min.js'},
        ])
    ]
};
