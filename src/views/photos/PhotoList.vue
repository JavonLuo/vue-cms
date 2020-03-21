<template>
  <div>
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
    <div class="mui-scroll">
        <a :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="(item,index) in cates" :key='index'
        @tap="getImgByCatesId(item.id)"
        >
            {{item.title}}
        </a>
    </div>
</div>
    <ul class="photo-list">
        <router-link v-for="(item,index) in list" :key='index' :to="'/home/photoinfo'+item.id" tag='li'>
        <img v-lazy="item.img_url">
        <div class="info">
            <h1 class="info-title">
                {{item.title}}
            </h1>
            <div class="info-body" v-html="item.content">
                <!-- {{item.content}} -->
            </div>
        </div>
        </router-link>
    </ul>

  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
import {getImgCategory,getImg} from '../../api/api'
export default {
    data(){
        return{
        cates:[],  //图片分类
        list:[]   //图片url
        }
    },
    mounted(){
//初始化滚动
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    },
    created(){
        getImgCategory()
        .then((res)=>{
            if(res.status === 200){
                res.data.message.unshift({title:'全部',id:0})
                this.cates = res.data.message
                console.log(this.list)
            }
        })
        .catch(err=>{throw err})
        // 获取图片列表
        this.getImgByCatesId(0)
    },
    methods:{
        getImgByCatesId(catesId){
            getImg(catesId)
            .then((res)=>{
                if(res.status == 200){
                    this.list = res.data.message
                    console.log(this.list)
                }
            })
            .catch(err=>{throw err})
        }
    }
  }

</script>
<style lang='less' scoped>
*{touch-action:pan-y}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list{
    margin: 0;
    padding: 0;
    margin-bottom: 0;
    padding: 10px;
    li{
    list-style: none;
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img{
        width: 100%;
        vertical-align: middle;
    }
    .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        max-height: 84px;
        .info-title{
            font-size: 14px;
        }
        .info-body{
            font-size: 12px;

        }
    }
    }
}
</style>
