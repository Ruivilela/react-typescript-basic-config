require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loaders: 'babel-loader',
        include: resolve(__dirname, '../')
      }
    ]
  },
  devServer: {
    port: 2711,
    host: '127.0.0.1',
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: resolve(__dirname, 'src/index.html')
      }
    )
  ]
};
