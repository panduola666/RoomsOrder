<template>
  <div class="position-relative">
    <img class="bg-dot d-none d-lg-inline-block" src="@/assets/image/desktop/Dot.png" alt="dot">
    <img class="bg-line" src="@/assets/image/desktop/Line.png" alt="line">
  </div>
  <div class="container py-9 py-lg-10">
    <!-- <div class="position-relative d-inline-block">
    </div> -->
    <div class="d-flex align-items-center fs-1 text-primary fw-bold mb-7 mb-lg-9">
      <div class="me-7 mb-4">
        <p class="mb-0">佳餚</p>
        <p class="mb-0">美食</p>
      </div>
      <span class="line"></span>
    </div>
    <div>
      <swiper-container
        slides-per-view="3"
      >
        <swiper-slide class="me-5">
          <img src="@/assets/image/desktop/Food1.png" alt="Food1">
        </swiper-slide>
        <swiper-slide class="me-5">
          <img src="@/assets/image/desktop/Food2.png" alt="Food2">
        </swiper-slide>
        <swiper-slide class="me-5">
          <img src="@/assets/image/desktop/Food3.png" alt="Food3">
        </swiper-slide>
        <swiper-slide class="me-5">
          <img src="@/assets/image/desktop/Food4.png" alt="Food4">
        </swiper-slide>
        <swiper-slide class="me-5">
          <img src="@/assets/image/desktop/Food5.png" alt="Food5">
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containers {
  padding: 0 312px;
}
.bg-line {

  display: none;
  @media (min-width: 1800px) {
    display: inline-block;
    height: 1068px;
    position: absolute;
    top: 55px;
    left: 40px;
  }
}

.bg-dot {
  width: 200px;
  height: 200px;
  position: absolute;
  right: 80px;
  top: -40px;
}

.line {
  display: inline-block;
  width: 161px;
  height: 2px;
  background: linear-gradient(to right, #BE9C7C , $white);
  vertical-align: middle;
}
</style>