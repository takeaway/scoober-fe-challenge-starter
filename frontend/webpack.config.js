const {resolve} = require('path');
const {DefinePlugin, ProgressPlugin} = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const development = process.env.NODE_ENV === 'development';

module.exports = {
  mode: development ? 'development' : 'production',
  entry: resolve(__dirname, 'src'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: development ? 'script.js' : '[contenthash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          filter: resourcePath => !resourcePath.endsWith('index.html'),
        },
      ],
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    development && new ESLintPlugin({
      extensions: ['.tsx', '.ts'],
    }),
    development && new ReactRefreshWebpackPlugin(),
    !development && new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
    new HTMLWebpackPlugin({
      minify: true,
      filename: 'index.html',
      template: resolve(__dirname, 'public/index.html'),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          development ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
      },
    ],
  },
  devtool: development && 'eval-cheap-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true
  },
};
