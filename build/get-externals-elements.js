var path = require('path')
var fs = require('fs')
var elConponentList = fs.readdirSync(path.resolve(__dirname, '../node_modules/element-ui/lib'))
const { name } = require('../package.json')
// 获取文件名称（去掉扩展名）
function getFileName (data) {
  return data.substring(0, data.lastIndexOf('.'))
}
// 配置打包排除组件
const config = {
  // antv/g2依赖
  '@antv/g2/lib/core': '@antv/g2/lib/core',
  '@antv/g2/lib/geometry/line': '@antv/g2/lib/geometry/line',
  '@antv/g2/lib/geometry/point': '@antv/g2/lib/geometry/point',
  '@antv/g2/lib/geometry/interval': '@antv/g2/lib/geometry/interval',
  '@antv/g2/lib/chart/controller/axis': '@antv/g2/lib/chart/controller/axis',
  '@antv/g2/lib/chart/controller/tooltip': '@antv/g2/lib/chart/controller/tooltip',
  '@antv/g2/lib/chart/controller/legend': '@antv/g2/lib/chart/controller/legend',
  '@antv/coord/lib/factory': '@antv/coord/lib/factory',
  '@antv/g-canvas': '@antv/g-canvas',
  // 公共依赖
  [`${name}/packages/utils/index`]: 'infinite-ui/lib/utils/index',
  [`${name}/packages/mixins/chart`]: 'infinite-ui/lib/mixins/chart'
}

elConponentList.forEach(file => {
  if (file.includes('.js')) {
    config[`element-ui/lib/${getFileName(file)}`] = `element-ui/lib/${getFileName(file)}`
  }
})

const getExternalsEl = function (include) {
  const externalsElUrl = {}
  Object.keys(config).forEach(key => {
    if (!include || key.includes(include)) {
      externalsElUrl[key] = config[key]
    }
  })
  return externalsElUrl
}
module.exports = {
  config,
  getExternalsEl,
  elConponentList
}
