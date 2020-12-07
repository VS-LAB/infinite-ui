import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 引入element-ui
import {
  Menu,
  MenuItem,
  Col,
  Row,
  Container,
  Header,
  Main,
  Aside
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js'
import '../packages/theme-chalk/src/index.scss'
// import '../packages/theme-chalk/src/infinite-theme-blue-color.scss'

// 导入组件库
import packages from '../packages'
console.log(packages)

Vue.use(Menu)
  .use(MenuItem)
  .use(Col)
  .use(Row)
  .use(Container)
  .use(Header)
  .use(Main)
  .use(Aside)

for (const key in packages) {
  if (packages.hasOwnProperty(key)) {
    const element = packages[key]
    if (key.toLocaleLowerCase().includes('infinite')) {
      Vue.use(element)
    };
  }
}
Vue.config.productionTip = false

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
