import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'

import 'wired-elements'
import 'animate.css'
import './style/reset.css'
import './style/layout.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
