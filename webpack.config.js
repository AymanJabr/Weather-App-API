module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000
  },
};
