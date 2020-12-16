import InfiniteCascaders from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfiniteCascaders.install = function (Vue) {
  Vue.component(InfiniteCascaders.name, InfiniteCascaders)
}
export default InfiniteCascaders
