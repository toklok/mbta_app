module.exports = {
  entry: './web/static/js/app.js',
  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }]
  },
  resolve: {
    modulesDirectories: [ 'node_modules', __dirname + '/web/static/js' ]
  }
}
