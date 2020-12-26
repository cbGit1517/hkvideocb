import Vue from 'vue'
import VueRouter from 'vue-router'
import Person from '../views/Person.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Play from '../views/Play.vue'
import First from "../views/First";
import Index from "../views/Index"
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'First',
        component:First,
        redirect:'/index',
        children: [
            {
              path:'index',
              component: Index
            },
            {
                path: 'person',
                component: Person
            },
            {
                path: '/login',
                component: Login

            },
            {
                path: '/register',
                component: Register
            },
            {
                path: '/play',
                component: Play
            }
        ],
    },
    {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
