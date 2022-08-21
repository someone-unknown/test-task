const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',

  entry: {
    app: path.resolve(__dirname, 'resource/index.ts'),
    update: path.resolve(__dirname, 'resource/job/update.ts'),
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js',
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      configuration: path.resolve(__dirname, 'resource/configuration'),
      database: path.resolve(__dirname, 'resource/database'),
      guard: path.resolve(__dirname, 'resource/guard'),
      route: path.resolve(__dirname, 'resource/route'),
      validator: path.resolve(__dirname, 'resource/validator'),
    }
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