<!--
 * @FileDescription: 单一数据名称与数据或多个组合展示
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
    <dv-border-box13 class="keyVal-template" :order="order" :keyValId="keyValId">
        <div class="data-title">{{ title }}</div>
        <div class="key-val" v-for="nameVal in nameValList" :key="nameVal.name">
            <div class="key-name">{{ nameVal.name }}</div>
            <div class="val-content">{{ nameVal.val }}</div>
        </div>
    </dv-border-box13>
</template>

<script>
export default {
  name: 'KeyValTemplate',
}
</script>


<script setup>
import { defineProps } from 'vue';
import { BorderBox13 as DvBorderBox13 } from '@kjgl77/datav-vue3'

let props = defineProps({
    keyValId: String, 
    order: String, 
    title: String, 
    nameValList: Array 
});
console.log(props)

// const order = props.order;

</script>


<style lang="scss">
$orders: 1, 2, 3, 4, 5, 6, 7, 8;

div.keyVal-template {
  position: relative;
  &[keyValId='1'] {
    margin-top: 1vh;
    margin-left: 1vw;
    width: 28vw;
    height: 12vh;

    div.border-box-content{
        width: 98%;
        // margin-left: 2%;
        column-gap: 5%;
    }

    div.data-title {
        // margin-top: 0.4vh;
        width: 28vw;
        line-height: 3vh;
        height: 3vh;
        font-size: 1vw;
        font-weight: 600;
        color: rgba(230, 242, 252, 0.9);
    }

    div.key-val {
        width: fit-content;
        height: fit-content;
        row-gap: 1vh;
        justify-content: flex-start;
        
        div.key-name {
            font-size: 1.8vh;
            font-weight: 600;
            font-family: "Microsoft YaHei";
            text-align: right;
            color: rgb(246, 251, 255);
        }
        div.val-content {
            font-size: 2.6vh;
            text-align: right;
            font-family: "Impact";
            color: rgb(97, 247, 255);
        }
    }
  }

  &[keyValId='2'] {
    margin-top: 1vh;
    margin-left: 1vw;
    width: 20vw;
    height: 12vh;

    div.border-box-content{
        width: 98%;
        // margin-left: 2%;
        column-gap: 9%;
    }

    div.data-title {
        // margin-top: 0.4vh;
        width: 28vw;
        line-height: 3vh;
        height: 3vh;
        font-size: 1vw;
        font-weight: 600;
        color: rgba(230, 242, 252, 0.9);
    }

    div.key-val {
        width: fit-content;
        height: fit-content;
        row-gap: 1vh;
        justify-content: flex-start;
        
        div.key-name {
            font-size: 1.8vh;
            font-weight: 600;
            font-family: "Microsoft YaHei";
            text-align: right;
            color: rgb(246, 251, 255);
        }
        div.val-content {
            font-size: 2.6vh;
            text-align: right;
            font-family: "Impact";
            color: rgb(181, 255, 97);
        }
    }
  }
  
  @each $order in $orders {
    &[order='#{$order}'] {
        order: $order;
    }
  }

  div.border-box-content{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
  }
  

  div.data-title {
    position: relative;
    font-family: "Microsoft YaHei";
    text-align: center;
  }

  div.key-val {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    div.key-name {
        width: 100%;
        
    }
    div.val-content {
        width: 100%;
    }
  }
}
</style>
