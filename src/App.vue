<template>
  <div id="app">
    <!-- 头部 -->
    <my-header></my-header>
    <!-- 主体 -->
	<transition>
	<router-view></router-view>
	</transition>
    <!-- 底部 -->
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from './components/header/index'
import myFooter from './components/footer/index'
export default {
	components:{myHeader,myFooter}
}
</script>
<style lang="less">
#app{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  }
  .v-enter{
	  opacity: 0;
	  transform: translateX(100%);
  }
  .v-leave-to{
	 opacity: 0;
	transform: translateX(-100%); 
	position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
	  transition: all 0.5s ease;
  }
</style>
