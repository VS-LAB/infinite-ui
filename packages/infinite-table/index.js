import InfiniteTable from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfiniteTable.install = function (Vue) {
  Vue.component(InfiniteTable.name, InfiniteTable)
}
export default InfiniteTable
