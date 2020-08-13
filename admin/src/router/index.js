import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import GameEdit from '../views/GameEdit.vue'
import GameList from '../views/GameList.vue'

import HardWareEdit from '../views/HardWareEdit.vue'
import HardWareList from '../views/HardWareList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path:'/categories/create',component:CategoryEdit},
      {path:'/categories/edit/:id',component:CategoryEdit,props:true},
      {path:'/categories/list',component:CategoryList},

      {path:'/games/create',component:GameEdit},
      {path:'/games/edit/:id',component:GameEdit,props:true},
      {path:'/games/list',component:GameList},

      {path:'/hardware/create',component:HardWareEdit},
      {path:'/hardware/edit/:id',component:HardWareEdit,props:true},
      {path:'/hardware/list',component:HardWareList}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
