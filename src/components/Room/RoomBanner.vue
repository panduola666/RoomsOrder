<template>
    <div class="banner d-none d-md-flex">
      <div class="left">
        <img :src="roomInfo.imageUrl" alt="">
      </div>
      <div class="right">
        <div v-for="(img, index) in roomInfo.imageUrlList" :key="index">
          <img :src="img" alt="">
        </div>
        <!-- <div class="position-relative">
          <button type="button" class="btn btn-outline-primary watch-more bg-white">
            看更多
          </button>
        </div> -->
      </div>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { Room } from '@/interface/room'
defineProps({
  roomInfo: {
    type: Object as PropType<Room>,
    required: true
  }
})
</script>
<style>
.banner {
  margin: 80px;
  border-radius: 20px;
  gap: 8px;
  overflow: hidden;

  .left {
    max-height: 600px;
    flex: 1 1 978px;
  }

  .right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 8px;
    flex: 1 1 774px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .watch-more {
    position: absolute;
    bottom: 40px;
    right: 40px;
  }
}
</style>