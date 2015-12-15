var webpack = require('webpack');
var path = require('path');

var ignore = new webpack.IgnorePlugin(new RegExp("\.svg$"));

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],

  plugins: [ignore],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      include: path.join(__dirname, 'app'),
      test: /\.jsx?$/,
      loaders: ['babel']
    },{
      test: /\.css$/,
      loaders: ['style','css']
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};

module.exports = config;
