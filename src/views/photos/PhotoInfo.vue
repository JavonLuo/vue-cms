<template>
  <div class="photoinfo-container">
    <h3 class="title">{{photoDetail.title}}</h3>
    <p class="subtitle">
        <span>发表时间:{{photoDetail.add_time | dateFormat}}</span>
        <span>点击：{{photoDetail.click}}次</span>
    </p>
    <hr>
    <!-- 图片缩略图 -->
  <div>
    <vue-preview
      :list="list"
      :tapToClose="true"

    />
  </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoDetail.content"></div>


    <!-- 放置一个现成的评论组件 -->
    <Comment :id="id"></Comment>


  </div>

</template>

<script>
import {getImgDetail,getThumImages} from '../../api/api'
import Comment from '../../components/comment/Comment'
export default {
    data(){
        return{
        id:this.$route.params.id,   //图片id
        photoDetail:{},   //图片详情
        list: []  //图片缩略图
        }
    },
    created(){
        getImgDetail(this.id)
        .then((res)=>{
            if(res.status===200){
                this.photoDetail = res.data.message[0]
                // console.log(this.photoDetail)
            }
        })
        .catch(err=>{throw err}
        )
        getThumImages(this.id)
        .then((res)=>{
            if(res.status === 200){
                // console.log(res)
                res.data.message.forEach(element => {
                    element.w = 600
                    element.h = 400
                });
                console.log(res.data.message)
                this.list = res.data.message
            }
        })
    },
    methods:{

    },
    components:{Comment}
  }

</script>
<style lang='less' scoped>
.photoinfo-container{
    padding: 3px;
    .title{
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;

    }
    .subtitle{  
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
}
</style>
