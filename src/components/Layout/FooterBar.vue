<template>
  <footer class="bg-neutral-bg pt-9 pb-9 pb-lg-10 text-white">
    <div class="container">
      <div class="d-flex flex-column flex-lg-row mb-9 justify-content-between">
        <div class="mb-7 mb-lg-0">
          <img src="../../assets/image/common/Logo_White.png" alt="logo" width="196"  height="72" class="mb-7">
          <div class="d-flex gap-3">
            <img src="../../assets/icons/line.svg" alt="line" width="40" height="40" class="p-2 border border-white rounded-circle">
            <img src="../../assets/icons/instagram.svg" alt="instagram" width="40" height="40" class="p-2 border border-white rounded-circle">
          </div>
        </div>
        <section class="connection d-grid gap-3 gap-lg-7">
          <div>
            <p class="fw-bold mb-2">TEL</p>
            <a href="tel:+886-7-1234567" class="text-white">+886-7-1234567</a>
          </div>
          <div>
            <p class="fw-bold mb-2">MAIL</p>
            <a href="mailto:elh@hexschool.com" class="text-white">elh@hexschool.com</a>
          </div>
          <div>
            <p class="fw-bold mb-2">FAX</p>
            <a href="tel:+886-7-1234567" class="text-white">+886-7-1234567</a>
          </div>
          <div>
            <p class="fw-bold mb-2">WEB</p>
            <a href="www.elhhexschool.com.tw" target="_blank" class="text-white">www.elhhexschool.com.tw</a>
          </div>
        </section>
      </div>
      <div class="d-flex flex-column flex-lg-row justify-content-between gap-3">
        <span>
          806023 台灣高雄市新興區六角路123號
        </span>
        <span>
          © 享樂酒店 2023 All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.connection{
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>