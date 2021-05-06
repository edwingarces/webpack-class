const path = require('path');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    landing: path.resolve(__dirname, 'src/js/landing.js'),
    post: path.resolve(__dirname, 'src/js/post.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  mode: 'development',
};