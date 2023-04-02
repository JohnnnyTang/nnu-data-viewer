<!--
 * @FileDescription: 本科生就业情况展板
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
  <div class="student-tab">
    <KeyValTemplate order="0" title="22届毕业生落实情况" :nameValList="nameValListA" keyValId="1"/>
    <ArcLayerTemplate order="3"/>
    <ChartTemplate v-for="chart in chartsInfo" :key="chart.chartId" 
      :chartId="chart.chartId" :order="chart.order" :styleType="chart.styleType"
    />
  </div>
</template>

<script>
export default {
  name: 'StudentTab',
}
</script>

<script setup>
import ChartTemplate from './tabTemplates/ChartTemplate.vue';
import KeyValTemplate from './tabTemplates/KeyValTemplate.vue';
import ArcLayerTemplate from './tabTemplates/ArcLayerTemplate.vue';

const chartsInfo = [
  {"chartId": '0', "order": '1', "styleType": '1'}, 
  {"chartId": '1', "order": '2', "styleType": '2'}, 
  {"chartId": '2', "order": '4', "styleType": '3'}, 
  {"chartId": '3', "order": '5', "styleType": '4'}, 
]

const nameValListA = [
  {name: '落实人数', val:'3914'}, 
  {name: '落实率', val:'89.69%'}, 
  {name: '国内升学率', val:'36.07%'}, 
  {name: '国（境）外升学率', val:'7.15%'}, 
]

</script>


<style lang="scss">
div.student-tab {
  position: absolute;
  width: 100vw;
  height: 84vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  // background-color: red;
}
</style>
