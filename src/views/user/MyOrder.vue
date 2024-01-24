<template>
  <main class="bg-neutral-bg">
    <div class="row g-5 g-lg-7">
      <div class="col-12 col-lg-7 ps-lg-0">
        <section class="bg-white p-3 p-lg-7 rounded-6">
          <nextRoom />
        </section>
      </div>
      <div class="col-12 col-lg-5 pe-lg-0">
        <section class="bg-white p-5 p-lg-7 rounded-6"></section>
      </div>
    </div>
  </main>
</template>
<script>
import nextRoom from '../../components/UserCenter/NextRoom.vue'
export default {
  name: 'MyOrder',
  components: {
    nextRoom
  }
}
</script>
