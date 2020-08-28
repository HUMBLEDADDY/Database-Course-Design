/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false

import './style.scss'
import router from './router'
import 'swiper/swiper-bundle.css'
import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
import axios from 'axios'

Vue.prototype.$http = axios.create({     baseURL: process.env.VUE_APP_API_URL || '/web/api',  })

Vue.component('M-card',Card)
Vue.component('M-listcard',ListCard)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
