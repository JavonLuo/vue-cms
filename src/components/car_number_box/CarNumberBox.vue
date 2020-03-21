<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height:26px;width:110px;margin:0 6px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change='countChange' ref="input" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted(){
        mui('.mui-numbox').numbox() 
    },
    methods:{
      countChange(){
        // let value = parseInt(this.$refs.input.value)
        // this.$emit('getCount',value)
      }
    },
  }

</script>
<style lang='less' scoped>

</style>
