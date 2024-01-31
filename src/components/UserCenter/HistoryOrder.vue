<template>
  <div class="d-flex flex-column">
    <h2 class="fs-6 fs-lg-5 fw-bold mb-0">歷史訂單</h2>
    <ul class="historyList">
      <li
        class="py-5 py-lg-7 d-flex flex-column flex-lg-row gap-5 align-items-start fw-medium border-bottom border-2 border-neutral-40"
        v-for="item in historyList.filter((i) => i.status !== -1)"
        :key="item._id"
      >
        <img
          :src="item.roomId.imageUrl"
          class="img-fluid rounded-start rounded-3"
          :alt="item.roomId.name"
          width="120"
          height="80"
        />
        <article class="d-flex flex-column text-neutral-80 roomInfo">
          <p class="fs-lg-0 fs-small">預訂參考編號： {{ item._id }}</p>
          <p class="fs-lg-6 fs-small fw-bold">{{ item.roomId.name }}</p>
          <p class="fs-lg-0 fs-small mb-2">
            住宿天數： {{ getDiff(item.checkInDate, item.checkOutDate) }} 晚
          </p>
          <p class="fs-lg-0 fs-small">住宿人數： {{ item.peopleNum }} 位</p>
          <p class="sub-title sub-title-primary mb-2 fw-medium">
            入住：{{ getDate(item.checkInDate) }}
          </p>
          <p class="sub-title sub-title-neutral-60 fw-medium">
            退房：{{ getDate(item.checkOutDate) }}
          </p>
          <p class="fs-lg-0 fs-small fw-bold mb-0">NT${{ getPrice(item) }}</p>
        </article>
      </li>
    </ul>
    <button
      type="button"
      class="btn btn-outline-primary d-flex align-items-center justify-content-center gap-1 py-3 px-6 rounded-3"
      @click="showMore"
      v-if="showBtn"
    >
      查看更多
      <span class="material-symbols-outlined"> expand_more </span>
    </button>
  </div>
</template>
<script lang="ts">
import type { orderData } from '../../interface/order'

export default {
  name: 'HistoryOrder',
  props: {
    list: {
      type: Array,
      default: () => [] as orderData[],
      required: true
    }
  },
  data() {
    return {
      historyList: [] as orderData[],
      showBtn: true
    }
  },
  watch: {
    list(list) {
      this.historyList = list.slice(0, 2)
    }
  },
  methods: {
    showMore(): void {
      this.showBtn = false
      this.historyList = this.list as orderData[]
    },
    getDiff(checkIn: string, checkOut: string): number {
      return (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 1000 / 60 / 60 / 24
    },
    getPrice(order: orderData): string {
      const days = this.getDiff(order.checkInDate, order.checkOutDate)
      const money = days * order.roomId.price
      return this.moneyFormat(money)
    }
  }
}
</script>
<style lang="scss" scoped>
.historyList {
  max-height: 904px;
  overflow-y: auto;
}
.roomInfo {
  word-break: break-word;
}
</style>
