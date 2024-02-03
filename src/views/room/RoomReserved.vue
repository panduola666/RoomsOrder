<template>
  <main class="bg-primary-10">
    <div class="container">
      <div class="row">
        <div class="p-5 d-flex gap-3 align-item-center">
          <img class="rounded img-fluid" src="../../assets//svg/back.svg" alt="Room Image" />
          <span>確認訂房資訊</span>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h3>訂房資訊</h3>

            <div class="d-flex justify-content-between">
              <span>
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/divline.svg"
                  alt="Room Image"
                />

                選擇房型

                <br />
                尊爵雙人房
              </span>
              <span class="underline"> <a class="link-underline-primary">編輯</a> </span>
            </div>

            <div class="d-flex py-5 justify-content-between">
              <span>
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/divline.svg"
                  alt="Room Image"
                />

                訂房日期

                <br />
                入住：12 月 4 日星期二
                <br />
                退房：12 月 6 日星期三
              </span>
              <span> <a class="link-underline-primary">編輯</a> </span>
            </div>

            <div class="d-flex justify-content-between">
              <span>
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/divline.svg"
                  alt="Room Image"
                />

                房客人數

                <br />
                2 人
              </span>
              <span> <a class="link-underline-primary">編輯</a> </span>
            </div>

            <br />
            <hr />

            <div class="py-1 d-flex justify-content-between">
              <h3>訂房人資訊</h3>
              <span class="text-primary"><a class="link-underline-primary">套用會員資料</a></span>
            </div>
            <form class="py-5">
              <label class="" for="name">姓名</label>
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入姓名"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div class="py-3" />

              <label for="name">手機號碼</label>
              <input
                id="name"
                v-tel
                type="text"
                class="form-control"
                placeholder="請輸入手機號碼"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div class="py-3" />

              <label for="name">電子信箱</label>
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入電子信箱"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div class="py-3" />

              <label for="name">地址</label>
              <div class="d-flex justify-content-between">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="py-3" />

              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入詳細地址"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </form>
            <br />
            <hr />
            <div class="py-3" />

            <h4>房間資訊</h4>
            <div class="py-2" />

            <div class="d-flex">
              <span>
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/divline.svg"
                  alt="Room Image"
                />
                房型基本資訊
              </span>
            </div>
            <div class="py-2" />

            <div class="d-flex justify-content-center gap-5">
              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomSize.svg"
                  alt="Room Image"
                />
                <div>24坪</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomBed.svg"
                  alt="Room Image"
                />
                <div>1 張大床</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomPeople.svg"
                  alt="Room Image"
                />
                <div>2-4 人</div>
              </span>
            </div>
            <div class="py-3" />

            <div class="d-flex">
              <span>
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/divline.svg"
                  alt="Room Image"
                />
                房間格局
              </span>
            </div>
            <div class="py-3" />

            <div class="bg-white rounded p-4 text-center">
              <RoomService :service="[{title: '市景', isProvide: true}, {title: '獨立衛浴', isProvide: true}, {title: '客廳', isProvide: true}, {title: '書房', isProvide: true}, {title: '樓層電梯', isProvide: true}]"/>
            </div>
            <div class="py-3" />

            <div class="d-flex">
              <span>
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/divline.svg"
                  alt="Room Image"
                />
                房內設備
              </span>
            </div>
            <div class="py-3" />

            <div class="bg-white rounded p-4 text-center">
              <RoomService :service="[{title: '平面電視', isProvide: true}, {title: '吹風機', isProvide: true}, {title: '冰箱', isProvide: true}, {title: '熱水壺', isProvide: true}, {title: '檯燈', isProvide: true}, {title: '衣櫃', isProvide: true}, {title: '除濕機', isProvide: true}, {title: '浴缸', isProvide: false}]"/>
            </div>
            <div class="py-3" />

            <div class="d-flex">
              <span>
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/divline.svg"
                  alt="Room Image"
                />
                備品提供
              </span>
            </div>
            <div class="py-3" />

            <div class="bg-white rounded p-4 text-center">
              <RoomService :service="[{title: '衛生紙', isProvide: true}, {title: '拖鞋', isProvide: true}, {title: '沐浴用品', isProvide: true}, {title: '清潔用品', isProvide: true}, {title: '刮鬍刀', isProvide: true}, {title: '吊衣架', isProvide: true}, {title: '浴巾', isProvide: true}, {title: '刷牙用品', isProvide: false}]"/>
            </div>
          </div>
          <div class="p-5 col-md-5 rounded bg-white h-25 text-black">
            <div class="">
              <img
                class="rounded img-fluid"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/room2-1.png?raw=true"
              />
            </div>
            <div class="py-3">
              <h3 class="fw-bold">價格詳情</h3>
            </div>
            <div class="py-1 d-flex justify-content-between">
              <span> NT$ 10,000 X 2 晚 </span>
              <span> NT$ 20,000 </span>
            </div>

            <div class="py-2 d-flex justify-content-between">
              <span> 住宿折扣 </span>
              <span> -NT$ 1,000 </span>
            </div>
            <div class="py-2 fw-bold d-flex justify-content-between">
              <span> 總價 </span>
              <span> NT$ 19,000 </span>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary w-100" @click="showConfirmationModal">確認訂房</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add this after your main template -->
    <div
      class="modal fade"
      id="confirmationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="confirmationModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmationModalLabel">Confirming Reservation</h5>
          </div>
          <div class="modal-body">
            <!-- Loading spinner and specific image go here -->
            <!-- <img src="../../" alt="Loading" /> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Assuming the following classes for your lists */
.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: blue;
}

.flex-item {
  flex-basis: calc(15% - 10px); /* 20% width with 10px spacing */
  margin-bottom: 10px; /* Adjust spacing as needed */
}
</style>

<script lang="ts">
import RoomService from '../../components/Common/RoomService.vue';
export default {
  data() {
    return {
      showModal: false
    }
  },
  components: {
    RoomService
  },
  methods: {
    showConfirmationModal() {
      this.showModal = true
    }
  }
}
</script>
