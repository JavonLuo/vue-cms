<template>
<div class="goods-list">
  <router-link class="goods-item" v-for="(item,index) in goodsList" 
  :key='index' :to='"/home/goodsinfo"+item.id' tag='div'>
      <img :src="item.img_url" alt="">
      <h2 class="title">{{item.title}}</h2>
      <div class="info">
          <p class="price">
              <span class="now">￥{{item.sell_price}}</span>
              <span class="old">￥{{item.market_price}}</span>
          </p>
          <p class="sell">
              <span>热卖中</span>
              <span>剩{{item.stock_quantity}}件</span>
          </p>
      </div>
  </router-link>
     <mt-button type="danger" size='large' @click="getMore">加载更多</mt-button>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
import {getGoodsList} from '../../api/api'
export default {
    data(){
        return{
            pageIndex:1,   //页数
            goodsList:[]   //商品信息
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            //得到商品列表
        getGoodsList(this.pageIndex)
        .then((res)=>{
            // 如果等于200 说明请求成功
            if(res.status === 200){
                this.goodsList = this.goodsList.concat(res.data.message)
                // 判断是否加载完所有商品  如果加载完了 就给个提示
                if(res.data.message.length === 0){
                    Toast('没有更多商品了')
                }
            }
        })
        .catch(err=>{throw err})
        },
        getMore(){
            this.pageIndex++
            this.getList()
        }
    }
  }

</script>
<style lang='less' scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: tomato;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    margin-left: 8px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
