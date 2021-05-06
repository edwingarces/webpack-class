const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPLugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  mode: 'production',
  output: {
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[chunkhash].js',
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
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCSSExtractPLugin.loader,
          },
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPLugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCSSExtractPLugin.loader,
          },
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
          }
        },
      }
    ],
  },
  plugins: [
    new MiniCSSExtractPLugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Plugins',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};