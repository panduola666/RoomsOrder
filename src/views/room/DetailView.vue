<template>
  <div class=" bg-primary-10">
    <div class="banner d-none d-md-flex">
      <div class="left">
        <img src="@/assets/image/desktop/Room2-1.png" alt="">
      </div>
      <div class="right">
        <div>
          <img src="@/assets/image/desktop/Room2-2.png" alt="">
        </div>
        <div>
          <img src="@/assets/image/desktop/Room2-3.png" alt="">
        </div>
        <div>
          <img src="@/assets/image/desktop/Room2-4.png" alt="">
        </div>
        <div class="position-relative">
          <img src="@/assets/image/desktop/Room2-5.png" alt="">
          <button type="button" class="btn btn-outline-primary watch-more bg-white">
            看更多
          </button>
        </div>
      </div>
    </div>
    <main class="rooms-detail container">
      <div class="left">
        <div>
          <h2 class="mb-4 fs-1 fw-bold">尊爵雙人房</h2>
          <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
        </div>
        <div>
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">房型基本資訊</h5>
          </div>
          <div class="d-flex gap-3">
            <div class="white-box box-97px p-3">
              <img src="@/assets/image/icon/ic_Size.svg" alt="">
              <p class="mb-0 mt-2">24坪</p>
            </div>
            <div class="white-box box-97px p-3">
              <img src="@/assets/image/icon/ic_Bed.svg" alt="">
              <p class="mb-0 mt-2">1 張大床</p>
            </div>
            <div class="white-box box-97px p-3">
              <img src="@/assets/image/icon/ic_Person.svg" alt="">
              <p class="mb-0 mt-2">2-4 人</p>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">房間格局</h5>
          </div>
          <div class="d-flex gap-7 white-box w-100 p-5">
            <RoomService
              :service="[{ title: '市景', isProvide: true }, { title: '獨立衛浴', isProvide: true }, { title: '客廳', isProvide: true }, { title: '書房', isProvide: true }, { title: '樓層電梯', isProvide: true }]" />
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">房內設備</h5>
          </div>
          <div class="d-flex gap-1 white-box w-100 p-5 flex-column">
            <RoomService
              :service="[{ title: '平面電視', isProvide: true }, { title: '吹風機', isProvide: true }, { title: '冰箱', isProvide: true }, { title: '熱水壺', isProvide: true }, { title: '檯燈', isProvide: true }, { title: '衣櫃', isProvide: true }, { title: '除濕機', isProvide: true }, { title: '浴缸', isProvide: false }]" />
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">備品提供</h5>
          </div>
          <div class="d-flex gap-1 white-box w-100 p-5 flex-column">
            <RoomService
              :service="[{ title: '衛生紙', isProvide: true }, { title: '拖鞋', isProvide: true }, { title: '沐浴用品', isProvide: true }, { title: '清潔用品', isProvide: true }, { title: '刮鬍刀', isProvide: true }, { title: '吊衣架', isProvide: true }, { title: '浴巾', isProvide: true }, { title: '刷牙用品', isProvide: false }]" />
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">訂房須知</h5>
          </div>
          <ol class="list">
            <li>入住時間為下午3點，退房時間為上午12點。</li>
            <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
            <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
            <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
            <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
            <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
            <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
            <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
            <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
            <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
          </ol>
        </div>
      </div>
      <div class="right">
        <div class="card  gap-7  d-flex flex-column">
          <h5 class=" fw-bold border-bottom border-neutral-40 pb-3">預訂房型</h5>
          <div>
            <h2 class=" fw-bold text-neutral-80">尊爵雙人房</h2>
            <p class=" text-neutral-80">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
          </div>
          <div>
            <div class="d-flex gap-2 mb-3">
              <div class="check-date-box">
                <p class="mb-0 fs-tiny">入住</p>
                <p class="mb-0">
                  2024/02/04
                </p>
              </div>
              <div class="check-date-box">
                <p class="mb-0 fs-tiny">退房</p>
                <p class="mb-0">
                  2024/02/05
                </p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-bold mb-0">
                人數
              </p>
              <div class="d-flex align-items-center justify-content-center gap-3">
                <button type="button" class="btn border-0 rounded-circle">
                  <img src="@/assets/icons/icon_btn_neg.svg" alt="">
                </button>
                <h6 class=" fw-bold">
                  2
                </h6>
                <button type="button" class="btn border-0 rounded-circle">
                  <img src="@/assets/icons/icon_btn_pos.svg" alt="">
                </button>

              </div>
            </div>
          </div>
          <h5 class="text-primary fw-bold">NT$ 10,000</h5>
          <button type="button" class="btn btn-primary w-100 px-6 py-3 fw-bold">
            立即預訂
          </button>
        </div>
        <VDatePicker v-model.range="range" mode="date" :columns="columns" :expanded="expanded" :rows="rows"
          :masks="{ title: 'YYYY 年 MM 月' }" timezone="UTC" />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import RoomService from '@/components/Common/RoomService.vue'
import { ref } from 'vue'
import { useScreens } from 'vue-screen-utils'

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' })
const columns = mapCurrent({ lg: 2 }, 1)
const rows = mapCurrent({ lg: 1 }, 2)

const toDay = new Date()
const range = ref({
  start: toDay,
  end: toDay.getDate() + 1,
});
const expanded = mapCurrent({ lg: false }, true)

</script>
<style lang="scss" scoped>
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

.rooms-detail {
  margin-top: 120px;
  margin-bottom: 120px;
  display: flex;
  gap: 72px;

  .left {
    flex: 1 1 746px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  .right {
    flex: 1 1 478px;
    position: relative;

    .card {
      background-color: white;
      border-radius: 20px;
      padding: 40px;
      position: sticky;
      top: 160px;
    }
  }

  .color-block {
    display: block;
    width: 4px;
    height: 24px;
    background-color: #BF9D7D;
    margin-right: 12px;
    border-radius: 10px;
  }

  .white-box {
    background-color: white;
    border-radius: 8px;
  }

  .w-24px {
    width: 24px;
  }

  .list {
    list-style-type: decimal;
  }
}

.list-style {
  --bs-columns: 2;

  @include media-breakpoint-up(sm) {
    --bs-columns: 3;
  }

  @include media-breakpoint-up(md) {
    --bs-columns: 5
  }
}

.check-date-box {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  flex-grow: 1;
}

.box-97px {
  width: 97px;
  height: 97px;
}</style>