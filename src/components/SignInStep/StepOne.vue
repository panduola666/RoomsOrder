<template>
  <form class="needs-validation mb-3" @submit.prevent="nextStep(2)">
    <div class="mb-3">
      <label for="email" class="form-label">電子信箱</label>
      <input
        type="email"
        class="form-control p-3"
        id="email"
        aria-describedby="emailHelp"
        placeholder="hello@exsample.com"
        required
        v-model="account.email"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">密碼</label>
      <input
        type="password"
        class="form-control p-3"
        id="password"
        aria-describedby="password"
        autocomplete="on"
        placeholder="請輸入密碼"
        required
        v-model="account.password"
      />
    </div>
    <div class="mb-7">
      <label for="checkPassword" class="form-label">確認密碼</label>
      <input
        type="password"
        class="form-control p-3"
        id="checkPassword"
        aria-describedby="checkPassword"
        autocomplete="on"
        placeholder="請再輸入一次密碼"
        required
        v-model="checkPwd"
      />
    </div>
    <input type="submit" class="btn btn-primary w-100 py-3 px-6" value="下一步" />
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { AccountData } from '@/interface/signup'
import { checkMail, checkPassword } from '@/mixin/validate'

const account = ref<AccountData>({
  email: '',
  password: ''
})
const checkPwd = ref<string>('')

const emits = defineEmits(['nextStep'])
function nextStep(step: number) {
  if(checkAccount(account.value)){
    emits('nextStep', {
      step,
      account: account.value
    })
  }
}

// 簡易驗證
function checkAccount(data: AccountData) {
  return checkMail(data.email) && checkPassword(data.password, checkPwd.value)
}
</script>
