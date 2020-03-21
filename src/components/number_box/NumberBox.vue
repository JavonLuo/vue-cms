<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
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
        let value = parseInt(this.$refs.input.value)
        this.$emit('getCount',value)
      }
    },
    props:['max'],
    watch:{
      // 属性监听
      max(newVal,oldVal){
        mui('.mui-numbox').numbox().setOption('max',newVal)
      }
    }
  }

</script>
<style lang='less' scoped>

</style>
