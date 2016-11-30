var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    loarders: [
      {
        test: /\.ts/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
      }, {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.css/,
        loader: 'raw-loader'
      }
    ]
  }
};
