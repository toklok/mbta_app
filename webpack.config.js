var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: './web/static/js/app.js',
  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('../css/app.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css?sourceMap!sass?sourceMap')
      }
  ]
}
}
