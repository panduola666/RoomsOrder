<template>
  <div class="bg-black position-relative py-lg-10">
    <!-- 橫條背景 -->
    <img class="bg-horizontal-line position-absolute end-0" src="@/assets/image/desktop/Line3.png" />
    <div class="container d-lg-flex align-items-end">
      <!-- TODO: 電腦版不在容器內 -->
      <swiper-container class="w-lg-50">
        <swiper-slide class="position-relative">
          <img src="@/assets/image/desktop/Room1.png" alt="Room1">
          <div class="pagination-block text-center mb-5 mb-lg-6">
            <span class="bg-primary d-inline-block pagination-default active me-2"></span>
            <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
            <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
            <span class="bg-primary-40 d-inline-block pagination-default"></span>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>Slide 2</swiper-slide> -->
        <!-- <swiper-slide>Slide 3</swiper-slide> -->
      </swiper-container>
      <div>
        <div class="text-white fw-bold mb-7">
          <h2 class="fs-2">尊爵雙人房</h2>
          <p class="title-description">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
        </div>
        <div class="text-white fs-3 fw-bold mb-7">NT$ 10,000</div>
        <div class="cta-btn">
          <!-- TODO: 按鈕 hover -->
          <p class="btn-line">查看更多</p>
        </div>
        <div class="text-end">
          <button type="button" class="btn">
            <img class="me-6" src="@/assets/icons/arrowLeft.svg" alt="arrowLeft">
          </button>
          <button type="button" class="btn">
            <img src="@/assets/icons/arrowRight.svg" alt="arrowRight">
          </button>
        </div>
      </div>
    </div>
    <img class="w-100 position-absolute bottom-0" src="@/assets/image/desktop/Bg.png" />
  </div>
</template>

<style lang="scss" scoped>
.title-description {
  font-weight: 500;
}
.pagination-block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.line {
  &::after {
    content: '';
    display: inline-block;
    width: 150px;
    height: 1px;
    margin-left: 16px;
    background-color: $black;
    vertical-align: middle;
    line-height: 36px;
  }
}
</style>