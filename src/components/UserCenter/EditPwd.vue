<template>
  <div>
    <h2 class="h5 mb-7 fw-bold">修改密碼</h2>

    <p class="mb-2 text-neutral-80 fw-medium">電子信箱</p>
    <p class="mb-5 fw-bold">Jessica@exsample.com</p>

    <div class="d-flex align-items-center gap-3" v-if="!resetPwd">
      <div class="flex-grow-1">
        <p class="mb-2 text-neutral-80 fw-medium">密碼</p>
        <i class="pwdPoint d-inline-block bg-black rounded-circle me-2"></i>
        <i class="pwdPoint d-inline-block bg-black rounded-circle me-2"></i>
        <i class="pwdPoint d-inline-block bg-black rounded-circle me-2"></i>
        <i class="pwdPoint d-inline-block bg-black rounded-circle me-2"></i>
        <i class="pwdPoint d-inline-block bg-black rounded-circle me-2"></i>
      </div>
      <span class="text-primary pointer text-decoration-underline" @click="resetPwd = true"
        >重設</span
      >
    </div>
    <form v-else>
      <div class="mb-5">
        <label for="password" class="form-label fw-bold">舊密碼</label>
        <input
          type="password"
          class="form-control p-3 rounded-3"
          id="password"
          placeholder="請輸入舊密碼"
        />
      </div>
      <div class="mb-5">
        <label for="password" class="form-label fw-bold">新密碼</label>
        <input
          type="password"
          class="form-control p-3 rounded-3"
          id="password"
          placeholder="請輸入新密碼"
        />
      </div>
      <div class="mb-7">
        <label for="password" class="form-label fw-bold">確認新密碼</label>
        <input
          type="password"
          class="form-control p-3 rounded-3"
          id="password"
          placeholder="請再輸入一次新密碼"
        />
      </div>
      <input type="button" class="btn btn-primary py-3 px-6 rounded-3 disabled" value="儲存設定" @click="resetPwd = false">
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const resetPwd = ref<boolean>(false)
</script>
<style lang="scss" scoped>
.pwdPoint {
  width: 8px;
  height: 8px;
}
</style>
