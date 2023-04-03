<!--
 * @FileDescription: 联合办学情况展板
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
    <div class="student-tab">
        <KeyValTemplate order="0" title="联合办学学校情况" :nameValList="nameValListA" keyValId="2"/>
        <MapTemplate order="3"/>
        <ChartTemplate 
            v-for="chart in chartsInfo" :key="chart.chartId" 
            :chartId="chart.chartId" :order="chart.order" :styleType="chart.styleType"
        />
        <PicCarousel order="4"/>
        <DescribeTemplate order="5" />
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
// import ArcLayerTemplate from './tabTemplates/ArcLayerTemplate.vue';
import MapTemplate from './tabTemplates/MapTemplate.vue';
import PicCarousel from './tabTemplates/PicCarousel.vue';
import DescribeTemplate from './tabTemplates/DescribeTemplate.vue'

const chartsInfo = [
    {"chartId": '4', "order": '1', "styleType": '5'}, 
    {"chartId": '5', "order": '2', "styleType": '6'}, 
]

const nameValListA = [
    {name: '中学', val:'19所'}, 
    {name: '小学', val:'12所'}, 
    {name: '幼儿园', val:'4所'}, 
    {name: '覆盖区县', val:'18个'}, 
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