/**
 * webpack base config
 *
 * @author kern
 * @since 2019.04.03 - draft
 */
'use strict';

const path = require('path');

const srcPath = path.resolve(__dirname, '..', 'src');
const distPath = path.resolve(__dirname, '..', 'dist', 'js');

module.exports = {
  entry: {
    'background': path.join(srcPath, 'background.js'),
    'content': path.join(srcPath, 'content.js'),
    'popup': path.join(srcPath, 'popup', 'Root.js'),
  },
  ouput: {
    filename: '[name].js',
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|dist)/,
        loader: 'json-loader',
      },
      {
        test: /\.(json|jpg|png|jpeg|gif)$/,
        exclude: /(node_modules|dist)/,
        loader: 'file-loader',
        options: {
          outputPath: distPath,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  //  path resolver
  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules',
    ],
    alias: {
      'components': path.resolve(srcPath, 'popup', 'components'),
      'util': path.resolve(srcPath, 'popup', 'util'),
      'constants': path.resolve(srcPath, 'popup', 'stores'),
      'screens': path.resolve(srcPath, 'popup', 'screens'),
    },
  },
};