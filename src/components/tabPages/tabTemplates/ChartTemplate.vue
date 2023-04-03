<!--
 * @FileDescription: 图表数据组件
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
 <template>
    <dv-border-box12 class="border-box" :styleId="styleType" :order="order">
        <div
            :index='chartId'
            ref="chartDom" 
            class="chart-container" 
            :styleId="styleType">
        >
        </div>
    </dv-border-box12>
</template>

<script>
export default {
    name: "chartContainer",
};
</script>

<script setup>
import * as echarts from 'echarts';
import {  ref, onMounted, defineProps } from 'vue';
import { frontDataNew } from './chartData';
import { BorderBox12 as DvBorderBox12 } from '@kjgl77/datav-vue3'

let props = defineProps({
    chartId: String, 
    order: String, 
    styleType: String, 
})

// console.log(props);

const chartDom = ref(null);
const styleType = ref(props.styleType);
// console.log(frontDataNew)

onMounted(()=> {
    console.log('dom', chartDom.value);
    let chart = echarts.init(chartDom.value)
    let chartConfig = frontDataNew['charts'][+(props.chartId)];
    chart.setOption(chartConfig['chartOpt'])
    if(chartConfig['dynamicFunc'] !== undefined) {
        setInterval(
            function() {
                chartConfig['dynamicFunc'](chart)
            }, 3000
        );
    }
    // TODO: window.onsize doesn't work on components
    window.onresize = function() {
        chart.resize();
    };
});
</script>

<style lang='scss'>
$orders: 1, 2, 3, 4, 5, 6, 7, 8;
div.border-box {
    width: 30vh;
    height: 30vh;

    @each $order in $orders {
        &[order='#{$order}'] {
            order: $order;
        }
    }

    &[styleId='1'] {
        width: 28vw;
        height: 32vh;
        // margin-top: 1vh;
        margin-left: 1vw;
    }

    &[styleId='2'] {
        width: 28vw;
        height: 36vh;
        margin-left: 1vw;
        margin-bottom: 1vh;
    }

    &[styleId='3'] {
        width: 22vw;
        height: 40vh;
        margin-top: 1vh;
    }

    &[styleId='4'] {
        width: 22vw;
        height: 42vh;
        margin-bottom: 1vh;
    }

    &[styleId='5'] {
        width: 20vw;
        height: 36vh;
        // margin-bottom: 1vh;
        margin-left: 1vw;
    }

    &[styleId='6'] {
        width: 20vw;
        height: 32vh;
        margin-bottom: 1vh;
        margin-left: 1vw;
    }
}
div.chart-container {
    border-radius: 0.4em;
    transition: transform 1s ease-in-out;

    &[styleId='1'] {
        position: absolute;
        left: 1%;
        bottom: 1%;
        height: 98%;
        width: 98%;
    }

    &[styleId='2'] {
        position: absolute;
        left: 1%;
        bottom: 1%;
        height: 98%;
        width: 98%;
    }

    &[styleId='3'] {
        width: 22vw;
        height: 40vh;
        margin-top: 1vh;
    }

    &[styleId='4'] {
        width: 22vw;
        height: 42vh;
        margin-bottom: 1vh;
    }

    &[styleId='5'] {
        width: 20vw;
        height: 36vh;
        // margin-bottom: 1vh;
    }

    &[styleId='6'] {
        width: 20vw;
        height: 32vh;
        margin-bottom: 1vh;
        // margin-left: 1vw;
    }

    div {
        canvas {
            border-radius: 0.4em;
        }
    }
}
</style>