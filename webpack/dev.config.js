const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: 'build',
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new OpenBrowserPlugin({url: 'http://localhost:8080', browser: 'chrome'})
  ],
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true,
    inline: true
  }
});