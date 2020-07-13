import Vue from 'vue'
import App from './App.vue'
import infinite from '../packages/index'
import '../plugins/element'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(infinite)

new Vue({
  render: h => h(App)
}).$mount('#app')
