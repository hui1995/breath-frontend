import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Download from '../views/Download.vue'
import Idea from '../views/Idea.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Download',
    component: Download
  },
  {
    path: '/idea',
    name: 'Idea',
    component: Idea
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "otherPageName" */ '../components/Demo.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../components/Demo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,form,next)=>{
  next()
})
router.afterEach(()=>{})

export default router
