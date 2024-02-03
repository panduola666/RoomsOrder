<template>
  <ul class="service-container p-0 m-0">
    <li
      class="d-flex align-items-center fw-bold fs-lg-0 fs-small"
      v-for="item in service"
      :key="item.title"
    >
      <span
        class="material-symbols-outlined"
        :class="{ 'text-primary': item.isProvide, 'text-primary-60': !item.isProvide }"
      >
        check </span
      >{{ item.title }}
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface Service {
  title: string
  isProvide: boolean
}

export default defineComponent({
  name: 'RoomService',
  props: {
    service: {
      type: Array as PropType<Service[]>,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
.service-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  @include lg {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
