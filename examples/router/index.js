import Vue from 'vue';
import Installation from '../docs/Installation.md';
import Button from '../docs/button.md'
import ThemePicker from '../docs/themePicker.md'
import Table from '../docs/table.md'

import VueRouter from 'vue-router';
const routes = [
  {
    path: '/',
    component: Installation,
    name: 'default'
  },
  {
    path: '/guide/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/guide/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/guide/themePicker',
    name: 'themePicker',
    component: ThemePicker
  },
  {
    path: '/guide/table',
    name: 'Table',
    component: Table
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
