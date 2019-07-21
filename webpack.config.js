const CopyPlugin = require('copy-webpack-plugin');

const isDebug = !process.argv.includes('--release');

module.exports = {
  entry: isDebug ? [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/dev.js'
  ] : [
    './src/index.js'
  ],
  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.svg$/,
      use: '@svgr/webpack',
    },
  ]},
  plugins: [
    new CopyPlugin([
      {
        from: 'public/',
        to: '../build/'
      }
    ]),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: isDebug ? 'development' : 'production',
  devServer: {
    contentBase: './public',
    hot: true
  }
};
