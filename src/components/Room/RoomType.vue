<template>
  <div class="bg-light">
    <div class="container room-list">
      <div class="my-7 mt-lg-10 mb-lg-9">
      <p class="text-neutral-80 fs-small fs-lg-6">房型選擇</p>
      <h2 class="text-primary fs-lg-1 fs-3 fw-bold">各種房型，任您挑選</h2>
    </div>
      <ul class="ps-0">
        <li v-for="room in roomList" :key="room._id" class="card">
          <div class="row g-0 align-items-center">
            <div class="col-lg-7">
              <swiper
                v-if="roomStatus"
                class="swiper"
                :modules="modules"
                :loop="true"
                :pagination="pagination"
                :navigation="navigation"
              >
                <swiper-slide v-for="(src, i) in room.imageUrlList" :key="i">
                  <img :src="src" class="room-img card-img-top rounded-0" alt="room">
                </swiper-slide>
                <!-- <swiper-slide>
                  <img :src="src" class="room-img card-img-top rounded-0" alt="room">
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/image/desktop/Room2-3.png" class="room-img card-img-top rounded-0" alt="room">
                </swiper-slide> -->
                <div class="swiper-pagination"></div>
                <div class="swiper-btn bg-white d-none d-lg-flex  swiper-btn-prev">
                  <img src="@/assets/icons/prev.svg" alt="prev arrow">
                </div>
                <div class="swiper-btn bg-white d-none d-lg-flex  swiper-btn-next">
                  <img src="@/assets/icons/next.svg" alt="next arrow">
                </div>
            </swiper>
            </div>
            <div class="col-lg-5">
              <div class="card-body p-4 px-lg-5">
                <h3 class="card-title text-black fw-bold">{{ room.name }}</h3>
                <p class="card-text text-secondary mb-5">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <ul class="d-flex text-black ps-0">
                  <li class="room-detail-icon border border-primary-40 py-4 px-3 me-3">
                    <img class="mb-2" src="@/assets/icons/roomSize.svg" alt="room size">
                    <p>{{ room.areaInfo }}</p>
                  </li>
                  <li class="room-detail-icon border border-primary-40 py-4 px-3 me-3">
                    <img class="mb-2" src="@/assets/icons/roomBed.svg" alt="room bed">
                    <p>{{ room.bedInfo }}</p>
                  </li>
                  <li class="room-detail-icon border border-primary-40 py-4 px-3">
                    <img class="mb-2" src="@/assets/icons/roomPeople.svg" alt="room people">
                    <p>{{ `2-${room.maxPeople} 人` }}</p>
                  </li>
                </ul>
                <div class="line-deco my-3 my-lg-5"></div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-primary fs-3 fw-bold">
                    <span>NT$</span>
                    {{ room.price.toLocaleString() }}</p>
                    <button class="show-modal-btn" @click="showModal(room._id)">
                      <img class="arrow-right-icon" src="@/assets/icons/arrowRight.svg" alt="arrowRight" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Vertically centered scrollable modal -->
    <div
      ref="roomDetailModalRef"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="fs-5 fs-lg-4 fw-bold modal-title">{{ roomInfo.result?.name }}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <img class="w-100 mb-5" :src="roomInfo.result?.imageUrl" :alt="roomInfo.result?.name">
            <span
              v-for="(el, i) in roomInfo.result?.layoutInfo"
              :key="i"
              class="badge rounded-pill text-white bg-primary me-2 mb-2"
            >{{ el.title }}</span>
            <br />
            <span v-for="(el, i) in roomInfo.result?.facilityInfo"
              :key="i"
              class="badge rounded-pill text-white bg-primary me-2 mb-2">{{ el.title }}</span>
            <p> {{ roomInfo.result?.description }} </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
// @ts-ignore
import  { roomTypeStore }  from '@/stores/room'
import { Modal } from 'bootstrap'
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
const roomDetailModalRef = ref<Element | null>(null)
let modalInstance: any = null;

// Room Data
const roomTypeStoreInfo = roomTypeStore()
const { roomList, roomInfo, roomStatus } = storeToRefs(roomTypeStoreInfo)

onMounted(async () => {
  await roomTypeStoreInfo.getRoomList()
  modalInstance = new Modal(roomDetailModalRef.value as Element);
});


// Modal Control
const showModal = async (id: string) => {
  await roomTypeStoreInfo.getRoomInfo(id)
  if (modalInstance && roomInfo.value.result) {
    modalInstance.show()
  }
}
// const hideModal = () => {
//   if (modalInstance) {
//     modalInstance.hide()
//   }
// }
</script>

<style lang="scss" scoped>
.room-list {
  .card {
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 24px;
    .room-img {
      height: 200px;
      object-fit: cover;
    }
   @include lg {
    margin-bottom: 48px;
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

  &-prev {
    top: 45%;
    left: 24px;
  }

  &-next {
    top: 45%;
    right: 24px;
  }
}
.show-modal-btn {
  background: none;
  border: 0;
}
</style>