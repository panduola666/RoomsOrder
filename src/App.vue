<template>
  <div class="min-vh-100 d-flex flex-column">
    <HeaderNav />
    <RouterView class="flex-grow-1" />
    <FooterBar v-if="!['login', 'signIn'].includes($route.name as string)" />
  </div>
</template>

<script lang="ts">
import HeaderNav from './components/Layout/HeaderNav.vue';
import FooterBar from './components/Layout/FooterBar.vue';
export default{
  components: {
    HeaderNav,
    FooterBar
  }
}
</script>

