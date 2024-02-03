<template>
  <div class="banner-wrapper">
    <div class="container position-relative">
      <swiper
        class="test"
        :pagination="pagination"
        :module="[Pagination]"
        :autoplay="false"
        :loop="true"
      >
        <swiper-slide class="w-100 min-vh-100 d-flex justify-content-center align-items-center">
          <div
            class="title-block d-flex flex-column flex-lg-row justify-content-center align-items-center"
          >
            <div class="border-gradient text-primary text-center text-lg-start fw-bold">
              <h1 class="ls-2 fs-2 text-heading mb-2 fw-bold">享樂酒店</h1>
              <p class="fs-5 mb-5 s-2">Enjoyment Luxury Hotel</p>
            </div>
            <div class="position-relative z-3 px-lg-9">
              <p class="text-white fs-3 fs-lg-1">客房旅宿</p>
            </div>
          </div>
        </swiper-slide>
        <!-- Fake Image -->
        <swiper-slide
          class="w-100 min-vh-100 mt-lg-9 d-flex align-items-center justify-content-center"
        >
          <img class="w-100" src="https://fakeimg.pl/350x200/" />
        </swiper-slide>
        <swiper-slide
          class="w-100 min-vh-100 mt-lg-9 d-flex align-items-center justify-content-center"
        >
          <img class="w-100" src="https://fakeimg.pl/350x200/" />
        </swiper-slide>
        <swiper-slide
          class="w-100 min-vh-100 mt-lg-9 d-flex align-items-center justify-content-center"
        >
          <img class="w-100" src="https://fakeimg.pl/350x200/" />
        </swiper-slide>
        <swiper-slide
          class="w-100 min-vh-100 mt-lg-9 d-flex align-items-center justify-content-center"
        >
          <img class="w-100" src="https://fakeimg.pl/350x200/" />
        </swiper-slide>

        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
  <RoomType />
</template>

<script setup lang="ts">
// @ts-ignore
import RoomType from '@/components/Room/RoomType.vue'
// 先暫時用這種舊的寫法改
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const pagination = {
  clickable: true,
  el: '.swiper-pagination'
}
</script>

<style lang="scss" scoped>
.border-gradient {
  &::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 83px;
    background: linear-gradient(to bottom, #66625f, $white);
    @include lg {
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #be9c7c, $white);
    }
  }
}
.description-block {
  margin-top: 96px;
}
.title-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
