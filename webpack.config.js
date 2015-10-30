var path = require('path');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      include: path.join(__dirname, 'app'),
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loaders: ['babel'] // The module to load. "babel" is short for "babel-loader"
    }]
  }
};

module.exports = config;
