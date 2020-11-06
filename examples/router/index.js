import Vue from 'vue'
import VueRouter from 'vue-router'

import Installation from '../docs/Installation.md'
import { getFileList } from './generate'

const generateRouters = getFileList()

const routes = [
  {
    path: '/',
    component: Installation,
    name: 'default'
  }
]

routes.push(...generateRouters)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
