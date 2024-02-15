<template>
  <nav class="headerTest d-flex align-items-center justify-content-between py-3  py-lg-5 px-2_5 px-lg-9"
  ref="headerNav"
  :class="{
    'bg-neutral-bg': !fixNav || navTop,
    'fixed-top': fixNav,
    'sticky-top': !fixNav,
    'z-0': isShowDatePicker,
    }">
    <router-link to="/">
      <img src="../../assets/image/common/Logo_White.png" alt="logo" class="logo object-fit-contain " />
    </router-link>
    <ul class="nav align-items-center gap-3 d-none d-lg-flex">
      <li class="nav-item">
        <router-link to="/rooms" class="p-3 nav-link">客房旅宿</router-link>
      </li>
      <li v-if="!headerMenu.isLogin" class="nav-item">
        <router-link to="/login" class="p-3 nav-link">會員登入</router-link>
      </li>
      <li v-else class="nav-item position-relative">
        <div class="p-3 header-link nav-link d-flex align-items-center gap-2 pointer" @click="headerMenu.openUserMenu = !headerMenu.openUserMenu">
          <span class="material-symbols-outlined">account_circle</span>
          {{ user.name }}
        </div>

        <ul class="position-absolute bg-white rounded-6 end-0 userMenu overflow-hidden" v-if="headerMenu.openUserMenu">
          <li>
            <router-link to="/user" class="d-block px-5 py-3 pointer fw-bold text-decoration-none" :class="{'bg-primary-10 text-primary': route.path.includes('user')}">我的帳戶</router-link>
          </li>
          <li class="px-5 py-3 pointer fw-bold" @click="signOut">登出</li>
        </ul>
      </li>
      <li class="nav-item" >
        <input type="button" value="立即訂房" class="btn btn-primary py-3 px-6" @click="router.push('/rooms')" />
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
        <router-link to="/rooms" class="p-3 nav-link" @click="menuShow = false">客房旅宿</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="headerMenu.isLogin ? '/user' : '/login'" class="p-3 nav-link" @click="menuShow = false">{{ headerMenu.isLogin ? '我的帳戶' : '會員登入'}}</router-link>
      </li>
      <li class="nav-item">
        <input type="button" value="立即訂房" class="btn btn-primary py-3 px-6 w-100" @click="menuShow = false, router.push('/rooms')" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onDeactivated } from 'vue'
import { storeToRefs } from 'pinia'
import type { ComputedRef } from 'vue'
import { headerMenuStore } from '../../stores/headerMenu'
import { useRouter, useRoute } from 'vue-router'
import type { userInfo } from '../../interface/user'
import { roomTypeStore } from '@/stores/room'

const roomTypeStoreInfo = roomTypeStore()
const { isShowDatePicker } = storeToRefs(roomTypeStoreInfo)

const menuShow = ref<boolean>(false)
const headerMenu = headerMenuStore()
const router = useRouter()
const route = useRoute()
const fixNav = computed(() => (['home', 'rooms'].includes(route.name as string)))
const user: ComputedRef<userInfo> = computed(() => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) :  {})


const headerNav = ref(null)
const navTop = ref(0)
onMounted(() => {
  window.addEventListener('scroll', () => navTop.value = window.pageYOffset)
}),
onDeactivated(() => {
  window.removeEventListener('scroll', () => navTop.value = window.pageYOffset)
})

function signOut() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/')
}

</script>

<style lang="scss" scoped>
.full-bg-black {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: 990;
}
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
  li {
    color: #000;
    &:hover{
      @extend .bg-primary-10;
      @extend .text-primary;
    }
  }
}
</style>
