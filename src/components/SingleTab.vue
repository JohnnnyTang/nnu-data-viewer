<!--
 * @FileDescription: Tab control 中单个tab切换按钮
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
<template>
  <div class="single-tab">
    <div href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      联合办学学校
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleTab',
}
</script>

<script setup>

</script>

<style scoped lang="scss">
div.single-tab {
    height: 100%;
    width: fit-content;
    &:hover {
        background: #3191dfef;
        color: #fff;
        border-radius: 2px;
        box-shadow: 0 0 2px rgba(48, 144, 223, 0.937),
                    0 0 10px rgba(48, 144, 223, 0.837),
                    0 0 20px rgba(48, 144, 223, 0.637),
                    0 0 40px rgba(48, 144, 223, 0.337);
        cursor: pointer;
    }
    div {
        position: relative;
        display: inline-block;
        height: 100%;
        padding: 0px 0.5vw;
        color: #eefeff;
        font-size: 0.8vw;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        line-height: 6vh;
        overflow: hidden;
        transition: .5s;
        margin-top: 0px;
        letter-spacing: 4px;

        

        span {
            position: absolute;
            display: block;

            @keyframes btn-anim1 {
                0% {
                    left: -100%;
                }
                50%,100% {
                    left: 100%;
                }
            }

            &:nth-child(1) {
                top: 0;
                left: -100%;
                width: 100%;
                height: 0.2vw;
                background: linear-gradient(90deg, transparent, rgba(73, 167, 255, 0.937));
                &:hover {
                    background: linear-gradient(90deg, transparent, rgba(0, 78, 151, 0.937));
                }
                animation: btn-anim1 1.6s linear infinite;
            }
            
            @keyframes btn-anim2 {
                0% {
                    top: -100%;
                }
                50%,100% {
                    top: 100%;
                }
            }

            &:nth-child(2) {
                top: -100%;
                right: 0;
                width: 0.2vw;
                height: 100%;
                background: linear-gradient(180deg, transparent, rgba(73, 167, 255, 0.937));
                animation: btn-anim2 1.6s linear infinite;
                animation-delay: .4s
            }

            @keyframes btn-anim3 {
                0% {
                    right: -100%;
                }
                50%,100% {
                    right: 100%;
                }
            }

            &:nth-child(3) {
                bottom: 0;
                right: -100%;
                width: 100%;
                height: 0.2vw;
                background: linear-gradient(270deg, transparent, rgba(73, 167, 255, 0.937));
                animation: btn-anim3 1.6s linear infinite;
                animation-delay: 0.8s
            }

            @keyframes btn-anim4 {
                0% {
                    bottom: -100%;
                }
                50%,100% {
                    bottom: 100%;
                }
            }

            &:nth-child(4) {
                bottom: -100%;
                left: 0;
                width: 0.2vw;
                height: 100%;
                background: linear-gradient(360deg, transparent, rgba(73, 167, 255, 0.937));
                animation: btn-anim4 1.6s linear infinite;
                animation-delay: 1.2s
            }
        }
    }
}
</style>