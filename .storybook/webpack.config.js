const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loaders: 'babel-loader',
        include: resolve(__dirname, '../')
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
