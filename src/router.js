import Vue from 'vue'
import VueRouter from 'vue-router'

const Loading = () => import('./view/loading')
const Letter = () => import('./view/letter')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/letter',
    name: 'Letter',
    component: Letter
  }
]

const router = new VueRouter({
  routes
})

export default router
