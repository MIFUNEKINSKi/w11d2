const path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/], // change to this in when we add react
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'] // change to this when we add react
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'] // change to this when we add react
  }
};
