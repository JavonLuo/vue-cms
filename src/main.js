import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//使用mint-ui 引入全部组件
import {Tabbar,Swipe,Header,Button,TabItem,SwipeItem} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入mit-ui全局样式
import 'mint-ui/lib/style.css'


// mui样式
import './lib/mui/css/mui.min.css'
// 拓展图标
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
