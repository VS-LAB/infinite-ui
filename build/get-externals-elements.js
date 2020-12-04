
// 配置打包排除组件
const config = {
  'InfiniteButton': {
    'element-ui/lib/button': 'element-ui/lib/button'
  },
  'InfiniteCascaders': {
    'element-ui/lib/input': 'element-ui/lib/input',
    'element-ui/lib/cascader': 'element-ui/lib/cascader',
    'element-ui/lib/date-picker': 'element-ui/lib/date-picker'
  },
  'InfiniteDialog': {
    'element-ui/lib/dialog': 'element-ui/lib/dialog'
  },
  'InfiniteForm': {
    'element-ui/lib/form': 'element-ui/lib/form',
    'element-ui/lib/form-item': 'element-ui/lib/form-item'
  },
  'InfiniteFormItem': {
    'element-ui/lib/input': 'element-ui/lib/input',
    'element-ui/lib/select': 'element-ui/lib/select',
    'element-ui/lib/option': 'element-ui/lib/option',
    'element-ui/lib/date-picker': 'element-ui/lib/date-picker',
    'element-ui/lib/switch': 'element-ui/lib/switch'
  },
  'InfiniteNavMenu': {
    'element-ui/lib/menu': 'element-ui/lib/menu',
    'element-ui/lib/menu-item': 'element-ui/lib/menu-item',
    'element-ui/lib/submenu': 'element-ui/lib/submenu'
  },
  'InfinitePagination': {
    'element-ui/lib/pagination': 'element-ui/lib/pagination'
  },
  'InfiniteSelectTags': {
    'element-ui/lib/input': 'element-ui/lib/input',
    'element-ui/lib/tag': 'element-ui/lib/tag',
    'element-ui/lib/select': 'element-ui/lib/select',
    'element-ui/lib/option': 'element-ui/lib/option',
    'element-ui/lib/checkbox': 'element-ui/lib/checkbox'
  },
  'InfiniteSelectTagsOption': {
    'element-ui/lib/tag': 'element-ui/lib/tag',
    'element-ui/lib/checkbox': 'element-ui/lib/checkbox',
    'element-ui/lib/tooltip': 'element-ui/lib/tooltip'
  },
  'InfiniteTable': {
    'element-ui/lib/table': 'element-ui/lib/table'
  },
  'InfiniteTableColumn': {
    'element-ui/lib/table': 'element-ui/lib/table',
    'element-ui/lib/table-column': 'element-ui/lib/table-column',
    'element-ui/lib/tooltip': 'element-ui/lib/tooltip'
  },
  'InfiniteThemePicker': {
    'element-ui/lib/color-picker': 'element-ui/lib/color-picker'
  },
  'InfiniteTree': {
    'element-ui/lib/tree': 'element-ui/lib/tree',
    'element-ui/lib/input': 'element-ui/lib/input'
  }
}

const getExternalsEl = function () {
  const externalsElUrl = {}
  Object.values(config).forEach(els => {
    Object.values(els).forEach(elUrl => {
      externalsElUrl[elUrl] = elUrl
    })
  })
  return externalsElUrl
}

module.exports = {
  config,
  getExternalsEl
}
