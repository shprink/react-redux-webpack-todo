'use strict';

const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

var paths = {
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src')
}

const baseAppEntries = [
    './src/index.jsx'
];

const devAppEntries = [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server'
];

const appEntries = baseAppEntries
    .concat(process.env.NODE_ENV === 'development' ? devAppEntries : []);

const basePlugins = [
    new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
    })
];

const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin({ title: pkg.name })
];

const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

const plugins = basePlugins
    .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
    .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {

    entry: {
        app: appEntries,
        vendor: [
            'es5-shim',
            'es6-shim',
            'es6-promise',
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'redux-thunk'
        ]
    },
    output: {
        path: paths.dist,
        filename: '[name].[hash].js',
        publicPath: '/',
        sourceMapFilename: '[name].[hash].js.map',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.jsx', '.js']
    },

    plugins: plugins,

    //   devServer: {
    //     historyApiFallback: { index: '/' },
    //     proxy: proxy(),
    //   },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint",
                exclude: /node_modules/
            }
        ],
        loaders: [{
            test: /\.(jsx|js)?$/,
            loader: 'react-hot!babel?presets=es2015',
            include: paths.src,
            exclude: /(\.test\.js$)/
        }, {
                test: /\.css$/,
                loaders: ['style', 'css?modules&localIndentName=[local]---[hash:base64:8]', 'cssnext'],
                include: paths.src,
            }, {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    }
};
