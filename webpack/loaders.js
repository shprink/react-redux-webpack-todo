'use strict';

exports.jsx = {
    test: /\.jsx?$/,
    loader: 'babel', // 'babel-loader' is also a legal name to reference
    query: {
        presets: ['es2015']
    },
    exclude: /(node_modules|test-utils|\.test\.js$)/
};

exports.html = {
    test: /\.html$/,
    loader: 'raw',
    exclude: /node_modules/
};

exports.css = {
    test: /\.css$/,
    loader: 'style-loader!css-loader!postcss-loader',
    exclude: /node_modules/
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
    return {
        test: pattern,
        loader: 'url',
        exclude: /node_modules/
    };
}
