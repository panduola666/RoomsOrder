<template>
  <div class="position-relative bg-primary-10 py-10">
    <!-- 點點會遮到文字 -->
    <img class="position-absolute dot dot-top end-0" src="@/assets/image/desktop/Dot.png" alt="dot">
    <img class="position-absolute dot dot-bottom bottom-0 z-3" src="@/assets/image/desktop/Dot.png" alt="dot">
    <div class="container wrapper d-flex">
      <div class="row">
        <!-- border -->
        <div class="col-lg-2 border-bottom-2 mb-5 align-self-start">
          <h1 class="fs-3 fs-lg-1 text-primary fw-bold">最新<br>消息</h1>
          <span class="line"></span>
        </div>
        <div class="col-lg-10">
          <div class="d-flex flex-column flex-md-row align-items-center mb-7">
            <img class="w-full w-md-50" src="@/assets/image/desktop/News1.png" alt="news1">
            <div class="ms-md-5 mt-5 mt-lg-0">
              <h3 class="data-fs-7 fs-lg-3 fw-bold">秋季旅遊，豪華享受方案</h3>
              <p>秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。</p>
            </div>
          </div>

          <div class="d-flex flex-column flex-md-row align-items-center mb-7">
            <img class="w-full w-md-50" src="@/assets/image/desktop/News2.png" alt="news2">
            <div class="ms-md-5 mt-5 mt-lg-0">
              <h3 class="data-fs-7 fs-lg-3 fw-bold">輕鬆住房專案</h3>
              <p>我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。</p>
            </div>
          </div>

          <div class="d-flex flex-column flex-md-row align-items-center">
            <img class="w-full w-md-50" src="@/assets/image/desktop/News3.png" alt="news3">
            <div class="ms-md-5 mt-5 mt-lg-0">
              <h3 class="data-fs-7 fs-lg-3 fw-bold">耶誕快樂，住房送禮</h3>
              <p>聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 自定義加了 data 前綴
.data-fs-7 {
  font-size: 28px;
}
.dot {
  width: 100px;
  height: 100px;
  @include lg {
    width: 200px;
    height: 200px;
  }
}
.dot-top {
  top: 100px;
}
.line {
  display: inline-block;
  width: 161px;
  height: 2px;
  background: linear-gradient(to right, #BE9C7C , $white);
  vertical-align: middle;
}
</style>