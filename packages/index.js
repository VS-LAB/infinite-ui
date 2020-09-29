/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import InfiniteButton from './infinite-button'
import InfiniteForm from './infinite-form'
import InfiniteTable from './infinite-table'
import InfiniteTableColumn from './infinite-table-column'
import InfiniteThemePicker from './infinite-theme-picker'
    const version = '0.0.2'
    const components = [
      InfiniteButton,
      InfiniteForm,
      InfiniteTable,
      InfiniteTableColumn,
      InfiniteThemePicker
    ]
    const install = Vue => {
      components.forEach(Component => {
        Vue.use(Component.name,Component)
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
      InfiniteForm,
      InfiniteTable,
      InfiniteTableColumn,
      InfiniteThemePicker
    }
    export default {
      install,
      version
    }
  