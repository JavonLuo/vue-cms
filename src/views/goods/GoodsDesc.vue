<template>
  <div class="goods_desc-container">
    <h1>{{info.title}}</h1>
    <hr>
    <div class="content" v-html="info.content">
        
    </div>
  </div>
</template>

<script>
import {getGoodsDescById} from '../../api/api'
export default {
    data(){
        return{
            id:this.$route.params.id,
            info:{}
        }
    },
    created(){
        getGoodsDescById(this.id)
        .then((res)=>{
            console.log(res)
            this.info = res.data.message[0]
        })
    }
  }

</script>
<style lang='less'>
.goods_desc-container{
    padding: 4px;
    h1{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
        font-weight: bold;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>
