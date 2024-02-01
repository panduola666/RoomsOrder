<template>
  <div class="container">
    <div class="my-7 mt-lg-10 mb-lg-9">
      <p class="text-neutral-80 fs-small fs-lg-6">房型選擇</p>
      <h2 class="text-primary fs-lg-1 fs-3 fw-bold">各種房型，任您挑選</h2>
    </div>
    <!-- 1 -->
    <div class="flex flex-column flex-lg-row position-relative">
      <!-- TODO: pagination -->
      <!-- 1 -->
      <div class="row">
        <swiper-container
          ref="swiperEl"
          class="col-12 col-lg-7 w-lg-50 mb-5 mb-lg-8"
          :pagination="{
            clickable: true,
          }"
          :navigation="navigation"
          :modules="[Navigation, Pagination]"
        >
          <swiper-slide>
            <img class="w-full" src="@/assets/image/desktop/Room2-1.png" alt="room2-1">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/desktop/Room2-2.png" alt="room2-2">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/desktop/Room2-3.png" alt="room2-3">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/desktop/Room2-4.png" alt="room2-4">
          </swiper-slide>
          <div class="swiper-pagination"></div>
          <!-- 左箭頭 -->
          <button
            v-if="slides.havePrev"
            type="button"
            @click="goPrev"
            class="position-absolute top-50 start-0">
            <img src="@/assets/icons/prev.svg" alt="back arrow">
          </button>
          <!-- 右箭頭 -->
          <button
            v-if="slides.haveNext"
            type="button"
            @click="goNext"
            class="position-absolute top-50 end-0 z-3">
            <img src="@/assets/icons/next.svg" alt="next arrow">
          </button>
        </swiper-container>
        <div class="col col-lg-5 bg-white py-3 py-lg-7">
          <div>
            <h2 class="fs-4 fs-lg-2">尊爵雙人房</h2>
            <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
          </div>
          <ul class="d-flex gap-3 ps-0">
            <li class="border border-primary-40 py-4 px-3 room-detail">
              <img src="@/assets/icons/roomSize.svg" alt="room size">
              <p>24坪</p>
            </li>
            <li class="border border-primary-40 py-4 px-3 room-detail">
              <img src="@/assets/icons/roomBed.svg" alt="room bed">
              <p>1 張大床</p>
            </li>
            <li class="border border-primary-40 py-4 px-3 room-detail">
              <img src="@/assets/icons/roomPeople.svg" alt="room people">
              <p>2-4 人</p>
            </li>
          </ul>
          <div class="line-deco my-3 my-lg-5"></div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="mb-0 text-primary fs-3 fw-bold">NT$ 10,000</p>
            <!-- TODO: 可以補上 router link -->
            <img width="24" height="24" src="@/assets/icons/arrowRight.svg" alt="arrowRight">
          </div>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="flex flex-column flex-lg-row position-relative">
      <!-- TODO: pagination -->
      <!-- 1 -->
      <div class="row">
        <swiper-container
          ref="swiperEl"
          class="col-12 col-lg-7 w-lg-50 mb-5 mb-lg-8"
          :pagination="{
            clickable: true,
          }"
          :navigation="navigation"
          :modules="[Navigation, Pagination]"
        >
          <swiper-slide>
            <img class="w-full" src="@/assets/image/desktop/Room3-1.png" alt="room2-1">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/desktop/Room3-2.png" alt="room2-2">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/desktop/Room3-3.png" alt="room2-3">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/desktop/Room3-4.png" alt="room2-4">
          </swiper-slide>
          <div class="swiper-pagination"></div>
          <!-- 左箭頭 -->
          <button
            v-if="slides.havePrev"
            type="button"
            @click="goPrev"
            class="position-absolute top-50 start-0">
            <img src="@/assets/icons/prev.svg" alt="back arrow">
          </button>
          <!-- 右箭頭 -->
          <button
            v-if="slides.haveNext"
            type="button"
            @click="goNext"
            class="position-absolute top-50 end-0 z-3">
            <img src="@/assets/icons/next.svg" alt="next arrow">
          </button>
        </swiper-container>
        <div class="col col-lg-5 bg-white py-3 py-lg-7">
          <div>
            <h2 class="fs-4 fs-lg-2">尊爵雙人房</h2>
            <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
          </div>
          <ul class="d-flex gap-3 ps-0">
            <li class="border border-primary-40 py-4 px-3 room-detail">
              <img src="@/assets/icons/roomSize.svg" alt="room size">
              <p>24坪</p>
            </li>
            <li class="border border-primary-40 py-4 px-3 room-detail">
              <img src="@/assets/icons/roomBed.svg" alt="room bed">
              <p>1 張大床</p>
            </li>
            <li class="border border-primary-40 py-4 px-3 room-detail">
              <img src="@/assets/icons/roomPeople.svg" alt="room people">
              <p>2-4 人</p>
            </li>
          </ul>
          <div class="line-deco my-3 my-lg-5"></div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="mb-0 text-primary fs-3 fw-bold">NT$ 10,000</p>
            <!-- TODO: 可以補上 router link -->
            <img width="24" height="24" src="@/assets/icons/arrowRight.svg" alt="arrowRight">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
// import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { Navigation, Pagination } from 'swiper/modules'
import { useSlideStore } from '../../stores/slidStore'

const slideStore = useSlideStore()
const { swiperEl, slides } = storeToRefs(slideStore)
const { turnSlide, goNext, goPrev } = slideStore
// watchEffect(() => {
//   if (slides.value) {
//     turnSlide()
//   }
// })

const navigation = {
  nextEl: '.swiper-btn-next',
  prevEl: '.swiper-btn-prev',
}

const pagination = {
  clickable: true,
  el: '.swiper-pagination',
}
</script>

<style lang="scss" scoped>
  .room-detail {
    width: 97px;
    height: 97px;
    border-radius: 8px;
  }
  .arrow-right {
    cursor: pointer;
  }
  .line-deco {
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #be9c7c, #fff);
  }
</style>