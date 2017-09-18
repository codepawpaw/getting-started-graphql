module.exports = function(env) {
  let path, webpackModule, webpackResolve;

  if(!env) {
    env = 'dev';
  }

  path = require('path');
  webpackModule = require(`./webpack.module.config.${env}.js`);
  webpackPlugin = require(`./webpack.plugin.config.${env}.js`);
  webpackResolve = require('./webpack.resolve.config.js');

  return {
    entry: './app/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: webpackModule,
    plugins: webpackPlugin,
    resolve: webpackResolve,
    devtool: 'source-map',
    cache: false
  };
}
