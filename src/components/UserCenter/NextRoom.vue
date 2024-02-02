<template>
  <section class="bg-white p-3 p-lg-7 rounded-6">
    <p class="fw-medium text-neutral-80">預訂參考編號： {{ roomInfo._id || '--' }}</p>
    <h2 class="title">即將來的行程</h2>
    <template v-if="roomInfo._id">
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true"
        alt=""
        class="nextRoomImg rounded-3 mb-5 mb-lg-7"
      />
      <div class="d-flex flex-column gap-5 pb-5 mb-5 border-bottom border-2 border-neutral-40">
        <h3 class="fw-bold text-neutral-80 fs-lg-5 fs-small">
          <span class="pe-3 me-3 border-end border-neutral-60"
            >{{ roomInfo.roomId.name }}，{{
              getDiff(roomInfo.checkInDate, roomInfo.checkOutDate)
            }}
            晚</span
          >
          <span>住宿人數：{{ roomInfo.peopleNum }} 位</span>
        </h3>
        <div>
          <p class="sub-title sub-title-primary">
            入住：{{ getDate(roomInfo.checkInDate) }}，{{ getHour(roomInfo.checkInDate) }} 可入住
          </p>
          <p class="sub-title sub-title-neutral-60">
            退房：{{ getDate(roomInfo.checkOutDate) }}，{{ getHour(roomInfo.checkOutDate) }} 前退房
          </p>
        </div>
        <p class="fw-bold fs-lg-0 fs-small mb-0">NT$ {{ getPrice(roomInfo as orderData) }}</p>
      </div>

      <div class="mb-5 mb-lg-7" v-if="roomInfo.roomId.layoutInfo">
        <p class="sub-title sub-title-primary">房間格局</p>
        <div class="p-5 border border-neutral-40 rounded-3">
          <!-- @vue-skip -->
          <RoomService :service="roomInfo.roomId.layoutInfo" />
        </div>
      </div>
      <div class="mb-5 mb-lg-7" v-if="roomInfo.roomId.facilityInfo">
        <p class="sub-title sub-title-primary">房內設備</p>
        <div class="p-5 border border-neutral-40 rounded-3">
          <!-- @vue-skip -->
          <RoomService :service="roomInfo.roomId.facilityInfo" />
        </div>
      </div>
      <div class="mb-5 mb-lg-7" v-if="roomInfo.roomId.amenityInfo">
        <p class="sub-title sub-title-primary">備品提供</p>
        <div class="p-5 border border-neutral-40 rounded-3">
          <!-- @vue-skip -->
          <RoomService :service="roomInfo.roomId.amenityInfo" />
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        <button
          type="button"
          class="btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50 d-none d-lg-block"
          @click="modal.show()"
        >
          取消預訂
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50 d-lg-none"
          @click="offcanvas.show()"
        >
          取消預訂
        </button>
        <!-- @vue-skip -->
        <router-link
          :to="{ name: 'roomDetail', params: { id: roomInfo.roomId._id } }"
          class="btn btn-primary rounded-3 fw-bold py-3 px-6 w-50"
          >查看詳情</router-link
        >
      </div>
    </template>
    <template v-else>
      <h2 class="text-center py-3">無</h2>
    </template>
  </section>

  <!-- PC -->
  <div
    class="modal fade"
    ref="cancelModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body position-relative p-0">
          <span
            class="material-symbols-outlined p-2 position-absolute top-0 end-0"
            @click="modal.hide()"
          >
            close
          </span>
          <p class="h6 text-center mb-0" style="padding: 100px 0">確定要取消此房型的預訂嗎？</p>
        </div>
        <div class="modal-footer flex-nowrap">
          <button
            type="button"
            class="btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50"
            @click="modal.hide()"
          >
            關閉視窗
          </button>
          <button
            type="button"
            class="btn btn-primary rounded-3 fw-bold py-3 px-6 w-50"
            @click="cancel(roomInfo._id)"
          >
            確定取消
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- H5 -->
  <div
    class="offcanvas offcanvas-bottom rounded-top-3"
    tabindex="-1"
    ref="cancelOffcanvas"
    aria-labelledby="offcanvasTopLabel"
  >
    <div class="offcanvas-header border-bottom">
      <small class="offcanvas-title fw-bold" id="offcanvasTopLabel">取消預訂</small>
      <span class="material-symbols-outlined" @click="offcanvas.hide()"> close </span>
    </div>
    <div class="offcanvas-body py-7 d-flex align-items-center justify-content-center border-bottom">
      <small class="fw-bold">確定要取消此房型的預訂嗎？</small>
    </div>
    <div class="offcanvas-footer d-flex p-2_5 gap-3">
      <button
        type="button"
        class="btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50"
        @click="offcanvas.hide()"
      >
        關閉視窗
      </button>
      <button
        type="button"
        class="btn btn-primary rounded-3 fw-bold py-3 px-6 w-50"
        @click="cancel(roomInfo._id)"
      >
        確定取消
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import RoomService from '../Common/RoomService.vue'
import type { orderData } from '../../interface/order'
import { Modal, Offcanvas } from 'bootstrap'
import ordersStore from '../../stores/orders'
import { mapActions } from 'pinia'
import mixin from '../../mixin/globalMix'
import type { PropType } from 'vue'

export default {
  name: 'NextRoom',
  props: {
    roomInfo: {
      type: Object as PropType<orderData>,
      required: true,
      default: () => ({})
    }
  },
  mixins: [mixin],
  data() {
    return {
      modal: {
        show() {},
        hide() {}
      },
      offcanvas: {
        show() {},
        hide() {}
      }
    }
  },
  components: {
    RoomService
  },
  mounted() {
    this.modal = new Modal(this.$refs.cancelModal as string|Element)
    this.offcanvas = new Offcanvas(this.$refs.cancelOffcanvas as string|Element)
  },
  methods: {
    ...mapActions(ordersStore, ['deleteOrder', 'getOrders']),
    getDiff(checkIn: string, checkOut: string): number {
      return (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 1000 / 60 / 60 / 24
    },
    getPrice(order: orderData): string {
      const days = this.getDiff(order.checkInDate, order.checkOutDate)
      const money = days * order.roomId.price
      return this.moneyFormat(money)
    },
    closeMode() {},
    async cancel(id: string) {
      await this.deleteOrder(id)
      this.modal.hide()
      this.offcanvas.hide()
      this.getOrders()
    }
  }
}
</script>
<style lang="scss" scoped>
.nextRoomImg {
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  height: 150px;
  @include lg {
    height: 240px;
  }
}
.modal {
  backdrop-filter: blur(10px);
}
.offcanvas {
  --bs-offcanvas-height: auto;
}
</style>
