require('webpack');
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
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
