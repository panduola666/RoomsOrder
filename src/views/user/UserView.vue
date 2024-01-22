<template>
  <main class="bg-neutral-bg">
    <div class="row g-5 g-lg-7">
        <div class="col-12 col-lg-5">
          <section class="bg-white p-5 p-lg-7 rounded-6">
            <EditPwd v-if="user._id" />
          </section>
        </div>
        <div class="col-12 col-lg-7">
          <section class="bg-white p-5 p-lg-7 rounded-6">
            <UserInfo v-if="user._id" />
          </section>
        </div>
      </div>
  </main>
</template>
<script setup lang="ts">
// @ts-ignore
import EditPwd from '../../components/UserCenter/EditPwd.vue'
// @ts-ignore
import UserInfo from '../../components/UserCenter/UserInfo.vue'
import fetchAPI from '../../mixin/fetchAPI'
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import type { userInfo } from '../../interface/user'
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
  localStorage.setItem('user', JSON.stringify(userRes.result))
  user.value = userRes.result
})
</script>
