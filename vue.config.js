const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    modules: false
  },
  chainWebpack: config => {
    if (isProduction) {
      const imagesRule = config.module.rule('svg')
      imagesRule.uses.clear()
      imagesRule.use('url-loader')
        .loader('url-loader')
        .options({
          limit: 5120,
          esModule: false
        })
    }
    config.module
      .rule('js')
      .include
      .add(resolve('./packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
