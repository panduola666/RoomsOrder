<template>
  <main class="bg-neutral-bg">
    <div class="row g-5 g-lg-7">
      <div class="col-12 col-lg-7 ps-lg-0">
          <nextRoom />
      </div>
      <div class="col-12 col-lg-5 pe-lg-0">
        <section class="bg-white p-5 p-lg-7 rounded-6">
          <HistoryOrder :list="orderList"/>
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
    ...mapState(ordersStore, ['orderList'])
  },
  methods: {
    ...mapActions(ordersStore, ['getOrders'])
  }
}
</script>
