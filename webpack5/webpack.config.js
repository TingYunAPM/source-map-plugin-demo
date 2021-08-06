const path = require('path');
const TingyunSourceMapWebpackPlugin = require('@tingyun-common/source-map-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    new TingyunSourceMapWebpackPlugin({
      include: './dist',
    })
  ]
};