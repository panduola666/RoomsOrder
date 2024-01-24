<template>
  <ul class="d-flex flex-wrap p-0 m-0">
    <li
      class="d-flex align-items-center gap-2 fw-bold fs-lg-0 fs-small me-7 mb-2"
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
