import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'

import TextBlock from './components/text-block'

import 'wired-elements'
import 'animate.css'
import '@material/mwc-icon'
import './style/reset.css'
import './style/app.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.component(TextBlock.name, TextBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
