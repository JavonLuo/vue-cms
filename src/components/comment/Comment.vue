<template>
  <div  class="cmt-container">
      <h3>发表评论</h3>
      <textarea placeholder="请输入要评论的内容（不超过200字）..." v-model="msg"></textarea>
      <mt-button type="primary" size='large' @click="postComments">发表评论</mt-button>
      <div class="cmt-list">
          <div class="cmt-item" v-for="(item,index) in comments" :key="index">
              <div class="cmt-title">
                  第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
              </div>
              <div class="cmt-body">{{item.content==='undefined'|| item.content===''?'此用户没有留下任何评论':item.content}}</div>
          </div>
      </div>
      <mt-button type="danger" size='large' plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import {getComment,postComment} from '../../api/api'
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
            msg:''
        }
    },
    created(){
        this.getComments()
    },
    props:['id'],
    methods:{
        getMore(){
            this.pageIndex++
            this.getComments()

        },
        getComments(){
        getComment(this.id,this.pageIndex)
        .then((res)=>{
            this.comments = this.comments.concat(res.data.message)
        })
        .catch((err)=>{
            Toast('评论加载失败...')
            throw err
            })
        },
        postComments(){
            // 校验是否为空
            if(this.msg.trim().length === 0){
                Toast('评论不能为空！')
            }else{
                postComment(this.id,this.msg.trim())
                .then((res)=>{
                    if(res.status === 200){
                        Toast('评论提交成功')
                        let cmt = {
                            user_name:'匿名用户',
                            add_time: Date.now(),
                            content:this.msg.trim()
                        }
                        this.comments.unshift(cmt)
                        this.msg = ''
                    }
                })
                .catch(err=>{throw err})
            }
        }
    }
  }

</script>
<style lang='less' scoped>
.cmt-container{
   h3{
       font-size: 18px;
   }
   textarea{
       font-size: 14px;
       height: 85px;
       margin: 0;
   }
   .cmt-list{
       .cmt-item{
           margin: 5px 0;
           font-size: 13px;
           .cmt-title{
               line-height: 30px;
               background: #ccc;
           }
           .cmt-body{
               line-height: 35px;
               text-indent: 2em;
           }
       }
   }
}
</style>
