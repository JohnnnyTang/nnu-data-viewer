<!--
 * @FileDescription: 学校整体数据统计栏
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
  <div class="stat-container">
    <StatNumber v-for="stat in statNumberInfo" :key="stat.statName"
     :statName=stat.statName :statNumber=stat.statNumber :logoType=stat.logoType
    />
    <div class="nnu-logo"></div>
  </div>
</template>

<script>
import StatNumber from './StatNumber.vue';

export default {
  name: 'StatHeader',
  components: {
    StatNumber, 
  }
}
</script>

<script setup>
let statNumberInfo = [
  {statName: "本科生人数", statNumber:19387, logoType:"student-logo"}, 
  {statName: "研究生人数", statNumber:13448, logoType:"graduate-logo"}, 
  {statName: "国家一流专业建设点", statNumber:29, logoType:"school-logo"}, 
  {statName: "江苏高校优势学科", statNumber:14, logoType:"subject-logo"}, 
  {statName: "省高校重点实验室", statNumber:10, logoType:"lab-logo"}, 
  {statName: "校际交流高校", statNumber:235, logoType:"communication-logo"}, 
]


</script>

<style scoped lang="scss">
div.stat-container {
  height: 10vh;
  width: 98vw;
  padding-left: 2vw;
  background: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  column-gap: 2.8vw;

  div.nnu-logo {
    position: absolute;
    // background-color: red;
    margin-top: 1vh;
    width: 25.6vh;
    height: 8vh;
    right: 1vw;
    background-image: url("http://localhost:8080/ft-logo.png");
    background-size: 25.6vh 8vh;
    background-repeat: no-repeat;
  }
}
</style>
