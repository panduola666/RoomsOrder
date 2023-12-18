import { ref } from 'vue'
import { defineStore } from 'pinia'

export const headerMenuStore = defineStore('headerMenu', () => {
  const openUserMenu = ref(false)
  const isLogin = ref(false)

  return { openUserMenu, isLogin }
})
