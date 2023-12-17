import { ref } from 'vue'
import { defineStore } from 'pinia'

export const headerMenuStore = defineStore('headerMenu', () => {
  const openUserMenu = ref(false)
  
  function menuOpen() {
    console.log('open');
    
    openUserMenu.value = !openUserMenu.value
  }
  function menuClose() {
    openUserMenu.value = false
  }

  return { openUserMenu, menuOpen, menuClose }
})
