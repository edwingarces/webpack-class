const path = require('path');
const MiniCSSExtractPLugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPLugin.loader,
          },
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Plugins',
    }),
    new MiniCSSExtractPLugin({
      filename: 'css/[name].css',
    }),
  ],
};