const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  experiments: {
    topLevelAwait: true,
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
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
          'style-loader',
          'css-loader',
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
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Plugins',
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};