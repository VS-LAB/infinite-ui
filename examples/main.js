import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 引入element-ui
import {
  Col,
  Row,
  Container,
  Header,
  Main,
  Aside,
  Input,
  Message,
  Notification
} from 'element-ui'
import './style/index.scss'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js'
import '../packages/theme-chalk/src/index.scss'

// 导入组件库
import packages from '../packages'
// import infiniteUi from '../lib/infinite-ui.umd'
// import '../lib/theme-chalk/index.css'
// Vue.use(infiniteUi)
Vue.use(Col)
  .use(Row)
  .use(Container)
  .use(Header)
  .use(Main)
  .use(Aside)
  .use(Input)
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
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

    const scrollParent = document.querySelector('.view-container-scroll')
    scrollParent.scrollTop = 0
  })
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
