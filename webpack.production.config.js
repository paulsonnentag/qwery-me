var path = require('path');

var config = {
  entry: [
    path.resolve(__dirname, 'app/main.js')
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      include: path.join(__dirname, 'app'),
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loaders: ['babel'] // The module to load. "babel" is short for "babel-loader"
    },{
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;
