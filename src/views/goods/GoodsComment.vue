<template>
  <div>
    <Comment :id="id"></Comment>
  </div>
</template>

<script>
import Comment from '../../components/comment/Comment'
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
    components:{Comment}
  }

</script>
<style lang='less' scoped>

</style>
