var webpackPlugin;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const Webpack = require('webpack');

webpackPlugin = [
  new Webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new ExtractTextPlugin("style.css"),
  new Webpack.optimize.ModuleConcatenationPlugin(),
  new Webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false,
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true
    },
    output: {
      comments: false,
    },
    exclude: [/\.min\.js$/gi]
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0
  })
];

module.exports = webpackPlugin;
