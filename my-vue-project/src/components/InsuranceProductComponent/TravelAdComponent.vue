<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Define the onSlideChange function
const onSlideChange = () => {
    console.log("slide change");
};

// Define Swiper modules
const modules = [Autoplay, Navigation, Pagination];

const imgUrl1 = ref("/images/1.jpg");
const imgUrl2 = ref("/images/2.jpg");
const imgUrl3 = ref("/images/3.jpg");
const imgUrl4 = ref("/images/4.jpg");
</script>

<template>
  <swiper
    :loop="true"
    :navigation="false"
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="slide-content">
        <div class="text-left">我是</div>
        <img :src="imgUrl1" alt="袋熊1" />
        <div class="text-right">袋熊</div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-content">
        <div class="text-left">我愛</div>
        <img :src="imgUrl2" alt="袋熊2" />
        <div class="text-right">抱抱</div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-content">
        <div class="text-left">是不是</div>
        <img :src="imgUrl3" alt="袋熊3" />
        <div class="text-right">沒被揍過</div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-content">
        <div class="text-left">盯</div>
        <img :src="imgUrl4" alt="袋熊4" />
        <div class="text-right">~</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="css" scoped>
.swiper-slide {
    display: flex; /* 使用 Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100%; /* 確保容器高度一致 */
}

.slide-content {
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: space-between; /* 左右對齊 */
    width: 100%;
    max-width: 800px; /* 限制內容寬度 */
}

.text-left,
.text-right {
    width: 20%; /* 左右文字區域寬度 */
    text-align: center; /* 文字居中 */
    font-size: 16px;
    color: #333;
}

img {
    max-width: 60%; /* 限制圖片寬度 */
    max-height: 300px; /* 限制圖片高度 */
    height: auto; /* 等比例縮放 */
}
</style>
