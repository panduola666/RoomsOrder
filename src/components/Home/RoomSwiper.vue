<template>
  <div class="bg-black position-relative roomSwiper">
    <!-- 橫條背景 -->
    <img
      class="bg-horizontal-line position-absolute end-0"
      src="@/assets/image/desktop/Line3.png"
    />
    <swiper-container
      ref="swiper"
      :pagination="true"
      :autoplay="true"
      :loop="true"
      class="swiper-container start-0 bottom-0 pb-lg-10"
    >
      <template v-if="currRoom._id">
        <swiper-slide v-for="(img, index) in currRoom.imageUrlList" :key="img">
          <img :src="img" :alt="`詳情圖${index}`" class="" />
        </swiper-slide>
      </template>
    </swiper-container>

    <div class="container position-relative z-3 py-lg-10">
      <!-- TODO: 電腦版不在容器內 -->
      <!-- 房間圖片 -->

      <div class="row justify-content-end room-box" v-if="currRoom._id">
        <div class="col-lg-6 d-flex align-items-end">
          <div class="w-100">
            <div class="text-white fw-bold mb-7">
              <h2 class="fs-2">{{ currRoom.name }}</h2>
              <p class="title-description">{{ currRoom.description }}</p>
            </div>
            <div class="text-white fs-3 fw-bold mb-7">NT$ {{ moneyFormat(currRoom.price) }}</div>
            <div class="cta-btn">
              <!-- 帶詳情頁面參數 -->
              <p class="btn-line">查看更多</p>
            </div>
            <div class="text-end">
              <button type="button" class="btn pointer" @click="preRoom">
                <img class="me-6" src="@/assets/icons/arrowLeft.svg" alt="arrowLeft" />
              </button>
              <button type="button" class="btn pointer" @click="nextRoom">
                <img src="@/assets/icons/arrowRight.svg" alt="arrowRight" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="w-100 position-absolute bottom-0" src="@/assets/image/desktop/Bg.png" />
  </div>
</template>
<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { roomTypeStore } from '../../stores/room'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
export default {
  data() {
    return {
      currIndex: 0,
      swiper: {}
    }
  },
  mounted() {
    this.getRoomList()
  },
  watch: {
    currRoom() {
      this.$nextTick(() => {
        this.swiper = new Swiper(this.$refs.swiper, {
          modules: [Pagination],
          pagination: true,
          autoplay: true,
          loop: true
        })
        this.swiper.init()
      })
    }
  },
  computed: {
    ...mapState(roomTypeStore, ['roomList']),
    currRoom() {
      return this.roomList[this.currIndex] || {}
    }
  },
  methods: {
    ...mapActions(roomTypeStore, ['getRoomList']),
    nextRoom() {
      this.currIndex = this.currIndex + 1 > this.roomList.length - 1 ? 0 : this.currIndex + 1
    },
    preRoom() {
      this.currIndex = this.currIndex - 1 < 0 ? this.roomList.length - 1 : this.currIndex - 1
    }
  }
}
</script>
<style lang="scss" scoped>
.roomSwiper {
  --swiper-pagination-bullet-width: 32px;
  --swiper-pagination-bullet-height: 4px;
  --swiper-pagination-bullet-border-radius: 0;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-color: #bf9d7d;
}

.room-box {
  @include lg {
    height: 900px;
  }
}
.swiper-container {
  width: 100%;
  height: 300px;
  @include lg {
    position: absolute;
    height: 900px;
    width: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
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
