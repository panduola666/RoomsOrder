<template>
  <main class="bg-neutral-bg">
    <div class="userBanner">
      <div class="container position-relative z-3">
        <div class="d-lg-flex flex-lg-row align-items-center gap-5 fs-1 fw-bold text-white py-7 py-lg-10">
          <img src="../assets/image/Avatar _6.png" alt="" class="avatar mb-3 mb-lg-0" />
          <h1 class="fs-1 fw-bold mb-0">Hello，Jessica</h1>
        </div>
      </div>
    </div>

    <div class="container my-7 mt-lg-9 mb-lg-10">
      <ul class="tabs d-flex text-white fw-bold p-0 mb-7 mb-lg-9">
        <li class="tabs-item px-5 py-3 pointer active">個人資料</li>
        <li class="tabs-item px-5 py-3 pointer">我的訂單</li>
      </ul>

      <div class="row g-5 g-lg-7">
        <div class="col-12 col-lg-5">
          <section class="bg-white p-5 p-lg-7 rounded-6">
            <EditPwd :user="user" />
          </section>
        </div>
        <div class="col-12 col-lg-7">
          <section class="bg-white p-5 p-lg-7 rounded-6">
            <UserInfo :user="user" />
          </section>
        </div>
      </div>
    </div>
    <img src="../assets/image/Line.png" alt="Line" class="line" />
  </main>
</template>
<script setup lang="ts">
import EditPwd from '@/components/UserCenter/EditPwd.vue'
import UserInfo from '@/components/UserCenter/UserInfo.vue'
import fetchAPI from '@/mixin/fetchAPI'
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import type { userInfo } from '@/interface/user'
const router = useRouter()
const newFetch = fetchAPI()
const user = ref<userInfo>({
  _id: '',
  updatedAt: '',
  phone: '',
  name: '',
  email: '',
  createdAt: '',
  birthday: '',
  address: {
    detail: '',
    zipcode: 0
  }
})
onMounted(async () => {
  const res = await newFetch._fetch('/api/v1/user/check')
  if (!res.status) {
    const swal = await Swal.fire({
      icon: 'error',
      title: res.message
    })
    if (swal.isConfirmed || swal.isDismissed) {
      localStorage.removeItem('token')
      router.push('/login')
    }
    return
  }
  const userRes = await newFetch._fetch('/api/v1/user')
  user.value = userRes.result
  localStorage.setItem('user', JSON.stringify(userRes.result))
})
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
.avatar{
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
