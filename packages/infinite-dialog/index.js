import InfiniteDialog from './src/index'
// 为组件提供 install 安装方法，供按需引入
InfiniteDialog.install = function (Vue) {
  Vue.component(InfiniteDialog.name, InfiniteDialog)
}
export default InfiniteDialog
