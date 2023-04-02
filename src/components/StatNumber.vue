<!--
 * @FileDescription: 学校整体数据名称和数字-组件
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
    <div class="stat-number">
        <div class="stat-logo" :class="logoType"></div>     
        <div class="stat-name retroshadow">{{ statName }}</div>
        <div class="stat-digit">{{ statNumberChange }}</div>
    </div>
</template>

<script>
export default {
  name: 'StatNumber',
}
</script>

<script setup>
import { defineProps, onMounted, ref } from 'vue'

let props = defineProps({
    statName: String,
    statNumber: Number, 
    logoType: String
})

let statNumberChange = ref(0)

const counterAnim = (duration = 1000) => {
 let startTimestamp = null;
 const step = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  statNumberChange.value = Math.floor(progress * props.statNumber);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }
 };
 window.requestAnimationFrame(step);
};
console.log(props.statNumber)

onMounted(() => {
    counterAnim(1000);
})


</script>

<style scoped lang="scss">
div.stat-number {
    position: relative;
    top: 1vh;
    display: flex;
    flex-flow: column wrap;
    // background-color: aliceblue;
    width: fit-content;
    height: 8vh;
    padding-right: 3vw;
    padding-left: 1vw;
    justify-content: center;
    column-gap: 0.6vw;
    align-items: center;
    background-color: rgba(35, 84, 182, 0.5);
    border-radius: 5px;
    backdrop-filter: blur(2px);
    box-shadow: 0 10px 28px rgba(162, 187, 255, 0.15), 0 2px 8px rgba(91, 135, 255, 0.3);
    cursor: pointer;

    div.stat-logo {
        width: 3vh;
        height: 3vh;
        // background-color: #ffc67c;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
        background-size: cover;
        background-repeat: no-repeat;

        &.student-logo {
            background-image: url("http://localhost:8080/reading.png");
        }

        &.graduate-logo {
            background-image: url("http://localhost:8080/graduated.png");
        }

        &.school-logo {
            background-image: url("http://localhost:8080/lesson.png");
        }

        &.subject-logo {
            background-image: url("http://localhost:8080/books.png");
        }

        &.lab-logo {
            background-image: url("http://localhost:8080/medical-lab.png");
        }

        &.communication-logo {
            background-image: url("http://localhost:8080/networking.png");
        }
    }

    div.stat-name {
        font-size: 1vw;
        font-family: "Microsoft YaHei";
        font-weight: 600;

        &.retroshadow {
            color: #eaf0ff;
            // background-color: #d5d5d5;
            letter-spacing: .05em;
            text-shadow: 
                2px 2px 0px #9badffe8, 
                3px 4px 0px rgba(1, 0, 75, 0.2);
        }
    }

    div.stat-digit {
        color: #fffd7c;
        font-size: 1.2vw;
        font-weight: 400;
        font-family: 'Impact';
    }
}
</style>