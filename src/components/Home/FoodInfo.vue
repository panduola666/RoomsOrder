<template>
  <div class="position-relative">
    <img class="bg-dot d-none d-lg-inline-block" src="@/assets/image/desktop/Dot.png" alt="dot" />
    <img class="bg-line" src="@/assets/image/desktop/Line.png" alt="line" />
  </div>
  <div class="container py-9 py-lg-10">
    <div class="d-flex align-items-center fs-1 text-primary fw-bold mb-7 mb-lg-9">
      <div class="me-7 mb-4">
        <p class="mb-0">佳餚</p>
        <p class="mb-0">美食</p>
      </div>
      <span class="line"></span>
    </div>
    <div>
      <swiper-container slides-per-view="auto">
        <swiper-slide
          class="me-5 position-relative foodItem rounded-3"
          v-for="item in foodList"
          :key="item._id"
        >
          <img :src="item.image" :alt="item.title" class="foodImg" />
          <div class="position-absolute bottom-0 start-0 end-0 text-white p-3 p-lg-5 mark">
            <p class="fw-bold mb-4 mb-lg-5 d-flex justify-content-between align-items-center">
              <span class="fs-5">{{ item.title }}</span>
              <span class="fs-lg-0 fs-small">{{ item.diningTime }}</span>
            </p>
            <p class="mb-0 fs-lg-0 fs-small fw-medium">{{ item.description }}</p>
          </div>
        </swiper-slide>
        <!-- <swiper-slide class="me-5">
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
        </swiper-slide> -->
      </swiper-container>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      foodList: []
    }
  },
  async mounted() {
    const res = await this.fetchAPI('/api/v1/home/culinary/', 'GET')
    this.foodList = res.result
  },
  methods: {}
}
</script>
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
  background: linear-gradient(to right, #be9c7c, $white);
  vertical-align: middle;
}
.foodItem {
  width: 300px;
  height: 480px;
  @include lg {
    width: 416px;
    height: 600px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.mark {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #140f0a 77.6%);
  backdrop-filter: blur(10px);
}
</style>
