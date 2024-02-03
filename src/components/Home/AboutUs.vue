<template>
  <div class="bg-black py-9 py-lg-10">
    <div class="about-us-bg">
      <div class="container pt-7 pt-lg-9 mb-9 pb-lg-10 position-relative">
        <div class="about-square py-5 py-lg-9 position-absolute start-7 start-lg-0 end-5 end-lg-0 bottom-lg-10 border-bottom border-start border-white-100">
          <div class="text-white px-5">
            <div class="d-flex align-items-center gap-7 mb-7 mb-lg-9">
              <div class="fs-3 fs-lg-1 fw-bold">
                <p class="mb-0">關於</p>
                <p class="d-inline">我們</p>
              </div>
              <span class="about-line"></span>
            </div>
            <p class="mb-3 mb-lg-7">
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              <br>
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>
            <p class="mb-3 mb-lg-7">
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              <br>
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>
            <p class="mb-3 mb-lg-7">
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </p>
            <p class="">
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘
              的高雄故事。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-us-bg {
  background: url('@/assets/image/mobile/About.png') no-repeat;
  background-position: center;
  background-size: cover;
  height: 672px;
  @include lg {
    background: url('@/assets/image/desktop/About.png') no-repeat;
  }
}
.about {
  &-square {
    width: 90%;
    background: linear-gradient(rgba($neutral-bg, .8) 0%, rgba(#BE9C7C, .8) 100%);
    border-radius: 40px 40px 0;
    @include lg {
      border-radius: 80px 80px 0;
    }
  }
  &-line {
    display: inline-block;
    width: 165px;
    height: 2px;
    background: $white;
    vertical-align: middle;
  }
}
</style>