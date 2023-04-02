<!--
 * @FileDescription: App入口，NNU学校数据大屏展示
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
  <div class="app-header">
    <TabControl />
    <StatHeader />
  </div>
  <TabsContainer />
</template>

<script>
import StatHeader from './components/StatHeader.vue'
import TabControl from './components/TabControl.vue'
import TabsContainer from './components/TabsContainer.vue'

export default {
  name: 'App',
  components: {
    StatHeader, 
    TabControl, 
    TabsContainer
  }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(
        to bottom,
        rgba(0, 24, 68, 1) 0%,
        rgba(24, 47, 90, 0.8) 36%,
        rgba(0, 24, 68, 0.9) 100%
      ),
      url('http://localhost:8080/appBg1.jpg');
  background-size: cover;
  background-position: 50% 0%;

  div.app-header {
    height: 16vh;
    width: 100vw;
    background-image: linear-gradient(
          to bottom,
          rgba(24, 47, 90, 0.5) 0%,
          rgba(24, 47, 90, 0.8) 36%,
          rgba(10, 30, 71, 0.9) 100%
        ),
        url('http://localhost:8080/xygk1.jpg');
      background-position: 50% 0%;
      background-size: cover;
    }
}
</style>
