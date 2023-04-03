<!--
 * @FileDescription: 大弧线地图数据组件
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
    <dv-border-box12 class="map-template" :order="order">
        <div class="map-container" id="map"></div>
        <canvas id="deck" ref="deckMap"></canvas>
    </dv-border-box12>
</template>

<script>
export default {
  name: 'ArcLayerTemplate',
}
</script>

<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { BorderBox12 as DvBorderBox12 } from '@kjgl77/datav-vue3';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Deck } from '@deck.gl/core/typed';
import { ArcLayer } from '@deck.gl/layers'
import { geoData } from './geoData'

// console.log(geoData)

let props = defineProps({
  order: String
});
console.log(props)

const deckMap = ref();

// initial view state
let viewState = {
  latitude: 32.834,
  longitude: 119.587,
  zoom: 7.4,
  pitch: 58.00,
  bearing: 0
};

// maybe useful afterwards...(ps: not useful now)
let zoom = 7;
console.log(zoom);

let currentDataIndex = 0;
let dataNameList = ["2020bachel", "2021bachel", "2022bachel"]

const nnuPos = [118.9126,32.1002];

// mapping color, pos->0-1
const mapColor = (stColor, endColor, pos) => {
    if(pos > 0.8) {
        return [249, 56, 40, 250]
    }
    else if(pos > 0.5) {
        return [250, 117, 90, 250]
    }
    else if(pos > 0.2) {
        return [247, 130, 27, 250]
    }
    else {
        let posPos = Math.exp(pos / 0.2) / Math.E
        const stBlue = [187, 232, 242, 240]
        const endBlue = [25, 75, 224, 240]
        return [
            (endBlue[0] - stBlue[0]) * posPos + stBlue[0],
            (endBlue[1] - stBlue[1]) * posPos + stBlue[1],
            (endBlue[2] - stBlue[2]) * posPos + stBlue[2],
            (endBlue[3] - stBlue[3]) * posPos + stBlue[3],
        ]
    }
}

const mapColor2 = (stColor, endColor, pos) => {
    if(pos > 0.8) {
        return [255, 151, 37, 250]
    }
    else if(pos > 0.5) {
        return [242, 183, 5, 250]
    }
    else if(pos > 0.2) {
        return [201, 235, 249, 250]
    }
    else {
        let posPos = Math.exp(pos / 0.2) / Math.E
        const stBlue = [182, 220, 239, 240]
        const endBlue = [3, 76, 140, 240]
        return [
            (endBlue[0] - stBlue[0]) * posPos + stBlue[0],
            (endBlue[1] - stBlue[1]) * posPos + stBlue[1],
            (endBlue[2] - stBlue[2]) * posPos + stBlue[2],
            (endBlue[3] - stBlue[3]) * posPos + stBlue[3],
        ]
    }
}

const mapData2Color = (data, max, min, stColor, endColor) => {
    const wholeInterval = max - min;
    let dataPos = (data - min) / wholeInterval;
    return mapColor(stColor, endColor, dataPos);
}

const mapData2Color2 = (data, max, min, stColor, endColor) => {
    const wholeInterval = max - min;
    let dataPos = (data - min) / wholeInterval;
    return mapColor2(stColor, endColor, dataPos);
}

const mapData2Width = (data, max, min, stWidth, endWidth) => {
    const wholeInterval = max - min;
    let dataPos = (data - min) / wholeInterval;
    dataPos = Math.exp(dataPos) / Math.E;
    return (endWidth - stWidth) * dataPos + stWidth
}

let tick = 1.0;

onMounted(() => {
    console.log("Mounted...");
    // mapbox base map
    const map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1Ijoiam9obm55dCIsImEiOiJja2xxNXplNjYwNnhzMm5uYTJtdHVlbTByIn0.f1GfZbFLWjiEayI6hb_Qvg', 
        container: 'map', 
        interactive: false, 
        style: 'mapbox://styles/johnnyt/clfys8wwj001d01o36gl9gtuh', 
        zoom: viewState.zoom, 
        center: [viewState.longitude, viewState.latitude], 
        pitch: viewState.pitch, 
        bearing: viewState.bearing
    });

    map.on('load', () => {
        setInterval(() => {
            map.setPaintProperty('jscitypoint', 'circle-blur', 0.6 + tick / 20);
            tick = (tick + 1.0) % 10;
        }, 100);
    })

    if(deckMap.value == null) {
        return;
    }

    const renderLayer = () => {
        const workFlowLayer = new ArcLayer({
            id: 'workFlowArc', 
            data: geoData["jsCityPoint"]["features"], 
            // source position [x, y]
            getSourcePosition: nnuPos, 
            // target position [x, y]
            getTargetPosition: d => d.geometry.coordinates,
            // source color
            getSourceColor: d => {
                // console.log(currentDataIndex)
                return mapData2Color(d.properties[dataNameList[currentDataIndex]], 55, 0, [57, 132, 230, 200], [229, 70, 53, 200]);
            },
            // end color
            getTargetColor: d => {
                return mapData2Color2(d.properties[dataNameList[currentDataIndex]], 55, 0, [57, 132, 230, 200], [229, 70, 53, 200]);
            },
            getWidth: d => {
                let width = mapData2Width(d.properties[dataNameList[currentDataIndex]], 55, 0, 0, 8);
                // console.log('width', width)
                return width
            },
            // if need to update
            updateTriggers: {
                getSourceColor: [currentDataIndex], 
                getTargetColor: [currentDataIndex],
                getWidth: [currentDataIndex]
            }
        })

        deck.setProps(
            {
                layers: [workFlowLayer]
            }
        )
    }

    // dynamic
    const changeWorkData = () => {
        currentDataIndex = (currentDataIndex + 1) % (dataNameList.length);
        // console.log("change data", currentDataIndex)
        renderLayer();
    }

    const deck = new Deck({
        canvas: 'deck',
        width: "98%", 
        height: "98%", 
        initialViewState: viewState, 
        controller: true, 
        onViewStateChange: ( {viewState} ) => {
            map.jumpTo({
                center: [viewState.longitude, viewState.latitude], 
                zoom: viewState.zoom, 
                bearing: viewState.bearing, 
                pitch: viewState.pitch
            });
            renderLayer();
        }, 
        onLoad: () => {
            // dynamic change data
            setInterval(changeWorkData, 1000);
        }
    })
})

// const order = props.order;

</script>


<style lang="scss" scoped>
$orders: 1, 2, 3, 4, 5, 6, 7, 8;
div.map-template{
  position: relative;
  margin-top: 1vh;
  margin-bottom: 1vh;
  width: 48vw;
  height: 82vh;
  @each $order in $orders {
    &[order='#{$order}'] {
        order: $order;
    }
  }

  div.border-box-content {
    width: 48vw;
    height: 82vh;
    border-radius: 10px;

    div.map-container {
        position: absolute;
        top: 0.5%;
        left: 0.5%;
        width: 99%;
        height: 99%;
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
