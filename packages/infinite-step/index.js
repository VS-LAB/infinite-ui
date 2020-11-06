import InfiniteStep from '../infinite-steps/src/step.vue'
// 为组件提供 install 安装方法，供按需引入
InfiniteStep.install = function (Vue) {
  Vue.component(InfiniteStep.name, InfiniteStep)
}
export default InfiniteStep
