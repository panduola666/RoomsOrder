<template>
  <main
    class="container-fluid d-flex align-items-center bg-neutral-bg text-white position-relative"
  >
    <img
      src="../assets/image/Line.png"
      alt="Line"
      class="position-absolute end-0 top-0 mt-8 py-5"
    />

    <img
      src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="loginImg"
      class="w-50 object-fit-cover position-relative z-1 d-none d-lg-block"
      style="max-height: 1078px"
    />
    <div class="row w-lg-50 flex-grow-1 position-relative z-1 py-4">
      <div class="col-lg-6 col mx-auto">
        <p class="mb-2 text-primary fw-bold fs-small fs-lg-0">享樂酒店，誠摯歡迎</p>
        <h1 class="fw-bold fs-lg-1 fs-3 mb-3">立即註冊</h1>

        <div class="mb-7 py-3 d-flex align-items-center gap-2">
          <template v-for="(step, index) in steps" :key="step.name">
            <div
              class="steps d-flex flex-column align-items-center gap-1"
              :class="{ active: index + 1 <= currStep }"
            >
              <div class="steps-num">
                <span v-if="index + 1 < currStep" class="material-symbols-outlined"> check </span>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <div class="step-text">{{ step }}</div>
            </div>
            <span
              v-if="index !== steps.length - 1"
              class="border border-neutral-60 flex-grow-1"
            ></span>
          </template>
        </div>

        <!-- 使用者表單 -->
        <StepOne v-if="currStep === 1" @nextStep="nextStep" />
        <StepTwo v-else :account="account"/>
        <span>已經有會員了嗎？</span>
        <router-link to="/login">立即登入</router-link>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
// @ts-ignore
import StepOne from '../components/SignInStep/StepOne.vue'
// @ts-ignore
import StepTwo from '../components/SignInStep/StepTwo.vue'
import { ref } from 'vue'
import type { AccountData} from '../interface/signup'

// 頁面步驟 & 換頁
const steps = ref<string[]>(['輸入信箱及密碼', '填寫基本資料'])
const currStep = ref(1)
const account = ref<AccountData>({
  email: '',
  password: ''
})
function nextStep(data: { step: number; account: AccountData }) {
  account.value = data.account
  currStep.value = data.step
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.steps {
  color: $neutral-60;
  font-weight: bold;
  &-num {
    border: 1px solid $neutral-60;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
  }
  .material-symbols-outlined {
    line-height: 32px;
  }
  &.active {
    color: $white;
    & .steps-num {
      border: 1px solid $primary;
      background: $primary;
    }
  }
}
</style>
