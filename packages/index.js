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
import InfiniteSelectTags from './infinite-select-tags'
import InfiniteTable from './infinite-table'
import InfiniteTableColumn from './infinite-table-column'
import InfiniteThemePicker from './infinite-theme-picker'
import InfiniteTree from './infinite-tree'
import InfiniteSteps from './infinite-steps'
import InfiniteStep from './infinite-step'

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
  InfiniteSelectTags,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTree,
  InfiniteSteps,
  InfiniteStep
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
  InfiniteSelectTags,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTree,
  InfiniteSteps,
  InfiniteStep
}
export default {
  install,
  version
}
