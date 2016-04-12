import path from 'path';
import webpackConfig from './webpack.config'

let testFileNamePattern = '**/*.spec.js';

let karmaConfig = {
    basePath: path.join(__dirname),
    files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        path.join('./src', testFileNamePattern)
    ],
    browsers: ['PhantomJS'],
    reporters: ['kjhtml'],
    frameworks: ['jasmine'],
    preprocessors: {
        [path.join('./src', testFileNamePattern)]: ['webpack']
    },
    webpack: {
        resolve: webpackConfig.resolve,
        module: {
            loaders: webpackConfig.module.loaders
        }
    }
}

module.exports = (config) => config.set(karmaConfig);
