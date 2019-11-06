const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: { 
    path: __dirname + '/build',
    publicPath: '/',
     filename: 'bundle.js' },
   devServer: { contentBase: './build', },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader',],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({template: path.resolve('./index.html')}),
  ]
}
