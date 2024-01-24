<template>
  <p class="fw-medium text-neutral-80">預訂參考編號： HH2302183151222</p>
  <h2 class="title">即將來的行程</h2>
  <img
    src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true"
    alt=""
    class="nextRoomImg rounded-3 mb-5 mb-lg-7"
  />
  <div class="d-flex flex-column gap-5 pb-5 mb-5 border-bottom border-2 border-neutral-40">
    <h3 class="fw-bold text-neutral-80 fs-lg-5 fs-small">
      <span class="pe-3 me-3 border-end border-neutral-60">尊爵雙人房，1 晚</span>
      <span>住宿人數：2 位</span>
    </h3>
    <div>
      <p class="sub-title sub-title-primary">入住：6 月 10 日星期二，15:00 可入住</p>
      <p class="sub-title sub-title-neutral-60">退房：6 月 11 日星期三，12:00 前退房</p>
    </div>
    <p class="fw-bold fs-lg-0 fs-small mb-0">NT$ 10,000</p>
  </div>

  <div>
    <p class="sub-title sub-title-primary">房內設備</p>
    <div class="p-5 border border-neutral-40 rounded-3">
      <RoomService :service="service" />
    </div>
  </div>
</template>
<script lang="ts">
import RoomService from '../RoomService.vue'
export default {
  name: 'NextRoom',
  data() {
    return {
      service: [
        {
          title: '市景',
          isProvide: true
        },
        {
          title: '獨立衛浴',
          isProvide: true
        },
        {
          title: '書房',
          isProvide: false
        }
      ]
    }
  },
  components: {
    RoomService
  }
}
</script>
<style lang="scss" scoped>
.nextRoomImg {
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  height: 150px;
  @include lg {
    height: 240px;
  }
}
</style>
