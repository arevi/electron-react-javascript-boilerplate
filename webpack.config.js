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
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    output: {
      path: __dirname + '/build',
      publicPath: './',
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'src/renderer/index.html'
      })
    ]
  }
];
