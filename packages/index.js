/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import InfiniteButton from './infinite-button'
import InfiniteCard from './infinite-card'
import InfiniteCascaders from './infinite-cascaders'
import InfiniteDialog from './infinite-dialog'
import InfiniteDownload from './infinite-download'
import InfiniteDragContainer from './infinite-drag-container'
import InfiniteForm from './infinite-form'
import InfiniteFormSearch from './infinite-form-search'
import InfiniteLineChart from './infinite-line-chart'
import InfiniteNavMenu from './infinite-nav-menu'
import InfiniteOperation from './infinite-operation'
import InfiniteOption from './infinite-option'
import InfinitePagination from './infinite-pagination'
import InfinitePieChart from './infinite-pie-chart'
import InfiniteResult from './infinite-result'
import InfiniteScrollbar from './infinite-scrollbar'
import InfiniteSelect from './infinite-select'
import InfiniteSelectTags from './infinite-select-tags'
import InfiniteSelectTagsOption from './infinite-select-tags-option'
import InfiniteStep from './infinite-step'
import InfiniteSteps from './infinite-steps'
import InfiniteTable from './infinite-table'
import InfiniteTableColumn from './infinite-table-column'
import InfiniteThemePicker from './infinite-theme-picker'
import InfiniteTooltips from './infinite-tooltips'
import InfiniteTree from './infinite-tree'
import InfiniteVirtualTree from './infinite-virtual-tree'
const version = '1.0.12'
const components = [
  InfiniteButton,
  InfiniteCard,
  InfiniteCascaders,
  InfiniteDialog,
  InfiniteDownload,
  InfiniteDragContainer,
  InfiniteForm,
  InfiniteFormSearch,
  InfiniteLineChart,
  InfiniteNavMenu,
  InfiniteOperation,
  InfiniteOption,
  InfinitePagination,
  InfinitePieChart,
  InfiniteResult,
  InfiniteScrollbar,
  InfiniteSelect,
  InfiniteSelectTags,
  InfiniteSelectTagsOption,
  InfiniteStep,
  InfiniteSteps,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTooltips,
  InfiniteTree,
  InfiniteVirtualTree
]
const install = Vue => {
  components.forEach(Component => {
    if (Component.install && Component.name.toLocaleLowerCase().includes('infinite')) {
      Vue.use(Component)
    }else{
      Vue.prototype[`$${Component.name}`] = Component
    }
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
  InfiniteCard,
  InfiniteCascaders,
  InfiniteDialog,
  InfiniteDownload,
  InfiniteDragContainer,
  InfiniteForm,
  InfiniteFormSearch,
  InfiniteLineChart,
  InfiniteNavMenu,
  InfiniteOperation,
  InfiniteOption,
  InfinitePagination,
  InfinitePieChart,
  InfiniteResult,
  InfiniteScrollbar,
  InfiniteSelect,
  InfiniteSelectTags,
  InfiniteSelectTagsOption,
  InfiniteStep,
  InfiniteSteps,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTooltips,
  InfiniteTree,
  InfiniteVirtualTree
}
export default {
  install,
  version,
  InfiniteButton,
  InfiniteCard,
  InfiniteCascaders,
  InfiniteDialog,
  InfiniteDownload,
  InfiniteDragContainer,
  InfiniteForm,
  InfiniteFormSearch,
  InfiniteLineChart,
  InfiniteNavMenu,
  InfiniteOperation,
  InfiniteOption,
  InfinitePagination,
  InfinitePieChart,
  InfiniteResult,
  InfiniteScrollbar,
  InfiniteSelect,
  InfiniteSelectTags,
  InfiniteSelectTagsOption,
  InfiniteStep,
  InfiniteSteps,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteThemePicker,
  InfiniteTooltips,
  InfiniteTree,
  InfiniteVirtualTree
}
  