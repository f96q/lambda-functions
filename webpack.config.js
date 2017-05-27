module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: __dirname,
    filename: 'handler.js',
  },

  resolve: {
    extensions: ['.js', '.elm']
  },

  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: 'elm-webpack-loader'
        }
      }
    ],

    noParse: /\.elm$/
  }
};
