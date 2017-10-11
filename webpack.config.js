var path = require('path');
var FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['./src/Index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Utils: path.resolve(__dirname, 'src/utils/'),
      Core: path.resolve(__dirname, 'src/core/'),
      Redux: path.resolve(__dirname, 'src/redux')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new FlowBabelWebpackPlugin()]
};
