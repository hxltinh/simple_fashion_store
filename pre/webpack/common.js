/*
 *  webpack common config for all enviroment
 */
const path = require('path');
const webpack = require('webpack');
const envConfig = require('./config.json')[process.env.NODE_ENV];

module.exports = {
  cache: true,
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: [
      './src/js/main.js'
    ],
    vendor: [
      'babel-polyfill'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./client/app')
  },

  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules'],
    // alias: { 'singleton': path.resolve('./src/js/singletons/index.js') },
    root: [
      path.resolve('./src/js')
    ]
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: [ 'react', 'es2015' ] } },
      { test: /\.html$/, loader: 'raw' },
      { test: /.(gif|jpg|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader' },
      // { test: /\.tpl$/, loader: 'html' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  stats: {
    cached: true,
    cachedAssets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
    hash: false,
    reasons: true,
    timings: true,
    version: false
  }
};
