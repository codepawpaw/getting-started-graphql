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
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0
  })
];

module.exports = webpackPlugin;
