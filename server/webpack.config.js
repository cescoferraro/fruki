const path = require('path')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: `${__dirname}/bundle.tsx`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  devServer: {
    stats: {
      assets: false,
      hash: false,
      chunks: false,
      errors: true,
      errorDetails: true,
    },
    overlay: true,
  },
}
