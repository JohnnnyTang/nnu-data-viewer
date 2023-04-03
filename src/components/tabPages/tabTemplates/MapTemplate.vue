<!--
 * @FileDescription: 地图数据组件
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
    <dv-border-box12 class="map-template" :order="order">
      <div class="map-container" id="map"></div>
    </dv-border-box12>
</template>

<script>
export default {
  name: 'MapTemplate',
}
</script>

<script setup>
import { defineProps, onMounted } from 'vue';
import { BorderBox12 as DvBorderBox12 } from '@kjgl77/datav-vue3';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

let props = defineProps({
  order: String
});
console.log(props)

let viewState = {
  latitude: 28.660,
  longitude: 117.216,
  zoom: 5.62,
  pitch: 33.50,
  bearing: -7.20
};
// const order = props.order;

onMounted(() => {
  const map = new mapboxgl.Map({
    accessToken: 'pk.eyJ1Ijoiam9obm55dCIsImEiOiJja2xxNXplNjYwNnhzMm5uYTJtdHVlbTByIn0.f1GfZbFLWjiEayI6hb_Qvg', 
    container: 'map', 
    interactive: true, 
    style: 'mapbox://styles/johnnyt/clfz9dcd5008801ogyt1to0i4', 
    zoom: viewState.zoom, 
    center: [viewState.longitude, viewState.latitude], 
    pitch: viewState.pitch, 
    bearing: viewState.bearing
  });
})

</script>


<style lang="scss" scoped>
$orders: 1, 2, 3, 4, 5, 6, 7, 8;
div.map-template{
  position: relative;
  margin-top: 1vh;
  margin-bottom: 1vh;
  width: 36vw;
  height: 82vh;
  @each $order in $orders {
    &[order='#{$order}'] {
        order: $order;
    }
  }

  div.border-box-content {
    width: 36vw;
    height: 82vh;
    border-radius: 10px;

    div.map-container {
        position: absolute;
        top: 0.7%;
        left: 0.7%;
        width: 98.6%;
        height: 98.6%;
        z-index: 10;
        border-radius: 8px;
        overflow: hidden;
    }

    #deck {
        position: absolute;
        top: 0.5%;
        left: 0.5%;
        width: 99%;
        height: 99%;
        border-radius: 8px;
        z-index: 11;
    }
  }
}
</style>
