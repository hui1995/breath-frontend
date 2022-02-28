import Vue from 'vue'
import VueRouter from 'vue-router'
import Download from '../views/Download.vue'
import Idea from '../views/Idea.vue'
import SourceList from '../views/SourceList'
import SourceDetail from '../views/SourceDetail'
import Home from '../views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/download/',
    name: 'Download',
    component: Download
  },
  {
    path: '/idea/',
    name: 'Idea',
    component: Idea
  },
  {
    path: '/muban/:cate',
    name: 'SourceList',
    component: SourceList

  },
  {
    path: '/detail/:id',
    name: 'SourceDetail',
    component: SourceDetail

  },
  {
    path: '/',
    name: 'Home',
    component: Home

  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,form,next)=>{
  next()
})
router.afterEach(()=>{})

export default router
