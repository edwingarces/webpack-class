const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    publicPath: 'http://localhost:3000/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  experiments: {
    topLevelAwait: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 3000,
    hot: true,
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
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          }
        },
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Plugins',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};