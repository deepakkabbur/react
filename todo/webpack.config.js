const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: './public/index.html',
  inject: 'body'
});
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
