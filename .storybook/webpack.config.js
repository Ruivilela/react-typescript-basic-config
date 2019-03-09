module.exports = {
  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader'
        }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
