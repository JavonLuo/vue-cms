<template>
  <div>
<ul class="mui-table-view">
	<li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
		<router-link :to="'newsinfo'+item.id">
			<img class="mui-media-object mui-pull-left" :src="item.img_url">
			<div class="mui-media-body">
				<h1>{{item.title}}</h1>
				<p class='mui-ellipsis'>
				<span>发表时间：{{item.add_time | dateFormat()}}</span>
				<span>点击{{item.click}}次</span>
				</p>
			</div>
		</router-link>
	</li>
		</ul>
  </div>
</template>

<script>
import {getNewsList} from '../../api/api'
import { Toast } from "mint-ui";
export default {
data(){
	return{
		newsList:[]
	}
},
created(){
	getNewsList()
	.then((res)=>{
		// console.log(res)
		if(res.status === 200){
			this.newsList = res.data.message
		}else{
			Toast('数据获取失败...')
		}
	})
	.catch(err=>{
		Toast('数据获取失败...')
		throw err
		})
}
  }

</script>
<style lang='less' scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;

    }
    p{
      font-size: 12px;
      display: flex;
      color: #226aff;
      justify-content: space-between;
    }
  }
}
</style>
