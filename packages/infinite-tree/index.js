import InfiniteTree from './src/index'
// 为组件提供 install 安装方法，供按需引入
InfiniteTree.install = function (Vue) {
  Vue.component(InfiniteTree.name, InfiniteTree)
}
export default InfiniteTree
