const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const MiniCSSExtractPLugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    publicPath: 'http://localhost:3001',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ]
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPLugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[hash].[ext]',
            outputPath: 'assets',
          }
        },
      }
    ],
  },
  plugins: [
    new MiniCSSExtractPLugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
      context: path.resolve(__dirname),
    }),
    new HtmlWebpackPlugin({
      title: 'Plugins',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: '**/app.*',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};