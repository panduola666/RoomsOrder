<template>
  <div class="d-flex flex-column">
    <h2 class="fs-6 fs-lg-5 fw-bold mb-0">歷史訂單</h2>
    <ul>
      <li
        class="py-5 py-lg-7 d-flex flex-column flex-lg-row gap-5 align-items-start fw-medium border-bottom border-2 border-neutral-40"
        v-for="i in 2"
        :key="i"
      >
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room_detail3.png?raw=true"
          class="img-fluid rounded-start rounded-3"
          alt="..."
          width="120"
          height="80"
        />
        <article class="d-flex flex-column text-neutral-80">
          <p class="fs-lg-0 fs-small">預訂參考編號： HH2302183151222</p>
          <p class="fs-lg-6 fs-small fw-bold">尊爵雙人房</p>
          <p class="fs-lg-0 fs-small mb-2">住宿天數： 1 晚</p>
          <p class="fs-lg-0 fs-small">住宿天數： 1 晚</p>
          <p class="sub-title sub-title-primary mb-2 fw-medium">入住：6 月 10 日星期二</p>
          <p class="sub-title sub-title-neutral-60 fw-medium">退房：6 月 11 日星期三</p>
          <p class="fs-lg-0 fs-small fw-bold mb-0">NT$10,000</p>
        </article>
      </li>
    </ul>
    <button type="button" class="btn btn-outline-primary d-flex align-items-center justify-content-center gap-1 py-3 px-6 rounded-3 ">
      查看更多
      <span class="material-symbols-outlined"> expand_more </span>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'HistoryOrder'
}
</script>
