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
    // 添加购物车
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
      // 如果不存在 就push
      if(flag){
        state.shopCar.push(params)
      }
      // 保存到本地
      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },
    // 更改商品信息
    undateGoodsInfo(state,params){
      state.shopCar.some(item=>{
        // 保存的对象是字符串
        if(item.id == params.id){
          item.count = parseInt(params.count)
          return true
        }
      })
     // 保存到本地
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },
    // 删除商品
    delGoods(state,params){
      state.shopCar.some((item,index)=>{
        if(item.id == params.id){
          state.shopCar.splice(index,1)
          return true
        }
      })
     // 保存到本地
     localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },
    // 选中状态值的改变
    selectedChange(state,params){
      state.shopCar.some((item,index)=>{
        if(item.id==params.id){
          item.selected = params.selected
          return true
        }
      })
     // 保存到本地
     localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    }
  },
  getters:{
    // 获取总件数
    getAllCount(state){
      let c = 0 //总数
      state.shopCar.forEach(item=>{
        c += parseInt(item.count)
      })
      return c
    },
    // 获取初始状态总件数
    getInitCount(state){
      let o = {}
      state.shopCar.forEach((item)=>{
        o[item.id] = item.count
      })
      return o
    },
    // 获取初始状态的商品选中状态
    getInitSlected(state){
      let o = {}
      state.shopCar.forEach((item)=>{
        o[item.id] = item.selected
      })
      return o
    },
    // 获取总价和总件数
    getCountAndAmount(state){
      let o = {
        count:0,
        amount:0
      }
      // return o
      state.shopCar.forEach((item)=>{
        if(item.selected){
          // 总件数
          o.count += item.count
          // 总价
          o.amount += item.count*item.price
        }
      })
      return o
    }
  },
  actions: {
  },
  modules: {
  }
})
