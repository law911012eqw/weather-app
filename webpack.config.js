const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "path": false,
      "fs": false
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader','sass'],
      },
      {
        test: /\.(html)$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/temp.html',
      title: 'Check today\'s weather..',
      favicon: 'src/img/umbrella.svg'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(dotenv.config().parsed)
    })
  ]
}