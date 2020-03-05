const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './src/main/index.js',
    name: 'electron',
    target: 'electron-main',
    resolve: {
      extensions: ['*', '.js', '.json']
    },
    output: {
      path: __dirname + '/build',
      publicPath: '/',
      filename: 'app.js'
    },
    plugins: []
  },
  {
    entry: './src/renderer/index.js',
    name: 'react',
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.css', '.svg']
    },
    output: {
      path: __dirname + '/build',
      publicPath: './',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: __dirname + '/build/',
      compress: true
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'src/renderer/index.html'
      })
    ]
  }
];
