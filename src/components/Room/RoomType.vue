<template>
  <section class="bg-light">
    <div class="container room-list">
      <div class="my-7 mt-lg-10 mb-lg-9">
      <p class="text-neutral-80 fs-small fs-lg-6">房型選擇</p>
      <h2 class="text-primary fs-lg-1 fs-3 fw-bold">各種房型，任您挑選</h2>
    </div>
      <ul class="ps-0">
        <li class="card">
          <div class="row g-0 align-items-center">
            <div class="col-lg-7">
              <swiper
                :modules="modules"
                :loop="true"
                :pagination="pagination"
                :navigation="navigation"
                class="swiper"
              >
                <swiper-slide>
                  <img src="@/assets/image/desktop/Room2-1.png" class="room-img card-img-top rounded-0" alt="room">
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/image/desktop/Room2-2.png" class="room-img card-img-top rounded-0" alt="room">
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/image/desktop/Room2-3.png" class="room-img card-img-top rounded-0" alt="room">
                </swiper-slide>
                <div class="swiper-pagination"></div>
                <div class="swiper-btn bg-white d-none d-lg-flex  swiper-btn-prev">
                  <span class="material-symbols-outlined text-primary fw-bold">
                    keyboard_arrow_left
                  </span>
                </div>
                <div class="swiper-btn bg-white d-none d-lg-flex  swiper-btn-next">
                  <span class="material-symbols-outlined text-primary fw-bold">
                    keyboard_arrow_right
                  </span>
                </div>
            </swiper>
            </div>
            <div class="col-lg-5">
              <div class="card-body p-4 px-lg-5">
                <h3 class="card-title text-black fw-bold">尊爵雙人房</h3>
                <p class="card-text text-secondary mb-5">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <ul class="d-flex text-black ps-0">
                  <li class="room-detail-icon border border-primary-40 py-4 px-3 me-3">
                    <img class="mb-2" src="@/assets/icons/roomSize.svg" alt="room size">
                    <p>24坪</p>
                  </li>
                  <li class="room-detail-icon border border-primary-40 py-4 px-3 me-3">
                    <img class="mb-2" src="@/assets/icons/roomBed.svg" alt="room bed">
                    <p>1 張大床</p>
                  </li>
                  <li class="room-detail-icon border border-primary-40 py-4 px-3">
                    <img class="mb-2" src="@/assets/icons/roomPeople.svg" alt="room people">
                    <p>2-4 人</p>
                  </li>
                </ul>
                <div class="line-deco my-3 my-lg-5"></div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-primary fs-3 fw-bold">NT$ 10,000</p>
                    <img class="arrow-right-icon" src="@/assets/icons/arrowRight.svg" alt="arrowRight">
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// TODO: 打 API、pagination 樣式

const modules = [Navigation, Pagination]

const navigation = {
  nextEl: '.swiper-btn-next',
  prevEl: '.swiper-btn-prev',
}

const pagination = {
  clickable: true,
  el:'.swiper-pagination'
}
</script>

<style lang="scss" scoped>
.room-list {
  .card {
    border-radius: 15px;
    overflow: hidden;
    .room-img {
      height: 200px;
      object-fit: cover;
    }
   @include lg {
      .room-img {
        height: 470px;
      }
    }
  }
}

.room-detail-icon {
  color: $black;
  width: 97px;
  height: 97px;
  border-radius: 8px;
}
.arrow-right-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.line-deco {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #be9c7c, $white);
}

.swiper {
  width: 100%;
  height: auto;
}

.room-list .swiper-btn {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  color: #be9c7c;
  font-size: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-prev{
    top: 45%;
    left: 24px;
  }
  &-next{
    top: 45%;
    right: 24px;
  }
}
</style>