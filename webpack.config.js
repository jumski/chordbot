const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    rules: [
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        // options: {
        //   // Emit errors instead of warnings (default = false)
        //   error: false,
        //   // enable snazzy output (default = true)
        //   snazzy: true,
        //   // other config options to be passed through to standard e.g.
        //   parser: 'babel-eslint'
        // }
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
	test: /\.css$/,
	use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s(c|a)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        loader: ["raw-loader"],
      },
    ],
  },
};
