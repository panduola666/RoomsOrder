<template>
  <div class="banner-wrapper position-relative">
    <HeaderNav />
    <!-- 外層容器 -->
    <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center px-4 px-lg-9">
      <!-- 左半邊 -->
      <div class="border-gradient text-primary d-flex flex-column justify-content-center align-items-center align-items-lg-start fw-bold">
        <h1 class="ls-2 fs-2 text-heading mb-2 fw-bold">享樂酒店</h1>
        <p class="fs-5 mb-5 s-2">Enjoyment Luxury Hotel</p>
      </div>
      <!-- 右半邊 -->
      <div class="position-relative z-3">
        <p class="description-block fs-8 fs-lg-title fw-bold text-white mb-6">高雄<br/>豪華住宿之選</p>
        <p class="fs-lg-3 fs-md-5 text-neutral-40">我們致力於為您提供無與line倫比的奢華體驗與優質服務</p>
        <!-- TODO: 可改用 router link -->
        <div class="cta-btn">
          <p class="btn-line me-4">立即訂房</p>
        </div>
        <!-- 白色半透明背景 -->
        <div class="square mt-7 mt-lg-0 border-end border-top border-white-100"></div>
      </div>
    </div>
    <div class="pagination-block text-center mb-5 mb-lg-6">
      <span class="bg-primary d-inline-block pagination-default active me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import HeaderNav from '@/components/Layout/HeaderNav.vue';
</script>

<style lang="scss" scoped>
.border-gradient {
  &::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 83px;
    background: linear-gradient(to bottom, #BE9C7C, $white);
    @include lg {
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #BE9C7C, $white);
    }
  }
}
.square {
  width: calc(100% - 48px);
  height: 420px;
  position: absolute;
  top: 0;
  left: 48px;
  border-radius: 80px;
  z-index: -10;
  background: linear-gradient(rgba($white, 0) 0%, rgba($white, 0.3) 100%);
  @include lg {
    height: 678px;
  }
}
.description-block {
  margin-top: 96px;
}
.pagination-block {
  margin-top: 43px;
  @include lg {
    margin-top: 130px;
  }
}
.active {
  width: 60px;
}
</style>