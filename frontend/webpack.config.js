const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
},
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
},
devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    // watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
    new CleanWebpackPlugin(),
],
    module: {
      rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
          }
      },
      {
          test: /\.(html)$/,
          use: ['html-loader']
      }
      ]
    }
  };