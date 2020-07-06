import '../plugins/element'
import ThemePicker from './ThemePicker/index'
import Button from './Button/index'
import './theme-chalk/src/index.scss'

const components = [
  ThemePicker,
  Button
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.1',
  install,
  ThemePicker,
  Button
}
