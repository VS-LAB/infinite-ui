const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Components = require('./get-components')()
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { getExternalsEl } = require('./get-externals-elements')
const entry = {}
Components.forEach(c => {
  entry[c] = `./packages/${c}/index.js`
})
// entry['vendor'] = ['element-ui', 'vue']
const webpackConfig = {
  mode: 'production',
  entry: entry,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd'
  },
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     common: {
    //       chunks: 'initial',
    //       name: 'common.js',
    //       minChunks: 2,
    //       priority: 10
    //     }
    //   }
    // }
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    ...getExternalsEl()
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  performance: {
    hints: false
  },
  stats: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin()

  ]
}

module.exports = webpackConfig
