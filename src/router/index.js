import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Cart = () => import('../views/cart/Cart')

//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/category',
    component: Category,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
