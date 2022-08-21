const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',

  entry: {
    app: path.resolve(__dirname, 'resource/index.ts'),
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, 'resource'),
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },
};