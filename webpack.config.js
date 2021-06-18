const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'console-controller.min.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'src')],
  },
  mode: 'development',
  devtool: 'source-map'
};
