<template>
<div class="goodsinfo-container">
    <!-- <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    >
    购物车小球
    <div class="ball" v-show="ballFlag"></div>
    </transition> -->
    <!-- 轮播图专区 -->
    <div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <Swiper :bannerList='bannerList' :isfull='false'></Swiper>
        </div>
    </div>
</div>
        <!-- 商品信息 -->
<div class="mui-card">
    <div class="mui-card-header">{{goodsInfo.title}}</div>
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
        <p class="price">
            市场价：<del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">
                ￥{{goodsInfo.sell_price}}
            </span>
            <p class="num_box">购买数量：<NumberBox @getCount='getChangeCount' :max='goodsInfo.stock_quantity'></NumberBox></p>
            <p>
            <mt-button type="primary" size='small'>立即购买</mt-button>
            <mt-button type="danger" size='small' class="joinShopCar" @click="addToShopCar">加入购物车</mt-button>
            </p>
        </div>
    </div>
        </div>
        <!-- 商品参数区 -->
<div class="mui-card">
    <div class="mui-card-header">商品参数</div>
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>商品货号：{{goodsInfo.goods_no}}</p>
            <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
            <p>上架时间：{{goodsInfo.add_time | dateFormat}}</p>
        </div>
    </div>
    <div class="mui-card-footer">
        <mt-button type="primary" size='large' plain @click="goGoodsDesc">图文详情</mt-button>
        <mt-button type="danger" size='large' plain  @click="goComments">商品评论</mt-button>
    </div>
</div>
</div>
</template>

<script>
// 引入数据请求方法
import {getThumImages,getGoodsInfoById} from '../../api/api'
// 引入轮播图
import Swiper from '../../components/swiper/Swiper'
// 输入框
import NumberBox from '../../components/number_box/NumberBox'

export default {
    data(){
        return{
            id:this.$route.params.id,  //商品信息
            bannerList:[],   //轮播图
            goodsInfo:{},
            ballFlag:false,    //控制小球的显示与隐藏
            selectedCount:1    //购买数量默认为1
        }
    },
    methods:{
        goGoodsDesc(){//goodscomment
            this.$router.push({name:'goodsdesc',params:{id:this.id}})
        },
        goComments(){
            this.$router.push({name:'goodscomments',params:{id:this.id}})
        },
        addToShopCar(){
            // this.ballFlag = !this.ballFlag
            let goodsInfo = {
                id:this.id,
                count:this.selectedCount,
                price:this.goodsInfo.sell_price,
                selected:true
            }
            this.$store.commit('addToShopCar',goodsInfo)
        },
        getChangeCount(count){
            this.selectedCount = count
            // console.log(count)
        }
        // beforeEnter: function (el) {
        //     el.style.transform = "translate(0,0)"// ...
        // },
        // // 当与 CSS 结合使用时
        // // 回调函数 done 是可选的
        // enter: function (el, done) {
        //     el.offsetWidth;
        //     el.style.transform = 'translate(93px,230px)'
        //     el.style.transition = 'all 1s ease'// ...
        //     done()
        // },
        // afterEnter: function (el) {
        //     this.ballFlag = !this.ballFlag// ...
        // },
    },
    created(){
        // 轮播图
        getThumImages(this.id)
        .then((res)=>{
            // 处理数据 传入轮播图组件的格式在
            let srcObj = {}
            res.data.message.forEach((item,index) => {
                srcObj.img = item.src
                this.bannerList.push(srcObj) 
            });
        })
        .catch(err=>{throw err})
        // 商品信息
        getGoodsInfoById(this.id)
        .then((res)=>{
            // console.log(res)
            this.goodsInfo = res.data.message[0]
        })
        .catch(err=>{throw err})
    },
    components:{Swiper,NumberBox}
  }

</script>
<style lang='less' scoped>
.now_price{
    font-size: 16px;
    color: tomato;
    font-weight: bold;
}
.mui-card-footer{
    display: block;
    button{
        margin: 14px 0;
    }
}
.joinShopCar{
    margin-left: 10px;
}
.num_box{
    display: flex;
    // justify-content: center;
    align-items: center;
}
.goodsinfo-container{
    .ball{
       width: 15px;
       height: 15px;
       border-radius: 50%;
       background-color: red;
       position: absolute;
       z-index: 99;
       top: 390px;
       left: 146px; 
    }
}
</style>
