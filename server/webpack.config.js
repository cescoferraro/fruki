const path = require('path')
const BrotliPlugin = require('brotli-webpack-plugin')

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
  plugins: [
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
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
