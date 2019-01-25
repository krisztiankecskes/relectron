const paths = require('./paths');
const html = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: './src/App.js',

  output: {
    filename: 'bundle.js',
    path: paths.build
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new html({
      template: './src/App.html'
    }),
    new webpack.ProgressPlugin()
  ],

  target: 'node'

}