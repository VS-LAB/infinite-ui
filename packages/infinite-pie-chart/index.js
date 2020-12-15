import InfinitePieChart from './src/index'
// 为组件提供 install 安装方法，供按需引入
InfinitePieChart.install = function (Vue) {
  Vue.component(InfinitePieChart.name, InfinitePieChart)
}
export default InfinitePieChart
