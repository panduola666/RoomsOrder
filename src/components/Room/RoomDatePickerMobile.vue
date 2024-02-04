<template>
  <section class="mobile-datepicker-bar">
    <div class="container d-flex justify-content-between align-items-center">
      <p class="mb-0 fs-small">ＮＴ$ 10,000 / 晚</p>
      <button type="button" class="btn btn-primary px-6 py-3 fw-bold" @click="mobileSetp1 = true">
        查看可訂日期
      </button>
    </div>
  </section>
  <section class="mobile-datepicker-box" v-show="mobileSetp1">
    <div class="bg-netural-40">
      <button type="button" class="btn btn-transparent"> <span class="material-symbols-outlined">
          Close </span>

      </button>

      <h6 class=" fw-bold">選擇入住日期</h6>
    </div>

    <VDatePicker v-model="startdate" mode="date" :columns="1" :expanded="true" :rows="2" :masks="{ title: 'YYYY 年 MM 月' }"
      timezone="UTC" />
    <div class="container d-flex justify-content-between align-items-center mobile-datepicker-bar position-relative">
      <button type="button" class="btn btn-white px-6 py-3 fw-bold">
        清除日期
      </button>

      <button type="button" class="btn btn-primary px-6 py-3 fw-bold" @click="mobileSetp2 = true">
        確定日期
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { Room } from '@/interface/room'
import { ref } from 'vue'

defineProps({
  roomInfo: {
    type: Object as PropType<Room>,
    required: true
  }
})
const mobileSetp1 = ref<boolean>(false)
const mobileSetp2 = ref<boolean>(false)
const startdate = ref<Date>(new Date())



</script>
<style lang="scss">
.mobile-datepicker-bar {
  background-color: #fff;
  width: 100%;
  position: fixed;
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
}
</style>