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
      <SingleTab v-for="tab in tabsInfo" :key=tab.name
        :tabName=tab.name :ifActive="tab.ifActive" 
      />
    </div>
    <div class="clock">
        <p class="time">{{ curTime.toLocaleTimeString() }}</p>
    </div>
    <div class="play-button">
      <button id="play-button" type="button" :class="{pause:ifPause}" @click="PlayOnClick">
        <span class="progress"></span>
      </button>
    </div>
    <!-- <div class="title-logo"></div> -->
  </div>
</template>

<script>
import SingleTab from './tabControl/SingleTab.vue'

export default {
  name: 'TabControl',
  components: {
    SingleTab,
  }
}
</script>

<script setup>
import { ref, onMounted } from 'vue'

let tabsInfo = ref([
  {name: '本科生毕业情况', ifActive:true}, 
  {name: '研究生毕业情况', ifActive:false}, 
  {name: '联合办学情况', ifActive:false}, 
  {name: '师范教育协同提质计划', ifActive:false}, 
])

let activeTabIndex = 0;

const curTime = ref(new Date());
const updataTime = () => {
    curTime.value = new Date();
}


let ifPause = ref(false);

let autoPlay = null;

const PlayOnClick= () => {
  ifPause.value = !ifPause.value;
  if(ifPause.value) {
    autoPlay = setInterval(() => {
      tabsInfo.value[activeTabIndex]["ifActive"] = false;
      activeTabIndex = (activeTabIndex+1)%(tabsInfo.value.length)
      tabsInfo.value[activeTabIndex]["ifActive"] = true;
    }, 1000);
  }
  else {
    clearInterval(autoPlay)
  }
}

onMounted(() => {
    setInterval(updataTime, 1000);
});

</script>

<style scoped lang="scss">
div.tab-control {
  height: 6vh;
  width: 100vw;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 24, 68, 1) 0%,
    rgba(0, 24, 68, 0.85) 36%,
    rgba(0, 24, 68, 0.6) 100%
  );

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
    }
  }

  div.tabs-button {
    position: absolute;
    left: 28vw;
    height: 6vh;
    width: 42vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  // div.title-logo {
  //   position: absolute;
  //   right: 1.5vw;
  //   top: 0.5vh;
  //   height: 5vh;
  //   width: 5vh;
  //   background-image: url('http://localhost:8080/nnu-logo.png');
  //   background-size: cover;
  // }
  div.clock {
      text-align: center;
      margin-top: 0;
      margin-bottom: 0;
      position: absolute;
      right: 8vw;
      top: 0vh;
      height: 6vh;
      line-height: 6vh;
      p {
        margin-top: 0;
        margin-bottom: 0;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: 0.05em;
        font-size: 1.5vw;
        text-shadow: 
          0 0.5px 0 #ccc, 
          0 1px 0 #c9c9c9, 
          0 1.5px 0 #bbb, 
          0 2px 0 #b9b9b9, 
          0 2.5px 0 #aaa, 
          0 3px 0.5px rgba(0,0,0,.1), 
          0 0 2.5px rgba(0,0,0,.1), 
          0 0.5px 1.5px rgba(0,0,0,.3), 
          0 1.5px 2.5px rgba(0,0,0,.2), 
          0 2.5px 5px rgba(0,0,0,.25), 
          0 5px 5px rgba(0,0,0,.2), 
          0 10px 10px rgba(0,0,0,.15);
      }

      p {
          width: 100%;
          height: 100%;
          line-height: 6vh;
          text-align: center;
          vertical-align: middle;
      }
  }
  div.play-button {
    position: absolute;
    right: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5vh;
      width: 6vh;
      border-radius: 5px;
      border: none;
      background: rgb(34, 66, 126);
      cursor: pointer;
      transition: transform 0.1s ease-in-out;
      position: relative;
      overflow: hidden;
      &:hover {
        transform: scale(1.1);
      }
      &:before,
      &:after {
        transition: transform 0.25s ease-in-out;
      }
      &:before {
        position: relative;
        content: "";
        display: block;
        border-left: 15px solid lighten(#7bd2f6, 10);
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        opacity: 1;
        z-index: 0;
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 1.6vh;
        width: 1.6vh;
        box-shadow: inset 8px 0 0 #004969, inset -8px 0 0 #004969;
        transform: scale(0);
        z-index: 2;
      }
      .progress {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 5vh;
        bottom: 0px;
        left: 0;
        &:before {
          content: "";
          display: block;
          height: 100%;
          width: 100%;
          opacity: 0.35;
          background: #0040a1;
          transform: scaleX(0);
          transform-origin: left;
        }
      }
      &.pause {
        &:before {
          transform: scale(20);
          pointer-events: none;
        }
        &:after {
          transform: scale(1);
        }
        .progress {
          transform: translateY(0px);
          &:before {
            transition: transform 50s linear;
            transform: scaleX(1);
          }
        }
      }
    }
  }
}
</style>
