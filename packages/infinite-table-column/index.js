import InfiniteTableColumn from '../infinite-table/src/infiniteTableColumn'

// 为组件提供 install 安装方法，供按需引入
InfiniteTableColumn.install = function (Vue) {
  Vue.component(InfiniteTableColumn.name, InfiniteTableColumn)
}
export default InfiniteTableColumn
