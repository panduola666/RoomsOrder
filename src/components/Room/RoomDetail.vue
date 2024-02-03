<template>
        <div>
          <h2 class="mb-4 fs-1 fw-bold">{{ roomInfo.name }}</h2>
          <p>{{ roomInfo.description }}</p>
        </div>
        <div>
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">房型基本資訊</h5>
          </div>
          <div class="d-flex gap-3">
            <div class="white-box box-97px p-3">
              <img src="@/assets/image/icon/ic_Size.svg" alt="">
              <p class="mb-0 mt-2">{{ roomInfo.areaInfo }}</p>
            </div>
            <div class="white-box box-97px p-3">
              <img src="@/assets/image/icon/ic_Bed.svg" alt="">
              <p class="mb-0 mt-2">{{ roomInfo.bedInfo }}</p>
            </div>
            <div class="white-box box-97px p-3">
              <img src="@/assets/image/icon/ic_Person.svg" alt="">
              <p class="mb-0 mt-2">1-{{ roomInfo.maxPeople }} 人</p>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">房間格局</h5>
          </div>
          <div class="d-flex gap-7 white-box w-100 p-5">
            <RoomService :service="[{ title: '市景', isProvide: true }, { title: '獨立衛浴', isProvide: true }, { title: '客廳', isProvide: true }, { title: '書房', isProvide: true }, { title: '樓層電梯', isProvide: true }]" /> 
          </div>
        </div>
        <div v-if="roomInfo.facilityInfo">
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">房內設備</h5>
          </div>
          <div class="d-flex gap-1 white-box w-100 p-5 flex-column">
            <RoomService :service="roomInfo.facilityInfo" />
          </div>
        </div>
        <div v-if="roomInfo.amenityInfo">
          <div class="d-flex align-items-center mb-5">
            <span class="color-block"></span>
            <h5 class="fw-bold mb-0">備品提供</h5>
          </div>
          <div class="d-flex gap-1 white-box w-100 p-5 flex-column">
            <RoomService :service="roomInfo.amenityInfo" />
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
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import RoomService from '@/components/Common/RoomService.vue'
import type { Room } from '@/interface/room'
defineProps({
  roomInfo: {
    type: Object as PropType<Room>,
    required: true
  }
})
</script>
<style>
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
  .box-97px {
  width: 97px;
  height: 97px;
}
}
</style>