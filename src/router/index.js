import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import ShopCar from '../views/ShopCar.vue'
import Search from '../views/Search.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewInfo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/home/newslist',
    component: NewsList
  },
  {
    path: '/home/newsinfo:id',
    component: NewsInfo
  },
  {
    path: '/member',
    component:Member,
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect:'/home'
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass:'mui-active'   //默认覆盖高亮的类
})

export default router
