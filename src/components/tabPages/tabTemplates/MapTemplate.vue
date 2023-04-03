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
      <div class="feature-descibe" v-if="describeShow">{{ schoolPos }}</div>
      <div class="roll-back" @click="rollBackView"></div>
    </dv-border-box12>
</template>

<script>
export default {
  name: 'MapTemplate',
}
</script>

<script setup>
import { defineProps, onMounted, defineEmits, ref } from 'vue';
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let tick = 0;

const emit = defineEmits(['clickSchool']);

let describeShow = ref(false);

let schoolPos = ref("")

let rollBackView = null;

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

  rollBackView = () => {
    map.flyTo({
      zoom: viewState.zoom, 
      center: [viewState.longitude, viewState.latitude], 
      pitch: viewState.pitch, 
      bearing: viewState.bearing
    }, 500);
    if(describeShow.value) {
      describeShow.value = false;
    }
  }

  map.on('load', () => {
    setInterval(() => {
        map.setPaintProperty('unionschoolarea', 'circle-opacity', 0.5 + tick / 20);
        tick = (tick + 1.0) % 10;
    }, 100);

    map.on('mouseenter', 'unionschoolarea', () => {
      map.getCanvas().style.cursor = 'pointer'
    })
    map.on('mouseleave', 'unionschoolarea', () => {
      map.getCanvas().style.cursor = ''
    })

    map.on('click', 'unionschoolarea', async (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        zoom: 14.6, 
      }, 1000)
      let clickFeature = e.features[0];
      await sleep(1500);
      console.log('clicked feature id', clickFeature["properties"]["id"])
      describeShow.value = true;
      schoolPos.value = clickFeature["properties"]["pos"];

      emit("clickSchool", clickFeature["properties"]["id"]);
    })
  })

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

    div.feature-descibe {
      position: absolute;
      right: 1vw;
      top: 2vh;
      width: fit-content;
      height: 5vh;
      padding-left: 1vw;
      padding-right: 1vw;
      text-align: center;
      font-size: 2vh;
      border-radius: 3px;
      backdrop-filter: blur(3px);
      line-height: 5vh;
      z-index: 20;
      color: rgb(235, 255, 251);
      background-color: rgba(0, 128, 255, 0.5);
    }

    div.roll-back{
      position: absolute;
      width: 2vw;
      height: 2vw;
      right: 1vw;
      bottom: 4vh;
      z-index: 21;
      // background-color: aqua;
      background-image: url("http://localhost:8080/zoom-in.png");
      background-size: cover;
      transition: all 0.5s ease-in-out;

      &:hover {
        width: 2.5vw;
        height: 2.5vw;
        cursor: pointer;
      }
    }
  }
}
</style>
