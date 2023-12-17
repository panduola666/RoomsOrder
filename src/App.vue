<template>
  <div class="min-vh-100 d-flex flex-column">
    <HeaderNav />
    <RouterView class="flex-grow-1" @click="headerMenu.openUserMenu = false"/>
    <FooterBar v-if="!['login', 'signIn'].includes($route.name as string)" />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from './components/Layout/HeaderNav.vue';
import FooterBar from './components/Layout/FooterBar.vue';
import { watch } from 'vue'
import { headerMenuStore } from '@/stores/headerMenu'
import { useRoute } from 'vue-router'
import { log } from 'console';
const headerMenu = headerMenuStore()
const route = useRoute()
console.log(route.path)
watch(() => route.path, () => {
  headerMenu.openUserMenu = false
})
</script>

