import InfiniteSelectTags from './src/index'
// 为组件提供 install 安装方法，供按需引入
InfiniteSelectTags.install = function (Vue) {
  Vue.component(InfiniteSelectTags.name, InfiniteSelectTags)
}
export default InfiniteSelectTags
