<!--
 * @FileDescription: 包含各Tab的主体内容，在切换Tab时进行切换
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
  <dv-border-box10 class="tabs-container">
    <StudentTab v-if="activeTab==0"/>
    <UnionSchool v-else-if="activeTab==1" />
  </dv-border-box10>
</template>

<script>
export default {
  name: 'TabControl',
}
</script>

<script setup>
import StudentTab from './tabPages/StudentTab.vue';
import UnionSchool from './tabPages/UnionSchool.vue';
import { BorderBox10 as DvBorderBox10 } from '@kjgl77/datav-vue3';
import {defineProps} from 'vue'

let props = defineProps({
  activeTab: Number
});

console.log('activeTabIndex', props.activeTab);

</script>

<style scoped lang="scss">
div.tabs-container {
  position: absolute;
  top: 16vh;
  height: 84vh;
  width: 100vw;
  background-color: transparent;
}
</style>
