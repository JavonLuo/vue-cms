<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsList.title}}</h3>
    <hr>
    <p class="subtitle">
      <span>发表时间:{{newsList.add_time | dateFormat}}</span>
      <span>点击:{{newsList.click}}次</span>
      </p>
      <div class="content" v-html="newsList.content"></div>
      <Comment :id='newsId'></Comment>
  </div>
</template>

<script>
import {getNewsInfo} from '../../api/api'
import {Toast} from 'mint-ui'
import Comment from '../../components/comment/Comment'
export default {
  created(){
    getNewsInfo(this.newsId)
    .then((res)=>{
      this.newsList = res.data.message[0]
    })
    .catch(err=>{
      Toast('文章加载失败...')
      throw err
      })
  },
  data(){
    return{
      newsId:this.$route.params.id,
      newsList:[]
    }
  },
  components:{Comment}
  }

</script>
<style lang='less' scoped>
.newsinfo-container{
  padding: 0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
