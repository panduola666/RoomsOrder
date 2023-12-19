<template>
  <div>
    <h2 class="fs-6 fs-lg-5 mb-5 mb-lg-7 fw-bold">修改密碼</h2>

    <p class="mb-2 text-neutral-80 fw-medium">電子信箱</p>
    <p class="mb-3 mb-lg-5 fw-bold">{{ data.email }}</p>

    <div class="d-flex align-items-center gap-3" v-if="!resetPwd">
      <div class="flex-grow-1">
        <p class="mb-2 text-neutral-80 fw-medium">密碼</p>
        <i class="pwdPoint d-inline-block bg-black rounded-circle me-2" v-for="i in 10" :key="i"></i>
      </div>
      <span class="text-primary pointer text-decoration-underline" @click="resetPwd = true"
        >重設</span
      >
    </div>
    <form v-else @submit.prevent="editPwd">
      <div class="mb-3 mb-lg-5">
        <label for="password" class="form-label fw-bold">舊密碼</label>
        <input
          type="password"
          class="form-control p-3 rounded-3"
          id="password"
          placeholder="請輸入舊密碼"
          v-model="data.oldPassword"
          autocomplete="off"
        />
      </div>
      <div class="mb-3 mb-lg-5">
        <label for="newPassword" class="form-label fw-bold">新密碼</label>
        <input
          type="password"
          class="form-control p-3 rounded-3"
          id="newPassword"
          placeholder="請輸入新密碼"
          v-model="data.newPassword"
          autocomplete="off"
        />
      </div>
      <div class="mb-5 mb-lg-7">
        <label for="checkPwd" class="form-label fw-bold">確認新密碼</label>
        <input
          type="password"
          class="form-control p-3 rounded-3"
          id="checkPwd"
          placeholder="請再輸入一次新密碼"
          v-model="checkPwd"
          autocomplete="off"
        />
      </div>
      <input type="submit" class="btn btn-primary py-3 px-6 rounded-3 w-100 w-lg-auto" :class="{disabled: !data.oldPassword || !data.oldPassword || !checkPwd}" value="儲存設定">
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { userInfo } from '@/interface/user'
import { checkPassword } from '@/mixin/validate'
import fetchAPI from '@/mixin/fetchAPI'
import Swal from 'sweetalert2'

const resetPwd = ref<boolean>(false)
const props = defineProps<{ user: userInfo }>()

const userData = JSON.parse(localStorage.getItem('user') as string)
const data = ref({
  userId: props.user._id || userData._id,
  email: props.user.email || userData.email,
  oldPassword: '',
  newPassword: '',
})
const checkPwd = ref<string>('')


// 修改密碼
const newFetch = fetchAPI()
async function editPwd() {
  if(!checkPassword(data.value.newPassword, checkPwd.value)) return
  
  const res = await newFetch._fetch('/api/v1/user/', 'PUT', data.value)

  Swal.fire({
    icon: res.status ? 'success' : 'error',
    title: res.status ? '修改密碼成功' : res.message
  })
  if(res.status) {
    resetPwd.value = false
    data.value.newPassword = data.value.oldPassword = checkPwd.value = ''
  }
}
</script>
<style lang="scss" scoped>
.pwdPoint {
  width: 8px;
  height: 8px;
}
</style>
