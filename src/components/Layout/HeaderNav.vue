<template>
  <nav class="d-flex align-items-center justify-content-between py-3  py-lg-5 px-2_5 px-lg-9 sticky-top"
  :class="{'bg-neutral-bg': $route.path !== '/'}">
    <img src="../../assets/image/Logo_White.png" alt="logo" class="logo object-fit-contain " />
    <ul class="nav align-items-center gap-3 d-none d-lg-flex">
      <li class="nav-item">
        <router-link to="" class="p-3 nav-link">客房旅宿</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="p-3 nav-link">會員登入</router-link>
      </li>
      <!-- <li class="nav-item position-relative">
        <div  class="p-3 header-link nav-link d-flex align-items-center gap-2 pointer" @click="headerMenu.openUserMenu = !headerMenu.openUserMenu">
          <span class="material-symbols-outlined">account_circle</span>
          Jessica
        </div>

        <ul class="position-absolute bg-white rounded-6 end-0 userMenu overflow-hidden" v-if="headerMenu.openUserMenu">
          <li>
            <router-link to="/user" class="d-block px-5 py-3 pointer fw-bold bg-primary-10 text-primary text-decoration-none">我的帳戶</router-link>
          </li>
          <li class="px-5 py-3 pointer fw-bold">登出</li>
        </ul>
      </li> -->
      <li class="nav-item">
        <input type="button" value="立即訂房" class="btn btn-primary py-3 px-6" />
      </li>
    </ul>

    <span class="material-symbols-outlined text-white p-2 d-lg-none" @click="menuShow = true"> menu </span>
  </nav>

  <div class="menu bg-black fixed-top min-vh-100 p-4 d-flex flex-column" v-if="menuShow">
    <div class="menu-top text-end">
      <span class="material-symbols-outlined text-white fs-1 p-2 pointer" @click="menuShow = false"> close </span>
    </div>
    <ul class="nav flex-column justify-content-center text-center flex-grow-1">
      <li class="nav-item">
        <router-link to="" class="p-3 nav-link" @click="menuShow = false">客房旅宿</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="p-3 nav-link" @click="menuShow = false">會員登入</router-link>
      </li>
      <li class="nav-item">
        <input type="button" value="立即訂房" class="btn btn-primary py-3 px-6 w-100" @click="menuShow = false" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { headerMenuStore } from '@/stores/headerMenu'

const menuShow = ref<boolean>(false)

const headerMenu = headerMenuStore()
</script>
<style lang="scss" scoped>
.nav-link {
  color: $white;
  &:hover {
    color: $primary;
  }
}
.logo{
  height: 40px;
  @media (min-width: 992px) {
    height: 72px;
  }
}
.userMenu{
  padding: 12px 0;
  width: 260px;
  top: calc(100% + 12px);
}
</style>
