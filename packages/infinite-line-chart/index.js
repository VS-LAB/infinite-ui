import InfiniteLineChart from './src/index'
// 为组件提供 install 安装方法，供按需引入
InfiniteLineChart.install = function (Vue) {
  Vue.component(InfiniteLineChart.name, InfiniteLineChart)
}
export default InfiniteLineChart
