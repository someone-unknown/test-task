  const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
      validation: path.resolve(__dirname, 'resource/validation'),
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

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '.env'), to: path.resolve(__dirname, 'build') },
      ],
    }),
  ],
};