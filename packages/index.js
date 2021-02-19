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
import InfiniteSelectTagsOption from './infinite-select-tags-option'
import InfiniteTable from './infinite-table'
import InfiniteTableColumn from './infinite-table-column'
import InfiniteThemePicker from './infinite-theme-picker'
import InfiniteTree from './infinite-tree'
import InfiniteDownload from './infinite-download'
const version = '1.0.4'
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
  InfiniteSelectTagsOption,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTree,
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
  Vue.prototype.$InfiniteDownload = InfiniteDownload;
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
  InfiniteSelectTagsOption,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTree,
  InfiniteDownload
}
export default {
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
  InfiniteSelectTagsOption,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTree,
  InfiniteDownload
}
