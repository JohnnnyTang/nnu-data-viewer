<!--
 * @FileDescription: 切换Tab页面的控制栏
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
  <div class="tab-control">
    <div class="title-container">
      <dv-decoration8 :reverse="true" id="title-dec"/>
      <div class="page-title">南京师范大学高质量发展</div>
      <dv-decoration2 :reverse="true" id="title-splitter" :dur="3" />
    </div>
    <div class="tabs-button">
      <SingleTab />
    </div>
  </div>
</template>

<script>
import SingleTab from './SingleTab.vue'

export default {
  name: 'TabControl',
  components: {
    SingleTab,
  }
}
</script>

<script setup>

</script>

<style scoped lang="scss">
div.tab-control {
  height: 6vh;
  width: 100vw;
  background-color: rgb(24, 47, 90);

  div.title-container {
    #title-dec {
      position: absolute;
      width:20vw;
      height:2vh;
      left: 0vw;
      top: 4vh;
    }

    div.page-title {
      position: absolute;
      width: 18vw;
      height: 6vh;
      // top: 10vh;
      // left: 0vw;
      padding-left: 20px;
      line-height: 6vh;
      background-image: linear-gradient(
        25deg,
        #ffffff 0%,
        #b1f6ff 40%,
        #7bf0ff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: hue 60s infinite linear;
      word-wrap: break-word;
      font-size: 1.5vw;
      text-align: left;
      vertical-align: middle;
      color: white;
      font-weight: 600;
      font-family: "Microsoft YaHei";
    }

    #title-splitter {
      position: absolute;
      left: 19vw;
      height: 6vh;
      width: 2vw;
      // svg {
      //   rect {
      //     width: 3px;
      //   }
      // }
    }
  }

  div.tabs-button {
    position: absolute;
    left: 28vw;
    height: 6vh;
  }
}
</style>
