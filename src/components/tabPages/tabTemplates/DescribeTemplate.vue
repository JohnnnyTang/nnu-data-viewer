<!--
 * @FileDescription: 文字介绍轮播组件
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
 <template>
    <DvBorderBox2 class="desc-template" :order="order">
      <div class="desc-container">
        <el-carousel height="100%" class="desc-carousel" ref="descCarousel" indicator-position="none" :autoplay="false">
            <el-carousel-item v-for="item in descInfo" :key="item.name">
                <div class="desc-box">
                    <div class="desc-title">{{ item.name }}</div>
                    <div class="desc-content">{{ item.desc }}</div>
                </div>
            </el-carousel-item>
        </el-carousel>
      </div>
    </DvBorderBox2>
</template>

<script>
export default {
  name: 'DescribeTemplate',
}
</script>

<script setup>
import { defineProps, watch, ref } from 'vue';
import { BorderBox2 as DvBorderBox2 } from '@kjgl77/datav-vue3';
import { schoolData } from './schoolData';

let props = defineProps({
  order: String,
  schoolIndex: Number
});
console.log('desc props', props.schoolIndex)

let descCarousel = ref();

// const order = props.order;

const descInfo = schoolData;

// onMounted(() => {
//   descCarousel.value.setActiveItem(props.schoolIndex - 1);
// })

watch(props, (newProps)=>{
  descCarousel.value.setActiveItem(newProps.schoolIndex - 1);
})

</script>


<style lang="scss" scoped>
$orders: 1, 2, 3, 4, 5, 6, 7, 8;
div.desc-template{
  position: relative;
//   margin-top: 1vh;
  margin-bottom: 1vh;
  width: 42vw;
  height: 41vh;
  @each $order in $orders {
    &[order='#{$order}'] {
        order: $order;
    }
  }

  div.border-box-content {
    width: 42vw;
    height: 41vh;
    border-radius: 10px;

    div.desc-container {
        position: absolute;
        top: 0.7%;
        left: 0.7%;
        width: 98.6%;
        height: 98.6%;
        z-index: 10;
        border-radius: 8px;
        overflow: hidden;

        .desc-carousel {
            width: 100%;
            height: 100%;

            .el-carousel__container {
                width: 100%;
                height: 100%;

                .desc-box {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    justify-content: center;
                    // row-gap: 5%;

                    div.desc-title {
                        // margin-top: 4%;
                        width: fit-content;
                        height: 6vh;
                        line-height: 6vh;
                        vertical-align: middle;
                        background-image: linear-gradient(
                            25deg,
                            #fdfffc 0%,
                            #a7d3ec 40%,
                            #3886eb 100%
                        );
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        -webkit-animation: hue 60s infinite linear;
                        word-wrap: break-word;
                        font-size: 1.6vw;
                        font-weight: 600;
                        text-align: center;
                        font-family: "Microsoft YaHei";
                    }

                    div.desc-content {
                        padding-left: 3%;
                        padding-right: 3%;
                        background-image: linear-gradient(
                            25deg,
                            #f4fbff 0%,
                            #c7dfed 70%,
                            #a7d3ec 100%
                        );
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        -webkit-animation: hue 60s infinite linear;
                        font-size: 1vw;
                        margin-bottom: 5%;
                    }
                }
            }
        }
    }

  }
}
</style>
