const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: [
          path.resolve(__dirname, 'client'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
  },
};

