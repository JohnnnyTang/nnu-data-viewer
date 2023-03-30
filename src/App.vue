<!--
 * @FileDescription: App入口，NNU学校数据大屏展示
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
  <TabControl />
  <StatHeader />
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
}
</style>
