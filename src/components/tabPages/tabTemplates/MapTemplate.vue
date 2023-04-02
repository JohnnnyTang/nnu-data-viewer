<!--
 * @FileDescription: 地图数据组件
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
    <dv-border-box12 class="map-template" :order="order">
    </dv-border-box12>
</template>

<script>
export default {
  name: 'MapTemplate',
}
</script>

<script setup>
import { defineProps } from 'vue';
import { BorderBox12 as DvBorderBox12 } from '@kjgl77/datav-vue3'

let props = defineProps({
  order: String
});
console.log(props)

// const order = props.order;

</script>


<style lang="scss">
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
}
</style>
