<template>
  <div class="position-relative bg-primary-10 py-10">
    <!-- TODO: 點點會遮到文字 -->
    <img
      class="position-absolute dot dot1 dot-top"
      src="@/assets/image/desktop/Dot.png"
      alt="dot"
    />
    <img class="position-absolute dot dot2" src="@/assets/image/desktop/Dot.png" alt="dot" />
    <div class="container wrapper d-flex">
      <div class="row">
        <div class="col-lg-2 border-bottom-2 mb-5 align-self-start">
          <h1 class="fs-3 fs-lg-1 text-primary fw-bold">最新<br />消息</h1>
          <span class="line"></span>
        </div>
        <div class="col-lg-10">
          <div
            class="d-flex flex-column flex-md-row align-items-center mb-7 pointer"
            v-for="item in newList"
            :key="item._id"
            @click="showModal(item)"
          >
            <img class="w-full w-md-50" :src="item.image" :alt="item.title" />
            <div class="ms-md-5 mt-5 mt-lg-0">
              <h3 class="data-fs-7 fs-lg-3 fw-bold">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>

          <!-- <div class="d-flex flex-column flex-md-row align-items-center mb-7">
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
          </div> -->
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      ref="newsModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ currNew.title }}</h1>
          </div>
          <div class="modal-body">
            <img :src="currNew.image" :alt="currNew.title" class="w-100 img-fluid mb-3" />
            <p class="text-end mb-2">
              發布日期: {{ `${getDate(currNew.createdAt)}  ${getHour(currNew.createdAt)}` }}
            </p>
            <p class="fs-6">{{ currNew.description }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="newsModal.hide()">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { news } from '../../interface/news'
import { Modal } from 'bootstrap'
import mixin from '../../mixin/globalMix'

export default {
  data() {
    return {
      newList: [] as news[],
      currNew: {} as news,
      newsModal: {
        show() {},
        hide() {}
      }
    }
  },
  mixins: [mixin],
  async mounted() {
    const res: {
      status: boolean
      result: news[]
    } = await this.fetchAPI('/api/v1/home/news/', 'GET')
    if (res.status) {
      this.newList = res.result
    }
    this.newsModal = new Modal(this.$refs.newsModal as string | Element)
  },
  methods: {
    showModal(item: news) {
      this.newsModal.show()
      this.currNew = item
    }
  }
}
</script>
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
  &1 {
    right: 24px;
    top: 40px;
    @include lg {
      right: 180px;
      top: 100px;
    }
  }
  &2 {
    bottom: -50px;
    left: 24px;
    @include lg {
      bottom: -100px;
      left: 180px;
    }
  }
}
.dot-top {
}
.line {
  display: inline-block;
  width: 161px;
  height: 2px;
  background: linear-gradient(to right, #be9c7c, $white);
  vertical-align: middle;
}
</style>
