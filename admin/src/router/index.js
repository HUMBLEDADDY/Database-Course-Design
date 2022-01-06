import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Login from "../views/Login.vue";
import CategoryEdit from "../views/CategoryEdit.vue";
import CategoryList from "../views/CategoryList.vue";

import GameEdit from "../views/GameEdit.vue";
import GameList from "../views/GameList.vue";

import HardWareEdit from "../views/HardWareEdit.vue";
import HardWareList from "../views/HardWareList.vue";

import ArticleEdit from "../views/ArticleEdit.vue";
import ArticleList from "../views/ArticleList.vue";

import AdminUserEdit from "../views/AdminUserEdit.vue";
import AdminUserList from "../views/AdminUserList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { isPublic: true },
  },
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "/categories/create", component: CategoryEdit },
      { path: "/categories/edit/:id", component: CategoryEdit, props: true },
      { path: "/categories/list", component: CategoryList },

      { path: "/games/create", component: GameEdit },
      { path: "/games/edit/:id", component: GameEdit, props: true },
      { path: "/games/list", component: GameList },

      { path: "/hardware/create", component: HardWareEdit },
      { path: "/hardware/edit/:id", component: HardWareEdit, props: true },
      { path: "/hardware/list", component: HardWareList },

      { path: "/article/create", component: ArticleEdit },
      { path: "/article/edit/:id", component: ArticleEdit, props: true },
      { path: "/article/list", component: ArticleList },

      { path: "/admin_users/create", component: AdminUserEdit },
      { path: "/admin_users/edit/:id", component: AdminUserEdit, props: true },
      { path: "/admin_users/list", component: AdminUserList },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) return next("/login");
  next();
});
export default router;
