import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  Installation,
  Button,
  Cascaders,
  Dialog,
  Form,
  LineChart,
  NavMenu,
  Pagination,
  PieChart,
  SelectTags,
  Table,
  ThemePicker,
  Tree
} from './docs'
import Home from '@/views/home'
// import HomeAnimation from '@/views/homeAnimation.vue'
import HomeAnimation from '@/views/IconPage'
import Layout from '@/views'
import Standard from '@/views/standard'
import lastPage from '@/views/LastPage/index.vue'
import animateIndex from '@/views/animateIndex'
import scrollContainer from '@/views/scrollContainer'
import viewChart from '@/views/ViewCharts/Index3.vue'
import { getFileList } from './generate'

const generateRouters = getFileList()

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: 'home',
        name: 'home'
      }
    ]
  },
  {
    path: '/standard',
    name: 'standard',
    component: Standard
  },
  {
    path: '/ani',
    name: '/Ani',
    redirect: '/ani/homeAnimation',
    component: HomeAnimation,
    children: [
      {
        path: 'homeAnimation',
        name: 'homeAnimation'
      }
    ]
  },
  {
    path: '/last',
    name: '/homelast',
    component: lastPage
  },
  {
    path: '/scrollContainer',
    name: '/scrollContainer',
    component: scrollContainer
  },
  {
    path: '/view',
    name: '/view',
    component: viewChart
  },
  {

    path: '/index',
    name: '/homeAnimationIndex',
    component: animateIndex
  },
  {
    path: '/guide',
    name: 'Guide',
    redirect: '/guide/installation',
    component: Layout,
    children: [
      {
        path: 'installation',
        name: 'installation',
        component: Installation
      }, {
        path: 'button',
        name: 'button',
        component: Button
      }, {
        path: 'cascaders',
        name: 'cascaders',
        component: Cascaders
      }, {
        path: 'dialog',
        name: 'dialog',
        component: Dialog
      }, {
        path: 'form',
        name: 'form',
        component: Form
      }, {
        path: 'lineChart',
        name: 'lineChart',
        component: LineChart
      }, {
        path: 'navMenu',
        name: 'navMenu',
        component: NavMenu
      }, {
        path: 'pagination',
        name: 'pagination',
        component: Pagination
      }, {
        path: 'pieChart',
        name: 'PieChart',
        component: PieChart
      }, {
        path: 'selectTags',
        name: 'SelectTags',
        component: SelectTags
      }, {
        path: 'table',
        name: 'table',
        component: Table
      }, {
        path: 'themePicker',
        name: 'themePicker',
        component: ThemePicker
      }, {
        path: 'tree',
        name: 'tree',
        component: Tree
      }
    ]
  }
]

routes.push(...generateRouters)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
