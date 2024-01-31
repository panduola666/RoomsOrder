<template>
  <div class="banner-wrapper ">
    <div class="banner d-flex justify-content-between align-items-center px-2_5 px-lg-9">
      <div class="text-primary fw-bold border-bottom border-2 border-gradient">
        <h1 class="ls-2 fs-2 text-heading mb-2 fw-bold">享樂酒店</h1>
        <p class="fs-5 mb-5 s-2">Enjoyment Luxury Hotel</p>
      </div>
      <div class="position-relative">
        <p class="fs-title fw-bold text-white mb-6">高雄<br/>豪華住宿之選</p>
        <p class="fs-3 text-neutral-40 text-nowrap">我們致力於為您提供無與line倫比的奢華體驗與優質服務</p>
        <div class="cta-btn">
          <p class="btn-line me-4">立即訂房</p>
        </div>
        <div class="square border-end border-top border-white-100 "></div>
      </div>
    </div>
    <div class="text-center mb-5 mb-lg-6">
      <span class="bg-primary d-inline-block pagination-default active me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
</script>

<style lang="scss" scoped>
.banner-wrapper {
  background: url('@/assets/image/mobile/Banner.png'), rgba($black, .6) no-repeat;
  object-fit: cover;
  background-size: cover;
  background-blend-mode: color-burn;
  
  @include lg {
    background: url('@/assets/image/desktop/Banner.png'), rgba($black, .6) no-repeat;
    object-fit: cover;
    background-size: cover;
    background-blend-mode: color-burn;
  }
  .ls-2 {
    letter-spacing: 2px;
  }
}
.banner {
  padding-top: 236px;
  padding-bottom: 130px;
  // margin-top: 116px;
  // margin-bottom: 140px;
}
.border-gradient {
  border-bottom-color: linear-gradient(to right, #BE9C7C, $white);
}
.right-wrapper {
  height: 116px;


}
.square {
  width: 100%;
  height: 678px;
  position: absolute;
  top: 0;
  left: 48px;
  border-radius: 80px;
  background: linear-gradient(rgba($white, 0) 0%, rgba($white, 0.3) 100%);
}
.pagination-default {
  border-radius: 100px;
  width: 32px;
  height: 4px;
}
.active {
  width: 60px;
}
</style>