const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: 'lemix.min.js',
    path: path.resolve(__dirname, 'dist')
  }
};