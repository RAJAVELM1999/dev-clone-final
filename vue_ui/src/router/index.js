import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Main.vue'
import Login from '../components/login.vue'
import Createpost from '../components/Createpost.vue'
import Register from '../components/NewRegister.vue'
import Posted from '../components/Posted.vue'
import homelog from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
      {
        path: "/",
        name: "Posted",
        component: Posted,
      },




    ],

  },
  {
    path: "/homelog",
    name: "homelog",
    component: homelog,
    children: [
      {
        path: "/homelog",
        name: "Posted",
        component: Posted,
      },
    ],

  },
  {

    path: "/Createpost",
    name: "Createpost",
    component: Createpost,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/createpost',
    name: 'Createpost',
    component: Createpost,

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
