<template>
  <div class="d-md-none">
    <swiper
    class="swiper"
                :modules="modules"
                :loop="true"
                :pagination="pagination"
                :navigation="navigation"
              >
                <swiper-slide v-for="(src, i) in roomInfo.imageUrlList" :key="i">
                  <img :src="src" class="room-img card-img-top rounded-0" alt="room">
                </swiper-slide>
                <div class="swiper-pagination"></div>
                <div class="swiper-btn bg-white d-none d-lg-flex  swiper-btn-prev">
                  <img src="@/assets/icons/prev.svg" alt="prev arrow">
                </div>
                <div class="swiper-btn bg-white d-none d-lg-flex  swiper-btn-next">
                  <img src="@/assets/icons/next.svg" alt="next arrow">
                </div>
            </swiper>
  </div>
    <div class="banner d-none d-md-flex">
      <div class="left">
        <img :src="roomInfo.imageUrl" alt="">
      </div>
      <div class="right">
        <div v-for="(img, index) in roomInfo.imageUrlList" :key="index">
          <img :src="img" alt="">
        </div>
        <!-- <div class="position-relative">
          <button type="button" class="btn btn-outline-primary watch-more bg-white">
            看更多
          </button>
        </div> -->
      </div>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { Room } from '@/interface/room'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Bootstrap
const modules = [Navigation, Pagination]
const navigation = {
  nextEl: '.swiper-btn-next',
  prevEl: '.swiper-btn-prev',
}
const pagination = {
  clickable: true,
  el:'.swiper-pagination'
}
defineProps({
  roomInfo: {
    type: Object as PropType<Room>,
    required: true
  }
})
</script>
<style>
.banner {
  margin: 80px;
  border-radius: 20px;
  gap: 8px;
  overflow: hidden;

  .left {
    max-height: 600px;
    flex: 1 1 978px;
  }

  .right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 8px;
    flex: 1 1 774px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .watch-more {
    position: absolute;
    bottom: 40px;
    right: 40px;
  }
}
</style>