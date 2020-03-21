import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/tab/Home.vue'
import Member from '../views/tab/Member.vue'
import ShopCar from '../views/tab/ShopCar.vue'
import Search from '../views/tab/Search.vue'
import NewsList from '../views/news/NewsList.vue'
import NewsInfo from '../views/news/NewsInfo.vue'
import PhotoList from '../views/photos/PhotoList.vue'
import PhotoInfo from '../views/photos/PhotoInfo.vue'
import GoodsList from '../views/goods/GoodsList.vue'
import GoodsInfo from '../views/goods/GoodsInfo.vue'
import GoodsDesc from '../views/goods/GoodsDesc.vue'
import GoodsComment from '../views/goods/GoodsComment.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  { path: '/home/newslist',component: NewsList },//新闻列表
  { path: '/home/newsinfo:id',component: NewsInfo },//新闻详情
  { path: '/home/photolist',component: PhotoList },//图片列表
  { path: '/home/photoinfo:id',component: PhotoInfo },//图片详情
  { path: '/home/goodslist',component: GoodsList },//商品列表
  { path: '/home/goodsinfo:id',component: GoodsInfo },//商品详情
  { path: '/home/goodsdesc:id',component: GoodsDesc,name:'goodsdesc' },//商品图文详情
  { path: '/home/goodscomment:id',component: GoodsComment,name:'goodscomments' },//商品评论





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
