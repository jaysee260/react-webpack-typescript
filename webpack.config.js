const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  NamedModulesPlugin
} = require('webpack');

const HTML_OPTIONS = {
  template: './src/index.html',
  minify: {
    collapseWhitespace: true,
    removeAttributeQuotes: true
  }
};

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(HTML_OPTIONS),
    new ExtractTextPlugin('style.css'),
    new CleanWebpackPlugin(['dist']),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  devServer: {
    port: 3000,
    contentBase: './',
    historyApiFallback: true
  }
};
