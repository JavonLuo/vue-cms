<template>
  <div class="shop_car-container">
<div class="mui-card" v-for="(item,index) in goodsCar" :key="index" v-show='goodsCar.length'>
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <mt-switch v-model="$store.getters.getInitSlected[item.id]" 
        @change="selectedChange(item.id,$store.getters.getInitSlected[item.id])"></mt-switch>
        <img :src="item.thumb_path" alt="">
        <div class="info">
          <h1>{{item.title}}</h1>
          <p>
            <span class="price">￥{{item.sell_price}}</span>
            <CarNumberBox :initCount='$store.getters.getInitCount[item.id]' :goodsid='item.id'></CarNumberBox>
            <a href="#" @click.prevent="remove(item.id,index)">删除</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    <div class="mui-card" v-show='!goodsCar.length' >
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        购物车空空也如此
      </div>
    </div>
  </div>
  <!-- 结算区 -->
  <div class="mui-card">
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <div class="total_price">
          <p>总计（不包含运费）</p>
          <p>已勾选商品<span class="red">{{$store.getters.getCountAndAmount.count}}
            </span>,总价<span class="red">￥{{$store.getters.getCountAndAmount.amount}}</span></p>
        </div>
        <mt-button type="danger" size='small'>去结算</mt-button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CarNumberBox from '../../components/car_number_box/CarNumberBox'
import {getShopCarByIds} from '../../api/api'
export default {
  data(){
    return{
      goodsCar:[],
      flag:false
    }
  },
  methods:{
    // 删除商品
    remove(id,index){
      this.goodsCar.splice(index,1)
      this.$store.commit('delGoods',{id})
    },
    // 更新swicth状态
    selectedChange(id,selected){
      this.$store.commit('selectedChange',{id,selected})
    }
  },
  created(){
    let shopCarData = this.$store.state.shopCar
    // 不等于undefined就调用
    if(getShopCarByIds(shopCarData)){
      getShopCarByIds(shopCarData)
      .then((res)=>{
        // console.log(res)
        this.goodsCar = res.data.message
      })
      .catch(err=>{throw err})

    }
  },
  components:{CarNumberBox}

  }

</script>
<style lang='less' scoped>
.shop_car-container{
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .red{
      color: tomato;
      font-size: 16px;
      font-weight: bold;
      margin: 0 2px;
    }
}
  img{
    width: 60px;
    height: 60px;
    margin: 0 6px;

  }
  h1{
    font-size: 13px;
  }
  .info{
    flex: 1;
    display: flex;
    flex-direction: column;
    p{
      display: flex;
      margin-top: 8px;
      justify-content: space-between;
    }
    
    .price{
      color: tomato;
      font-weight: bold;
    }
  }
}
</style>

