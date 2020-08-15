import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Gamescontent from '../views/Gamescontent.vue'
import Game from '../views/Game.vue'
import Hardware from '../views/Hardware.vue'
import Hardwarecontent from '../views/Hardwarecontent.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/',name:'home',component:Home},
      {path:'/game',name:'game',component:Game},
      {path:'/hardware',name:'hardware',component:Hardware},
      {path:'/articles/:id',name:'article',component:Article,props:true},
      {path:'/games/:id',name:'games',component:Gamescontent,props:true},
      {path:'/hardwares/:id',name:'hardware',component:Hardwarecontent,props:true}
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
