/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import InfiniteButton from './infinite-button'
import InfiniteCascaders from './infinite-cascaders'
import InfiniteDialog from './infinite-dialog'
import InfiniteForm from './infinite-form'
import InfiniteLineChart from './infinite-line-chart'
import InfiniteNavMenu from './infinite-nav-menu'
import InfinitePagination from './infinite-pagination'
import InfinitePieChart from './infinite-pie-chart'
import InfiniteTable from './infinite-table'
import InfiniteTableColumn from './infinite-table-column'
import InfiniteThemePicker from './infinite-theme-picker'
import InfiniteTree from './infinite-tree'
const version = '0.0.3'
const components = [
  InfiniteButton,
  InfiniteCascaders,
  InfiniteDialog,
  InfiniteForm,
  InfiniteLineChart,
  InfiniteNavMenu,
  InfinitePagination,
  InfinitePieChart,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTree
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
  InfiniteCascaders,
  InfiniteDialog,
  InfiniteForm,
  InfiniteLineChart,
  InfiniteNavMenu,
  InfinitePagination,
  InfinitePieChart,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTree
}
export default {
  install,
  version
}
