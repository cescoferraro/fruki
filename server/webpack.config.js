const path = require('path')
const BrotliPlugin = require('brotli-webpack-plugin')
const PLUGIN_NAME = 'TimeLoggerPlugin'

class TimeLoggerPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap(PLUGIN_NAME, (compiler) => {
      const logger = compiler.getInfrastructureLogger(PLUGIN_NAME)
      logger.info(
        `[Message from ${PLUGIN_NAME}] Compilation Done ${new Date().toLocaleString()}`
      )
    })
  }
}

module.exports = {
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
    new TimeLoggerPlugin(),
  ],
  devServer: {},
}
