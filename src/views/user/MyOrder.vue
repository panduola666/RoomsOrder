<template>
  <main class="bg-neutral-bg">
    <div class="row g-5 g-lg-7">
      <div class="col-12 col-lg-7 ps-lg-0">
        <nextRoom :roomInfo="(nextOrder as orderData)" />
      </div>
      <div class="col-12 col-lg-5 pe-lg-0">
        <section class="bg-white p-5 p-lg-7 rounded-6">
          <HistoryOrder :list="orderList" />
        </section>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { mapState, mapActions } from 'pinia'
import ordersStore from '../../stores/orders'
import HistoryOrder from '../../components/UserCenter/HistoryOrder.vue'
import nextRoom from '../../components/UserCenter/NextRoom.vue'
import type { orderData } from '../../interface/order'

export default {
  name: 'MyOrder',
  components: {
    nextRoom,
    HistoryOrder
  },
  async mounted() {
    this.getOrders()
  },
  computed: {
    ...mapState(ordersStore, ['orderList']),
    nextOrder() {
      const list = [...this.orderList]
        .sort(
          (a: orderData, b: orderData) =>
            new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime()
        )
        .filter(
          (item: orderData) =>
            new Date(item.checkInDate).getTime() >= new Date().getTime() && item.status !== -1
        )

      return list.length ? list[0] : {}
    }
  },
  methods: {
    ...mapActions(ordersStore, ['getOrders'])
  }
}
</script>
