import InfiniteForm from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfiniteForm.install = function (Vue) {
  Vue.component(InfiniteForm.name, InfiniteForm)
}
export default InfiniteForm
