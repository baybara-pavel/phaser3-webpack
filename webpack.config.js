'use strict';

const webpack = require('webpack');
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js')
    ],
    vendor: ['phaser']
  },

  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js?[chunkhash]',
  },

  watch: true,

  resolve: {
    alias: {
      Assets: path.join(__dirname, 'src/assets'),
    },
  },

  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|pvr|pkm)$/,
        use: ['file-loader?name=assets/[name].[ext]?[hash]'],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      lang: 'en',
      filename: 'index.html',
      template: './public/index.html',
      chunks: ['vendor', 'app'],
      chunksSortMode: 'manual',
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false,
        html5: false,
        minifyCSS: false,
        minifyJS: false,
        minifyURLs: false,
        removeComments: false,
        removeEmptyAttributes: false
      },
      hash: false
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8000
  }
};
