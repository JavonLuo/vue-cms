<template>
  <div>
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in bannerList" :key="index" class="mt-swipe-item">
    <img :src="item.img" alt="" :class="{full:isfull}">
    </mt-swipe-item>
</mt-swipe>
  </div>
</template>

<script>

export default {
    props:['bannerList','isfull']
  }

</script>
<style lang='less' scoped>
.mint-swipe{
  height: 200px;
  .mt-swipe-item{
      text-align: center;
  }
      img{
        // width: 100%;
        height: 100%;
      }
      .full{
          width: 100%;
      }

}
</style>
