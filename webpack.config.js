var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
    './web/static/js/app.js',
    './web/static/js/components/board.js',
    './web/static/js/components/departure-list.js'
  ]
  },
  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
};
