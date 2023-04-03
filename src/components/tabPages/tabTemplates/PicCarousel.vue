<!--
 * @FileDescription: 图片轮播组件
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
 -->
 <template>
    <DvBorderBox2 class="pic-template" :order="order">
      <div class="pic-container">
        <el-carousel height="100%" class="pic-carousel" ref="picCarousel" indicator-position="none" :autoplay="false">
            <el-carousel-item v-for="item in picInfo" :key="item.name">
                <img :src="item.imgSrc" class="image-bg">
            </el-carousel-item>
        </el-carousel>
      </div>
    </DvBorderBox2>
</template>

<script>
export default {
  name: 'PicCarouselTemplate',
}
</script>

<script setup>
import { defineProps, ref, watch } from 'vue';
import { BorderBox2 as DvBorderBox2 } from '@kjgl77/datav-vue3';
import { schoolData } from './schoolData';

let props = defineProps({
  order: String,
  schoolIndex: Number
});
console.log('pic porps', props.schoolIndex)

let picCarousel = ref();

const picInfo = schoolData;

watch(props, (newProps)=>{
  picCarousel.value.setActiveItem(newProps.schoolIndex - 1);
})
// onMounted(() => {
//   picCarousel.value.setActiveItem(props.schoolIndex - 1);
// })

</script>


<style lang="scss" scoped>
$orders: 1, 2, 3, 4, 5, 6, 7, 8;
div.pic-template{
  position: relative;
  margin-top: 1vh;
  margin-bottom: 1vh;
  width: 42vw;
  height: 40vh;
  @each $order in $orders {
    &[order='#{$order}'] {
        order: $order;
    }
  }

  div.border-box-content {
    width: 42vw;
    height: 40vh;
    border-radius: 10px;

    div.pic-container {
        position: absolute;
        top: 0.7%;
        left: 0.7%;
        width: 98.6%;
        height: 98.6%;
        z-index: 10;
        border-radius: 8px;
        overflow: hidden;

        .pic-carousel {
            width: 100%;
            height: 100%;

            .el-carousel__container {
                width: 100%;
                height: 100%;

                .image-bg {
                    height: 100%;
                    width: 100%;
                    // background-image: url('http://localhost:8080/南京师范大学吴江实验幼儿园（图片1）.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            }
        }
    }

  }
}
</style>
