<template>
  <div class="banner-wrapper">
    <swiper-container :pagination="true" :autoplay="false" :loop="true">
      <swiper-slide
        class="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-7 gap-lg-9 px-4 px-lg-9 banner"
        v-for="i in 2"
        :key="i"
      >
        <div
          class="text-primary left-box d-flex flex-column align-items-center align-items-lg-start"
        >
          <p class="fs-2 mb-2">享樂酒店</p>
          <p class="fs-5">Enjoyment Luxury Hotel</p>
          <div class="middle-box d-lg-none"></div>
        </div>
        <div class="right-box text-white">
          <div>
            <h1 class="fs-lg-title fs-1 mb-5 fw-bold">高雄<br />豪華住宿之選</h1>
            <h2 class="fs-lg-3 sub-title fw-semibold p-0">
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </h2>
            <router-link
              to=""
              class="btn btn-book rounded-3 p-4 p-lg-7 w-100 d-flex align-items-center justify-content-end gap-3"
            >
              <span class="fs-lg-5">立即訂房</span>
              <span class="btn-book-line"></span>
            </router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
  <!-- <div class="banner-wrapper position-relative">
    <div class="banner d-flex justify-content-between align-items-center px-2_5 px-lg-9">
      <div class="text-primary fw-bold border-bottom border-2 border-gradient">
        <h1 class="ls-2 fs-2 text-heading mb-2 fw-bold">享樂酒店</h1>
        <p class="fs-5 mb-5 s-2">Enjoyment Luxury Hotel</p>
      </div>
      <div class="position-relative z-3">
        <p class="description-block fs-8 fs-lg-title fw-bold text-white mb-6">高雄<br/>豪華住宿之選</p>
        <p class="fs-lg-3 fs-md-5 text-neutral-40">我們致力於為您提供無與line倫比的奢華體驗與優質服務</p>
        <div class="cta-btn">
          <p class="btn-line me-4">立即訂房</p>
        </div>
        <div class="square mt-7 mt-lg-0 border-end border-top border-white-100"></div>
      </div>
    </div>
    <div class="pagination-block text-center mb-5 mb-lg-6">
      <span class="bg-primary d-inline-block pagination-default active me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
      <span class="bg-primary-40 d-inline-block pagination-default"></span>
    </div>
  </div> -->
</template>

<script lang="ts">
export default {}
// @ts-ignore
</script>

<style lang="scss" scoped>
.banner-wrapper {
  background:
    url('@/assets/image/mobile/Banner.png'),
    rgba($black, 0.6) no-repeat;
  object-fit: cover;
  background-size: cover;
  background-blend-mode: color-burn;
  @include lg {
    background:
      url('@/assets/image/desktop/Banner.png'),
      rgba($black, 0.6) no-repeat;
    object-fit: cover;
    background-size: cover;
    background-blend-mode: color-burn;
  }
  .ls-2 {
    letter-spacing: 2px;
  }
}
.banner {
  padding-top: 112px;
  padding-bottom: 71px;
  @include lg {
    padding-top: 236px;
    padding-bottom: 166px;
  }
  // margin-top: 116px;
  // margin-bottom: 140px;
}
.left-box {
  flex-grow: 1;
  max-width: 636px;
  @include lg {
    border-bottom: 2px solid;
    border-image: linear-gradient(to right, #be9c7c, #fff) 2;
  }
}
.middle-box {
  height: 83px;
  width: 2px;
  background: linear-gradient(to bottom, #be9c7c, #fff);
}
.right-box {
  position: relative;
  left: 20px;
  padding: 60px 20px;
  flex-grow: 1;
  max-width: 291px;
  display: flex;
  align-content: center;
  justify-content: center;
  background: linear-gradient(rgba($white, 0) 0%, rgba($white, 0.3) 100%);
  backdrop-filter: blur(20px);
  border-radius: 80px;
  border-width: 1px 1px 0px 0px;
  border-style: solid;
  border-color: #f5f7f9;
  @include lg {
    padding: 96px;
    max-width: 924px;
    left: 0px;
  }
  & > div {
    position: relative;
    left: -58px;
    @include lg {
      left: -141px;
    }
  }
}
.sub-title {
  margin-bottom: 60px;
}
.btn-book {
  background: #fff;
  &-line {
    display: inline-block;
    width: 80px;
    border: 1px solid #000;
    @include lg {
      width: 150px;
    }
  }
  &:hover {
    background: $primary;
    color: #fff;
  }
}
.banner-wrapper {
  --swiper-pagination-bullet-width: 32px;
  --swiper-pagination-bullet-height: 4px;
  --swiper-pagination-bullet-border-radius: 0;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-color: #bf9d7d;
}

// .border-gradient {
//   border-bottom-color: linear-gradient(to right, #BE9C7C, $white);
// }
// .right-wrapper {
//   height: 116px;

// }
// .square {
//   width: calc(100% - 48px);
//   height: 420px;
//   position: absolute;
//   top: 0;
//   left: 48px;
//   border-radius: 80px;
//   z-index: -10;
//   background: linear-gradient(rgba($white, 0) 0%, rgba($white, 0.3) 100%);
//   @include lg {
//     height: 678px;
//   }
// }
// .description-block {
//   margin-top: 96px;
// }
// .pagination-block {
//   margin-top: 43px;
//   @include lg {
//     margin-top: 130px;
//   }
// }
// .active {
//   width: 60px;
// }
</style>
