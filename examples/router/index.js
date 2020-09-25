import Vue from 'vue'
import Installation from '../docs/Installation.md'
import Button from '../docs/button.md'
import ThemePicker from '../docs/themePicker.md'
import Table from '../docs/table.md'
import Form from '../docs/form.md'

import VueRouter from 'vue-router'
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
  }, {
    path: '/guide/form',
    name: 'form',
    component: Form
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
