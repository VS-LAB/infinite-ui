/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import InfiniteButton from './infinite-button'
import InfiniteThemePicker from './infinite-theme-picker'
import InfiniteTable  from './infinite-table'
    const version = '0.0.2'
    const components = [
      InfiniteButton,
  InfiniteThemePicker
    ]
    const install = Vue => {
      components.forEach(Component => {
        Vue.use(Component)
      })

    };
    /* istanbul ignore if */
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    export {
      install,
      version,
      InfiniteButton,
      InfiniteThemePicker,
      InfiniteTable
    }
    export default {
      install,
      version
    }
  