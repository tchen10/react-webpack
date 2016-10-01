var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
const root = process.env.PWD;

module.exports = {
  entry: './app/main/main.jsx',
  output: {
    filename: 'index_bundle.js',
    path:  './dist'
  },
  externals: {
    'react/addons': true,
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, include: root + '/app',loader: 'babel-loader'},
      {test: /\.css$/, include: root + '/app',loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
