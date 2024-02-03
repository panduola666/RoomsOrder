<template>
  <nav aria-label="pagination">
    <ul v-if="pages.totalPages > 1" class="pagination">

      <li class="page-item disabled pointer" :class="{ disabled: pages.curPage === 1}">
        <a class="page-link" @click="emit('change', pages.curPage - 1)">上一頁</a>
      </li>
      <!-- TODO: key -->
      <li v-for="i in pages.totalPages" class="page-item pointer" :key="`page-${i}`">
        <a class="page-link" @click="emit('change', i)">{{ i }}</a>
      </li>

      <li class="page-item pointer" :class="{ disabled: pages.curPage ===  pages.totalPages - 1}">
        <a class="page-link" @click="emit('change', pages.curPage + 1)">下一頁</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
const emit = defineEmits(['change'])
const props = defineProps({
  pages: {
    type: Object,
    default: () => ({})
  }
})

const { pages } = toRefs(props)
</script>
