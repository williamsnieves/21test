const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.base.config.babel')

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: './',
    chunkFilename: 'js/[id].[chunkhash].js',
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '../')}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(__dirname, '../modules-manifest.json'))
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new ExtractTextPlugin('css/[name].[hash].css')
  ]
})
