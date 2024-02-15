<template>
  <section class="d-md-none mobile-datepicker-bar" v-show="!mobileStep2">
    <div v-if="range.end === null" class="container d-flex justify-content-between align-items-center">
      <p class="mb-0 fs-small">ＮＴ$ {{roomInfo.price}} / 晚</p>
      <button type="button" class="btn btn-primary px-6 py-3 fw-bold" @click="mobileStep1 = true">
        查看可訂日期
      </button>
    </div>
    <div  v-else class="container d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column">
        <p class="mb-0 fs-small text-neutral-80">ＮＴ$ {{roomInfo.price * nightCount }} / {{ nightCount }} 晚 / {{chickinPeople}}人</p>
        <p class="mb-0 fs-tiny text-decoration-underline">{{ dayjs(range.start).format('MM / D') }} - {{ dayjs(range.end).format('MM / D') }}</p>

      </div>
      <button type="button" class="btn btn-primary px-6 py-3 fw-bold" @click="toBookingMoblie">
        立即預定
      </button>
    </div>
  </section>
  <section class="mobile-datepicker-box" v-show="mobileStep1">
    <div class="bg-neutral-40 p-2">
      <button type="button" class="btn btn-transparent px-2"> <span class="material-symbols-outlined"
          @click="mobileStep1 = false">
          Close </span>

      </button>

      <h6 class=" fw-bold mx-3" v-if="range.start === null">選擇入住日期</h6>
      <h6 class=" fw-bold mx-3" v-else>{{ nightCount }} 晚 <span class="fs-small fw-normal ms-2">{{
        dayjs(range.start).format('YYYY/ MM / DD') }} - {{ dayjs(range.end).format('YYYY/ MM / DD') }}</span></h6>
    </div>
    <VDatePicker v-model.range="range" mode="date" :columns="1" :expanded="true" :rows="2"
      :masks="{ title: 'YYYY 年 MM 月' }" timezone="UTC" />
    <div class="container mobile-datepicker-bar text-end">
      <button type="button" class="btn btn-primary px-6 py-3 fw-bold" @click="toStep2">
        確定日期
      </button>
    </div>
  </section>
  <section class="mobile-datepicker-box" v-show="mobileStep2">
    <div class="bg-neutral-40 p-2">
      <button type="button" class="btn btn-transparent px-2"> <span class="material-symbols-outlined"
          @click="mobileStep2 = false">
          Close </span>

      </button>
      <h6 class=" fw-bold mx-3">{{ nightCount }} 晚 <span class="fs-small fw-normal ms-2">{{
        dayjs(range.start).format('YYYY/ MM / DD') }} - {{ dayjs(range.end).format('YYYY/ MM / DD') }}</span></h6>
    </div>
    <div class="container p-3">
      <h6 class="fw-bolder">選擇人數</h6>
      <p class="fs-small">此房型最多供 {{ roomInfo.maxPeople }} 人居住，不接受寵物入住。</p>
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
            :class="{ 'text-black': chickinPeople !== roomInfo.maxPeople, 'text-neutral-40': chickinPeople === roomInfo.maxPeople }">
            add </span>
        </button>
      </div>
    </div>
    <div class="container mobile-datepicker-bar d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-white px-6 py-3 fw-bold" @click="toStep1">
        重新選擇日期
      </button>
      <button type="button" class="btn btn-primary px-6 py-3 fw-bold" @click="mobileStep2 = false">
        儲存
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { Room } from '@/interface/room'
import { ref, watchEffect } from 'vue'
import dayjs from 'dayjs'
import { useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const { id } = route.params



const props = defineProps({
  roomInfo: {
    type: Object as PropType<Room>,
    required: true
  }
})
const mobileStep1 = ref<boolean>(false)
const mobileStep2 = ref<boolean>(false)
interface DateRange {
  start: null | Date;
  end: null | Date;
}
let range = ref<DateRange>({
  start: null,
  end: null,
});

const chickinPeople = ref<number>(2)

function toStep1() {
  mobileStep1.value = true
  mobileStep2.value = false

}

function toStep2() {
  mobileStep1.value = false
  mobileStep2.value = true
}


const nightCount = ref<number>(0);

watchEffect(() => {
  nightCount.value = dayjs(range.value.end).diff(range.value.start, 'day');
});
function addBtn() {
  if (chickinPeople.value < props.roomInfo.maxPeople) {
    chickinPeople.value += 1
  }

}

function decBtn() {
  if (chickinPeople.value > 1) {
    chickinPeople.value -= 1
  }
}



function toBookingMoblie() {
  if (range.value && range.value.start) {
  const startdate = new Date(range.value.start.toISOString()).getTime();
  router.push({ name: 'roomsReserved', params: { id, startdate, days: nightCount.value, people: chickinPeople.value } })
}}
</script>
<style lang="scss">
.mobile-datepicker-bar {
  background-color: #fff;
  width: 100%;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #ECECEC;
  padding-top: 12px;
  padding-bottom: 12px;
  z-index: 3;
}

.mobile-datepicker-box {
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-radius: 8px 8px 0px 0px;
  z-index: 3;
  max-height: calc(100vh - 77px);
  overflow-y: scroll;
}

// datePicker setting
.vc-bordered {
  border: 0;
}

.vc-title {
  background-color: transparent;
}

.vc-header {
  display: block;
}

.vc-header .vc-title,
.vc-container {
  font-family: var(--bs-body-font-family);
}

.vc-arrow {
  visibility: hidden;
}

.vc-blue {
  --vc-accent-50: #eff6ff;
  --vc-accent-100: #dbeafe;
  --vc-accent-200: #F9F9F9;
  --vc-accent-300: #93c5fd;
  --vc-accent-400: #60a5fa;
  --vc-accent-500: #3b82f6;
  --vc-accent-600: #000000;
  --vc-accent-700: #ffffff;
  --vc-accent-800: #1e40af;
  --vc-accent-900: #000000;
}

// TODO: hover 的日期顏色
.vc-light {
  --vc-day-content-hover-bg: #000000;
  --vc-day-content-hover: #ffffff;
  --vc-highlight-light-content-color: #ffffff;
  --vc-highlight-solid-content-color: #ffffff;
  --vc-highlight-light-bg: transparent;
  --vc-focus-ring: 0 0 0 2px rgb(0, 0, 0, 0.4)
}

.vc-light .vc-attr {
  --vc-highlight-outline-bg: #000000;
}

.vc-highlight {
  width: 40px;
  height: 40px;

  @include lg {
    width: 44px;
    height: 44px;
  }
}

.vc-highlight-bg-solid {
  --vc-rounded-full: 100px;
}

.vc-day-content {
  width: 44px;
  height: 44px;
}

@include media-breakpoint-up(md) {
  .vc-header {
    display: grid;
  }

  .vc-arrow {
    background-color: transparent;
  }

  .vc-title-wrapper {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .vc-arrow {
    visibility: visible;
  }
}
</style>