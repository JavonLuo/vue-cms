import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



// 每次打开的时候 都先从本地存储读取购物车数据
let shopCar = JSON.parse(localStorage.getItem('shopCar') || '[]')
export default new Vuex.Store({
  state: {
    shopCar:shopCar   //存储购物车中的商品数据（id,count,price,slected）
  },
  mutations: {
    addToShopCar(state,params){
      let flag = true
      state.shopCar.some(item=>{
        if(item.id === params.id){
          flag = false
          console.log(parseInt(params.count));
          item.count += parseInt(params.count)
          return true
        }
      })
      if(flag){
        state.shopCar.push(params)
      }
      localStorage.setItem('shopCar',JSON.stringify(shopCar))
    }
  },
  getters:{
    getAllCount(state){
      let c = 0 //总数
      state.shopCar.forEach(item=>{
        c += parseInt(item.count)
      })
      return c
    }
  },
  actions: {
  },
  modules: {
  }
})
