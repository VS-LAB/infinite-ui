import Vue from 'vue'
import VueRouter from 'vue-router'

import Installation from '../docs/Installation.md'
import { getFileList } from './generate'

const generateRouters = getFileList()

const routes = [
  {
    path: '/',
    redirect: '/guide/installation'
  },
  {
    path: '/guide/installation',
    name: 'Installation',
    component: Installation
  }
]

routes.push(...generateRouters)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
