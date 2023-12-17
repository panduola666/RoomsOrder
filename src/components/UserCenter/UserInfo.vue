<template>
  <div>
    <h2 class="h5 fw-bold mb-7">基本資料</h2>

    <div v-if="!editInfo">
        <p class="mb-2 text-neutral-80 fw-medium">姓名</p>
        <p class="mb-5 fw-bold">Jessica Wang</p>
        <p class="mb-2 text-neutral-80 fw-medium">手機號碼</p>
        <p class="mb-5 fw-bold">+886 912 345 678</p>
        <p class="mb-2 text-neutral-80 fw-medium">生日</p>
        <p class="mb-5 fw-bold">1990 年 8 月 15 日</p>
        <p class="mb-2 text-neutral-80 fw-medium">地址</p>
        <p class="mb-7 fw-bold">高雄市新興區六角路 123 號</p>
        <input type="button" class="btn btn-outline-primary py-3 px-6 fw-bold" value="編輯" @click="editInfo = true">
    </div>
    <form v-else>
      <div class="mb-5">
        <label for="userName" class="form-label fw-bold">姓名</label>
        <input
          type="text"
          class="form-control p-3 rounded-3"
          id="userName"
          placeholder="請輸入姓名"
        />
      </div>
      <div class="mb-5">
        <label for="userName" class="form-label fw-bold">手機號碼</label>
        <input
          type="tel"
          class="form-control p-3 rounded-3"
          id="userName"
          placeholder="請輸入手機號碼"
        />
      </div>
      <div class="mb-5">
        <label for="birth" class="form-label fw-bold">生日</label>
        <div class="d-flex gap-2">
          <select id="birth" class="form-select p-3 rounded-3">
            <option selected>1990 年</option>
          </select>
          <select class="form-select p-3 rounded-3">
            <option selected>8 月</option>
          </select>
          <select class="form-select p-3 rounded-3">
            <option selected>15 日</option>
          </select>
        </div>
      </div>
      <div class="mb-7">
        <label for="address" class="form-label fw-bold">地址</label>
        <div class="d-flex gap-2 mb-3">
          <select id="address" class="form-select p-3 rounded-3">
            <option selected>高雄市</option>
          </select>
          <select class="form-select p-3 rounded-3">
            <option selected>新興區</option>
          </select>
        </div>
        <input
          type="text"
          class="form-control p-3 rounded-3"
          placeholder="請輸入詳細地址"
        />
      </div>
      <input type="button" class="btn btn-primary py-3 px-6 rounded-3 disabled" value="儲存設定" @click="editInfo = false">

    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const editInfo = ref<boolean>(false)
</script>