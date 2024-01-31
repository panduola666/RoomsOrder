<template>
  <div class="banner-wrapper d-flex justify-content-center align-items-center">
    <div class="container position-relative">
      <div class="title-block d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div class="border-gradient text-primary text-center text-lg-start fw-bold">
          <h1 class="ls-2 fs-2 text-heading mb-2 fw-bold">享樂酒店</h1>
          <p class="fs-5 mb-5 s-2">Enjoyment Luxury Hotel</p>
        </div>
        <div class="position-relative z-3 px-lg-9">
          <p class="text-white fs-3 fs-lg-1">客房旅宿</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination-block text-center mb-5 mb-lg-6">
    <span class="bg-primary d-inline-block pagination-default active me-2"></span>
    <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
    <span class="bg-primary-40 d-inline-block pagination-default me-2"></span>
    <span class="bg-primary-40 d-inline-block pagination-default"></span>
  </div>
  <RoomType />
</template>

<script setup lang="ts">
// @ts-ignore
import RoomType from '@/components/Room/RoomType.vue';

</script>

<style lang="scss" scoped>
.border-gradient {
  &::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 83px;
    background: linear-gradient(to bottom, #BE9C7C, $white);
    @include lg {
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #BE9C7C, $white);
    }
  }
}
.description-block {
  margin-top: 96px;
}
.pagination-block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
.active {
  width: 60px;
}
.banner-wrapper {
  min-height: 100vh;
  width: 100%;
}

.title-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>