<template>
  <div class="bg-black position-relative py-lg-10">
    <img class="bg-horizontal-line position-absolute end-0" src="@/assets/image/desktop/Line3.png" />


    <div class="container d-lg-flex align-items-end">
      <swiper-container class="w-lg-50">
        <swiper-slide>
          <img src="@/assets/image/desktop/Room1.png" alt="Room1">
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
.bg-horizontal-line {
  width: 1060px;
}

.title-description {
  font-weight: 500;
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