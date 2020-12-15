import InfinitePagination from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfinitePagination.install = function (Vue) {
  Vue.component(InfinitePagination.name, InfinitePagination)
}
export default InfinitePagination
