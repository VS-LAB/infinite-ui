
// 配置打包排除组件
const config = {
  // element依赖
  'element-ui/lib/button': 'element-ui/lib/button',
  'element-ui/lib/input': 'element-ui/lib/input',
  'element-ui/lib/cascader': 'element-ui/lib/cascader',
  'element-ui/lib/date-picker': 'element-ui/lib/date-picker',
  'element-ui/lib/dialog': 'element-ui/lib/dialog',
  'element-ui/lib/form': 'element-ui/lib/form',
  'element-ui/lib/form-item': 'element-ui/lib/form-item',
  'element-ui/lib/select': 'element-ui/lib/select',
  'element-ui/lib/option': 'element-ui/lib/option',
  'element-ui/lib/switch': 'element-ui/lib/switch',
  'element-ui/lib/menu': 'element-ui/lib/menu',
  'element-ui/lib/menu-item': 'element-ui/lib/menu-item',
  'element-ui/lib/submenu': 'element-ui/lib/submenu',
  'element-ui/lib/pagination': 'element-ui/lib/pagination',
  'element-ui/lib/tag': 'element-ui/lib/tag',
  'element-ui/lib/checkbox': 'element-ui/lib/checkbox',
  'element-ui/lib/tooltip': 'element-ui/lib/tooltip',
  'element-ui/lib/table': 'element-ui/lib/table',
  'element-ui/lib/table-column': 'element-ui/lib/table-column',
  'element-ui/lib/color-picker': 'element-ui/lib/color-picker',
  'element-ui/lib/tree': 'element-ui/lib/tree',
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
  'infinite-ui/packages/utils/index': 'infinite-ui/lib/utils/index'
  // 'infinite-ui/packages/utils/index': 'finite-ui-wz/lib/utils/index'
  // 公共依赖
}

const getExternalsEl = function (external) {
  const externalsElUrl = {}
  Object.keys(config).forEach(key => {
    if ((external && !key.includes(external)) || (!external)) {
      externalsElUrl[key] = config[key]
    }
  })
  return externalsElUrl
}

module.exports = {
  config,
  getExternalsEl
}
