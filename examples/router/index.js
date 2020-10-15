import Vue from 'vue'
import Installation from '../docs/Installation.md'
import Button from '../docs/button.md'
import ThemePicker from '../docs/themePicker.md'
import Table from '../docs/table.md'
import Form from '../docs/form.md'
import Dialog from '../docs/dialog.md'
import NavMenu from '../docs/navMenu.md'
import Pagination from '../docs/pagination.md'
import LineChart from '../docs/lineChart.md'

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
    component: Button,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/themePicker',
    name: 'ThemePicker',
    component: ThemePicker,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/table',
    name: 'Table',
    component: Table,
    meta: {
      type: 'component'
    }
  }, {
    path: '/guide/form',
    name: 'Form',
    component: Form,
    meta: {
      type: 'component'
    }
  }, {
    path: '/guide/dialog',
    name: 'Dialog',
    component: Dialog,
    meta: {
      type: 'component'
    }
  }, {
    path: '/guide/NavMenu',
    name: 'NavMenu',
    component: NavMenu,
    meta: {
      type: 'component'
    }
  }, {
    path: '/guide/Pagination',
    name: 'Pagination',
    component: Pagination,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/lineChart',
    name: 'LineChart',
    component: LineChart,
    meta: {
      type: 'component'
    }
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
