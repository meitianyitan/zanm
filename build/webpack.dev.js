const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 在 Webpack 中强制模块路径区分大小写
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    'zanm-docs': './docs/src/index.js',
    'zanm-mobile': './docs/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  serve: {
    open: true,
    host: '127.0.0.1',
    devMiddleware: {
      logLevel: 'warn'
    },
    hotClient: {
      logLevel: 'warn',
      allEntries: true
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      packages: path.join(__dirname, '../packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          'fast-vue-md-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['zanm-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['zanm-mobile'],
      template: 'docs/src/index.tpl',
      filename: 'mobile.html',
      inject: true
    }),
    new CaseSensitivePathsPlugin()
  ]
};
