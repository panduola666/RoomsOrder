<template>
  <div class="roomSwiper bg-black position-relative py-9 py-lg-0">
    <!-- 橫條背景 -->
    <div class="bg-hor-linear"></div>

    <!-- @vue-ignore -->
    <swiper-container
      ref="swiper"
      :pagination="true"
      :autoplay="true"
      :loop="true"
      class="swiper-container start-0 bottom-0 pb-lg-10"
    >
      <template v-if="currRoom._id">
        <!-- @vue-skip  -->
          <swiper-slide  v-for="(img, index) in currRoom.imageUrlList" :key="img">
            <img :src="img" :alt="`詳情圖${index}`" />
          </swiper-slide>
      </template>
    </swiper-container>

    <div class="container position-relative z-3 py-lg-10">
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
            <div class="text-end mt-5 mt-lg-7">
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
    <img class="d-none d-lg-block w-100 position-absolute bottom-0" src="@/assets/image/desktop/Bg.png" />
  </div>
</template>
<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { roomTypeStore } from '../../stores/room'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import type { Room } from '../../interface/room'
import mixin from '../../mixin/globalMix'

export default {
  data() {
    return {
      currIndex: 0,
      swiper: {
        init() {}
      }
    }
  },
  mixins: [mixin],
  mounted() {
    this.getRoomList()
  },
  watch: {
    currRoom() {
      this.$nextTick(() => {
        this.swiper = new Swiper(this.$refs.swiper as HTMLElement, {
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
      return this.roomList[this.currIndex] as Room || {}
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
  margin-top: 24px;
  margin-bottom: 80px;
  @include lg {
    height: 900px;
    margin-top: 0;
    margin-bottom: 0;
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
.bg-hor-linear {
  background: url('@/assets/image/mobile/Line.png');
  background-size: cover;
  position: absolute;
  top: -24px;
  right: -80px;
  width: 100%;
  height: 84px;
  z-index: 10;
  @include lg {
    top: 180px;
    right: 0;
    width: 55%;
    height: 187px;
  }
}
</style>
