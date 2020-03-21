<template>
  <div class="shop_car-container">
<div class="mui-card" v-for="(item,index) in goodsCar" :key="index">
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <mt-switch></mt-switch>
        <img :src="item.thumb_path" alt="">
        <div class="info">
          <h1>{{item.title}}</h1>
          <p>
            <span class="price">￥{{item.sell_price}}</span>
            <CarNumberBox></CarNumberBox>
            <a href="#">删除</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 结算区 -->
  <div class="mui-card">
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
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
      goodsCar:[]
    }
  },
  created(){
    let shopCarData = this.$store.state.shopCar
    getShopCarByIds(shopCarData)
    .then((res)=>{
      console.log(res)
      this.goodsCar = res.data.message
    })
    .catch(err=>{throw err})
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
    display: flex;
    flex-direction: column;
    p{
      display: flex;
      margin-top: 8px;
    }
    
    .price{
      color: tomato;
      font-weight: bold;
    }
  }
}
</style>

