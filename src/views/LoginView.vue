<template>
  <main
    class="container-fluid d-flex align-items-center bg-neutral-bg text-white position-relative"
  >
    <img
      src="../assets/image/mobile/Line.png"
      alt="Line"
      class="position-absolute end-0 top-0 mt-8 py-5"
    />

    <img
      src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="loginImg"
      class="w-50 object-fit-cover position-relative z-1 d-none d-lg-block"
      style="max-height: 1078px"
    />
    <div class="row w-lg-50 flex-grow-1 position-relative z-1">
      <div class="col-lg-6 col mx-auto">
        <div>
          <p class="mb-2 text-primary fw-bold fs-small fs-lg-0">享樂酒店，誠摯歡迎</p>
          <h1 class="fw-bold fs-lg-1 fs-3 mb-7">立即開始旅程</h1>
          <form class="needs-validation mb-7" @submit.prevent="login">
            <div class="mb-3">
              <label for="email" class="form-label">電子信箱</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="hello@exsample.com"
                required
                v-model="userInfo.email"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="password"
                aria-describedby="password"
                autocomplete="on"
                placeholder="請輸入密碼"
                required
                v-model="userInfo.password"
              />
            </div>
            <div class="mb-7 d-flex justify-content-between">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="remember"
                  v-model="rememberAcc"
                />
                <label class="form-check-label" for="remember"> 記住帳號 </label>
              </div>
              <span class="text-decoration-underline text-primary pointer" @click="forgetPwd"
                >忘記密碼？</span
              >
            </div>
            <input type="submit" class="btn btn-primary w-100 py-3 px-6" value="會員登入" />
          </form>
          <span>沒有會員嗎？</span>
          <router-link to="/signIn">前往註冊</router-link>
        </div>
      </div>
    </div>

    <div class="modal fade" tabindex="-1" ref="modalPwd" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black">忘記密碼</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form class="modal-body text-black" @submit.prevent="resetPwd">
            <div class="mb-3">
              <label for="myEmail" class="form-label">電子信箱</label>
              <input
                type="email"
                class="form-control"
                id="myEmail"
                placeholder="hello@exsample.com"
                required
                v-model="forgetData.email"
              />
            </div>
            <div class="mb-3">
              <label for="newPassword" class="form-label">新密碼</label>
              <input
                type="password"
                class="form-control"
                id="newPassword"
                autocomplete="on"
                placeholder="請輸入新密碼"
                required
                v-model="forgetData.newPassword"
              />
            </div>
            <div>
              <label for="code" class="form-label">驗證碼</label>
              <input
                type="text"
                class="form-control"
                id="code"
                autocomplete="on"
                placeholder="請輸入驗證碼"
                required
                v-model="forgetData.code"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
              <button type="submit" class="btn btn-primary">確認</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import fetchAPI from '../mixin/fetchAPI'
import { checkMail, checkPassword } from '../mixin/validate'
import type { AccountData } from '../interface/signup'
import Swal from 'sweetalert2'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import { Modal } from 'bootstrap'
import { headerMenuStore } from '../stores/headerMenu'

const headerMenu = headerMenuStore()
const router = useRouter()
const rememberAcc = ref<boolean>(false)
const userInfo = ref<AccountData>({
  email: '',
  password: ''
})

onMounted(async () => {
  if(headerMenu.isLogin) {
    router.push('/user')
    return
  }
  if (localStorage.getItem('email')) {
    userInfo.value.email = localStorage.getItem('email') || ''
    rememberAcc.value = true
  }
  modal.value = new Modal(modalPwd.value as string | Element)
})

async function login() {
  if (!checkAccount(userInfo.value)) return
  const res = await fetchAPI('/api/v1/user/login', 'POST', userInfo.value)
  if (!res.status) {
    Swal.fire({
      icon: 'error',
      title: res.message
    })
    return
  }

  if (rememberAcc.value) {
    localStorage.setItem('email', userInfo.value.email)
  } else {
    localStorage.removeItem('email')
  }
  localStorage.setItem('token', res.token)
  router.push('/user')
}

// 忘記密碼
const modalPwd = ref<Element|Modal>()
const modal = ref<Element|Modal>()
const forgetData = ref({
  email: '',
  newPassword: '',
  code: ''
})
// 發送驗證碼
async function forgetPwd() {
  // @ts-ignore
  const { value: email } = await Swal.fire({
    title: '請輸入註冊的電子信箱',
    input: 'text',
    inputValidator: (value) => {
      const emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (!emailRegex.test(value)) {
        return '電子信箱格式錯誤'
      }
    }
  })
  if (!email) return
  const verify = await fetchAPI('/api/v1/verify/email', 'POST', { email })
  if (!verify.result.isEmailExists) {
    Swal.fire({
      icon: 'error',
      title: '該信箱未註冊'
    })
  }

  await fetchAPI('/api/v1/verify/generateEmailCode', 'POST', { email })
  const swal = await Swal.fire({
    title: '已發送驗證碼至信箱'
  })
  if (swal.isConfirmed || swal.isDismissed) {
    if (modal.value) {
// @ts-ignore
    modal.value.show()
    }
  }
}
// 重置密碼
async function resetPwd() {
  const {email, newPassword} = forgetData.value
  if(!(checkMail(email) && checkPassword(newPassword,newPassword))) return
  const forgot = await fetchAPI('/api/v1/user/forgot', 'POST', forgetData.value)
  console.log(forgot);

  Swal.fire({
    icon: forgot.status ? 'success' : 'error',
    title: forgot.status ? '變更密碼成功' : forgot.message
  })
  if(forgot.status) {
// @ts-ignore
    modal.value.hide()
  }
}

// 簡易驗證
function checkAccount(data: AccountData) {
  return checkMail(data.email) && checkPassword(data.password, data.password)
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
