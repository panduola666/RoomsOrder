<template>
  <main class="bg-neutral-bg">
    <div class="userBanner">
      <div class="container p-0 position-relative z-3">
        <div
          class="d-lg-flex flex-lg-row align-items-center gap-5 fs-1 fw-bold text-white py-7 py-lg-10"
        >
          <img src="@/assets/image/Avatar _6.png" alt="" class="avatar mb-3 mb-lg-0" />
          <h1 class="fs-1 fw-bold mb-0">Hello，Jessica</h1>
        </div>
      </div>
    </div>

    <div class="container my-7 mt-lg-9 mb-lg-10">
      <ul class="tabs d-flex text-white fw-bold p-0 mb-7 mb-lg-9">
        <li
          class="tabs-item px-5 py-3 pointer"
          :class="{ active: route.name === item.routeName }"
          v-for="item in tabs"
          :key="item.routeName"
          @click="router.push({ name: item.routeName })"
        >
          {{ item.tabName }}
        </li>
      </ul>

      <router-view></router-view>
    </div>
    <img src="@/assets/image/mobile/Line.png" alt="Line" class="line" />
  </main>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import type { userTab } from '../../interface/user'

const route = useRoute()
const router = useRouter()
const tabs = ref<userTab[]>([
  {
    routeName: 'userInfo',
    tabName: '個人資料'
  },
  {
    routeName: 'myOrder',
    tabName: '我的訂單'
  }
])
</script>
<style lang="scss" scoped>
.userBanner {
  background-image: url('https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: default;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 2;
  }
}
.avatar {
  display: block;
  width: 72px;
  height: 72px;
  @media (min-width: 992px) {
    width: 144px;
    height: 144px;
  }
}
.tabs-item {
  position: relative;
  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 32px;
    height: 4px;
    background: $primary;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.active,
  &:hover {
    color: $primary;
    &::after {
      display: block;
    }
  }
}

.line {
  width: 100%;
  height: 84px;
  @media (min-width: 992px) {
    height: 188px;
  }
}
</style>
