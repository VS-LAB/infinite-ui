/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import InfiniteButton from './infinite-button'
import InfiniteDialog from './infinite-dialog'
import InfiniteForm from './infinite-form'
import InfiniteNavMenu from './infinite-nav-menu'
import InfiniteTable from './infinite-table'
import InfiniteTableColumn from './infinite-table-column'
import InfiniteThemePicker from './infinite-theme-picker'
    const version = '0.0.3'
    const components = [
      InfiniteButton,
  InfiniteDialog,
  InfiniteForm,
  InfiniteNavMenu,
  InfiniteTable,
  InfiniteTableColumn,
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
  InfiniteDialog,
  InfiniteForm,
  InfiniteNavMenu,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker
    }
    export default {
      install,
      version
    }
  