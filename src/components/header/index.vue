<template>
  <div>
    <mt-header fixed title="JaFeng Luo">
        <span slot="left" @click="goBack" v-show="flag">
    <mt-button icon="back">返回</mt-button>
  </span>
  <mt-button icon="more" slot="right"></mt-button>


    </mt-header>
  </div>
</template>

<script>

export default {
  data(){
    return{
      flag:true
    }
  },
  created(){
    this.flag = this.$route.path=='/home'?false:true
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  },
  watch:{
    '$route.path':function (newVal,oldVal){
      if(newVal == '/home'){
        this.flag = false
      }else{
        this.flag = true
      }
    }
  }
  }

</script>
<style lang='less' scoped>
.mint-header{
  z-index: 999;
}
</style>
