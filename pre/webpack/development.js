const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const envConfig = require('./config.json')[process.env.NODE_ENV];
const commonConf = require('./common');

module.exports = () => {
  const config = _.cloneDeep(commonConf);

  config.devtool = 'source-map';

  config.debug = true;

  config.entry.bundle = config.entry.bundle.concat([
    `webpack-dev-server/client?http://0.0.0.0:${envConfig.api.port}`,
    'webpack/hot/dev-server'
  ]);

  config.output.publicPath = '/assets/';

  // config.module.preLoaders = [
  //   { test: /\.js?$/, loader: 'eslint', exclude: /node_modules/ }
  // ];

  config.module.loaders = config.module.loaders.concat([
    { test: /\.scss$/, loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]},
    { test: /\.css$/, loaders: [ 'style', 'css?sourceMap' ] }
  ]);

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      '__env__': JSON.stringify(process.env.NODE_ENV),
      '__apiHostName__': JSON.stringify( envConfig.api.host ),
      '__apiPort__': JSON.stringify( envConfig.api.port ),
      '__invokeUrl__': JSON.stringify( envConfig.invokeUrl ),
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]);

  const devServerConfig = {
    noInfo: true,
    hot: true,
    contentBase: './src',
    publicPath: 'http://0.0.0.0:4000/assets/',
    host: envConfig.api.host,
    port: envConfig.api.port,
    historyApiFallback: true,
    proxy: {
      '/api/*': 'http://0.0.0.0:3000/'
    }
  };

  return {
    config,
    devServerConfig,
    envConfig
  };
}
