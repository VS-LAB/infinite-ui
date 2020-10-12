import InfiniteNavMenu from './src/index'
// 为组件提供 install 安装方法，供按需引入
InfiniteNavMenu.install = function (Vue) {
  Vue.component(InfiniteNavMenu.name, InfiniteNavMenu)
}
export default InfiniteNavMenu
