import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { roomTypeStore } from './room'

export const paginationStore = defineStore('paginationStore', () => {

  // const roomStore = roomTypeStore()
  // const { roomList } = storeToRefs(roomStore) // 保持響應
  // console.log('roomList!!', roomList);

  // // Default
  // const pages = ref({
  //   totalPages: roomList.length,
  //   curPage: 1, // 當前頁碼
  //   havePrev: false,
  //   haveNext: true
  // })

  // const turnPage = (page, scrollToTop = true) => {
  //   pages.value.curPage = page
  //   pages.value.havePrev = page > 1
  //   pages.value.haveNext = page < pages.value.totalPages
  //   if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  // const paginate = (items, curPage = 1, perPage = 4) => {
  //   const totalPages = Math.ceil(items.length / perPage)
  //   if (curPage > totalPages) {
  //     curPage = totalPages
  //   }

  //   const minIndex = (curPage - 1) * perPage
  //   const maxIndex = curPage * perPage
  //   const itemPaginated = items.slice(minIndex, maxIndex)

  //   const page = {
  //     curPage,
  //     totalPages,
  //     havePrev: curPage > 1,
  //     haveNext: curPage < totalPages
  //   }

  //   pages.value = { ...page }
  //   return [...itemPaginated]
  // }

  // return { pages, turnPage, paginate }
})
