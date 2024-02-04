<template>
  <div class=" bg-primary-10">
    <RoomBanner :room-info="roomInfo" />
    <main class="rooms-detail container">
      <RoomDetail :room-info="roomInfo" />
      <div class="right">
        <div class="booking-box  gap-7  d-flex flex-column">
          <h5 class=" fw-bold border-bottom border-neutral-40 pb-3">預訂房型</h5>
          <div>
            <h2 class=" fw-bold text-neutral-80">{{ roomInfo.name }}</h2>
            <p class=" text-neutral-80">{{ roomInfo.description }}</p>
          </div>
          <div>
            <div class="d-flex gap-2 mb-3 position-relative">
              <div class="check-date-box" @click="showDatePicker = true">
                <p class="mb-0 fs-tiny">入住</p>
                <p class="mb-0">
                  {{ dayjs(range.start).format('YYYY/MM/DD') }}
                </p>
              </div>
              <div class="check-date-box" @click="showDatePicker = true">
                <p class="mb-0 fs-tiny">退房</p>
                <p class="mb-0">
                  {{ dayjs(range.end).format('YYYY/MM/DD') }}
                </p>
              </div>
              <!-- modal -->
              <div class="full-bg-black" v-show="showDatePicker"></div>
              <div class="card-box" v-show="showDatePicker">
                <div class="card text-start">
                  <div class="card-top">
                    <div class="d-flex gap-2 flex-column">
                      <h5 class="mb-2 fw-bold">{{ nightCount }} 晚</h5>
                      <div class="d-flex gap-2">
                        <p class="text-neutral-80 mb-0">{{ dayjs(range.start).format('YYYY/ MM / DD') }}</p>
                        <p class="text-neutral-80 mb-0">-</p>
                        <p class="text-neutral-80 mb-0">{{ dayjs(range.end).format('YYYY/ MM / DD') }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <VDatePicker v-model.range="range" mode="date" :columns="columns" :expanded="expanded" :rows="rows"
                      :masks="{ title: 'YYYY 年 MM 月' }" timezone="UTC" />
                  </div>
                  <div class="card-footer gap-3">
                    <button type="button" class="btn btn-white px-6 py-3" @click="cleanDate">
                      清除日期
                    </button> <button type="button" class="btn btn-primary px-6 py-3" @click="showDatePicker = false">
                      確定日期
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-bold mb-0">
                人數
              </p>
              <div class="d-flex align-items-center justify-content-center gap-3">
                <button type="button" class="btn rounded-circle btn-outline-neutral-40 lh-0 p-3" @click="decBtn"
                  :disabled="chickinPeople === 1">
                  <span class="material-symbols-outlined" 
                  :class="{ 'text-black': chickinPeople !== 1, 'text-neutral-40': chickinPeople === 1 }">
                    remove </span>
                </button>
                <h6 class=" fw-bold">
                  {{ chickinPeople }}
                </h6>
                <button type="button" class="btn rounded-circle btn-outline-neutral-40 lh-0 p-3" @click="addBtn"
                :disabled="chickinPeople === roomInfo.maxPeople">
                  <span class="material-symbols-outlined"
                  :class="{ 'text-black': chickinPeople !== roomInfo.maxPeople , 'text-neutral-40': chickinPeople === roomInfo.maxPeople }">
                    add </span>
                </button>

              </div>
            </div>
          </div>
          <!-- <h5 class="text-primary fw-bold">NT$ {{ roomInfo.price }}</h5> -->
          <h5 class="text-primary fw-bold">NT$ {{moneyFormat(roomInfo.price*nightCount)}}</h5>
          <button type="button" class="btn btn-primary w-100 px-6 py-3 fw-bold">
            立即預訂
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useScreens } from 'vue-screen-utils'
import dayjs from 'dayjs'
import mixin from '@/mixin/globalMix'
import { roomTypeStore } from '@/stores/room'
import RoomBanner from '@/components/Room/RoomBanner.vue'
import RoomDetail from '@/components/Room/RoomDetail.vue'
const { moneyFormat } = mixin.methods
const showDatePicker = ref<boolean>(false);
const router = useRoute()
const roomTypeStoreInfo = roomTypeStore()
const { id } = router.params
const chickinPeople = ref<number>(2)
onMounted(async () => {
  const roomId: string = Array.isArray(id) ? id[0] : id.toString();
  await roomTypeStoreInfo.getRoomInfo(roomId)
})

const { roomInfo } = storeToRefs(roomTypeStoreInfo)

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' })
const columns = mapCurrent({ lg: 2 }, 1)
const rows = mapCurrent({ lg: 1 }, 2)

const tomorrow = dayjs().add(1, "day");
const defaultEndDay = tomorrow.add(5, "day");

let range = ref({
  start: new Date(tomorrow.format('YYYY-MM-DD')),
  end: new Date(defaultEndDay.format('YYYY-MM-DD')),
});
const expanded = mapCurrent({ lg: true }, true)

const nightCount = ref<number>(0);

watchEffect(() => {
  nightCount.value = dayjs(range.value.end).diff(range.value.start, 'day');
});


function cleanDate() {
  range.value = {
    start: new Date(),
    end: new Date(),
  }
}
function addBtn() {
  if(chickinPeople.value < roomInfo.value.maxPeople){
    chickinPeople.value +=1
  }
}

function decBtn() {
  if(chickinPeople.value > 1){
    chickinPeople.value -=1
  }
}



</script>
<style lang="scss" scoped>
.rooms-detail {
  margin-top: 40px;
  margin-bottom: 40px;
    .right {
    flex: 1 1 478px;
    position: relative;

    .booking-box {
      background-color: white;
      border-radius: 20px;
      padding: 40px;
      position: sticky;
      top: 160px;
    }
  }
}

.check-date-box {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  flex-grow: 1;
  position: relative;
  z-index: 4;
}

.full-bg-black {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  transition: all 0.3s;
}

.card-box {
  width: 740px;
  top: -32px;
  right: -32px;
  position: absolute;
  z-index: 3;
  transition: all 0.3s;
}

.card {
  padding: 32px;
  border: 0;
}

.card-top {
  min-height: 74px;
  margin-bottom: 40px;
}

.card-body {
  margin-bottom: 40px;
}

.card-footer {
  display: flex;
  justify-content: end;
  background-color: white;
  border: 0;
  padding: 0;
}
@include media-breakpoint-up(md){
  .rooms-detail {
  margin-top: 120px;
  margin-bottom: 120px;
  display: flex;
  gap: 72px;
}

}

</style>