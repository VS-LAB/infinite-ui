
import InfiniteSelectTagsOption from '../infinite-select-tags/src/infiniteSelectTagsOption'

// 为组件提供 install 安装方法，供按需引入
InfiniteSelectTagsOption.install = function (Vue) {
  Vue.component(InfiniteSelectTagsOption.name, InfiniteSelectTagsOption)
}
export default InfiniteSelectTagsOption
