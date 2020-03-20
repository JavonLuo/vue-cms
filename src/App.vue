<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="JaFeng Luo"></mt-header>
    <!-- 主体 -->
4545
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item mui-active" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
    components: {
    HelloWorld
  }
}
</script>
<style lang="less">
#app{
  padding-top: 40px;
  }
</style>
