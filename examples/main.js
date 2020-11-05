import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js'
import '../packages/theme-chalk/src/index.scss'
// import '../packages/theme-chalk/src/infinite-button.scss'
// import '../packages/theme-chalk/src/infinite-form.scss'

// 导入组件库
import {
  InfiniteButton,
  InfiniteThemePicker,
  InfiniteTable,
  InfiniteTableColumn,
  InfiniteForm,
  InfiniteDialog,
  InfiniteNavMenu,
  InfinitePagination,
  InfiniteLineChart,
  InfinitePieChart,
  InfiniteSelectTags,
  InfiniteCascaders,
  InfiniteTree,
  InfiniteSteps,
  InfiniteStep
} from '../packages'
Vue.config.productionTip = false
Vue.use(InfiniteButton)
  .use(InfiniteThemePicker)
  .use(InfiniteForm)
  .use(InfiniteTable)
  .use(InfiniteTableColumn)
  .use(InfiniteDialog)
  .use(InfiniteNavMenu)
  .use(InfinitePagination)
  .use(InfiniteLineChart)
  .use(InfinitePieChart)
  .use(InfiniteSelectTags)
  .use(InfiniteCascaders)
  .use(InfiniteTree)
  .use(InfiniteSteps)
  .use(InfiniteStep)

Vue.use(ElementUI)
Vue.component('demo-block', demoBlock)
router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
