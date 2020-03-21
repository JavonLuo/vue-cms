import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//使用mint-ui 引入全部组件
// import {Tabbar,Swipe,Header,Button,TabItem,SwipeItem,Lazyload} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// // 图片懒加载不支持按需引入
import MinUi from 'mint-ui'
Vue.use(MinUi)
//引入mit-ui全局样式
import 'mint-ui/lib/style.css'

// 导入时间插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat',(dateStr,pattern = 'YYYY-MM-DD HH:mm:ss')=>{
  return moment(dateStr).format(pattern)
})
// 图片预览(缩略图)
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

// mui样式
import './lib/mui/css/mui.min.css'
// 拓展图标
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
