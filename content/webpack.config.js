const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')

const common = require('../common/webpack.common')

module.exports = merge(common, {
  //entry: ['./content/src/index.js'],
  entry: [path.join(__dirname, './src/index.js')],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'content.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'content.css',
      chunkFilename: 'content.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
})
