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
                {{ _name }}
              </span>
              <button
                type="button"
                class="p-0 border-0 text-primary"
                @click="router.push(`/rooms/${roomId}`)"
              >
                編輯
              </button>
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
              <button
                type="button"
                class="p-0 border-0 text-primary"
                @click="router.push(`/rooms/${roomId}`)"
              >
                編輯
              </button>
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
              <button
                type="button"
                class="p-0 border-0 text-primary"
                @click="router.push(`/rooms/${roomId}`)"
              >
                編輯
              </button>
            </div>

            <br />
            <hr />

            <div class="py-1 d-flex justify-content-between">
              <h3>訂房人資訊</h3>
              <span class="text-primary cursor-pointer"
                ><a class="link-underline-primary cursor-pointer" @click="autoCompleteMemberData"
                  >套用會員資料</a
                ></span
              >
            </div>
            <form class="py-5">
              <label class="" for="name">姓名</label>
              <input
                v-model="data.name"
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
                v-model="data.phone"
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
                v-model="data.email"
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
                <select id="address" class="form-select p-3 rounded-3" v-model="cityName">
                  <option
                    v-for="city in CityCountyData"
                    :key="city.CityName"
                    :value="city.CityName"
                  >
                    {{ city.CityName }}
                  </option>
                </select>
                <select class="form-select p-3 rounded-3" v-model="data.address.zipcode">
                  <option v-for="area in areaList" :key="area.ZipCode" :value="area.ZipCode">
                    {{ area.AreaName }}
                  </option>
                </select>
              </div>
              <div class="py-3" />

              <input
                v-model="data.address.detail"
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
                <div>{{ _areaInfo }}</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomBed.svg"
                  alt="Room Image"
                />
                <div>{{ _bedInfo }}</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomPeople.svg"
                  alt="Room Image"
                />
                <div>{{ _maxPeople }}</div>
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
              <RoomService
                :service="[
                  { title: '市景', isProvide: true },
                  { title: '獨立衛浴', isProvide: true },
                  { title: '客廳', isProvide: true },
                  { title: '書房', isProvide: true },
                  { title: '樓層電梯', isProvide: true }
                ]"
              />
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
              <RoomService :service="_facilityInfo" />
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
              <RoomService :service="_amenityInfo" />
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
              <span> NT$ {{ _price }} </span>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary w-100" @click="createOrder">確認訂房</button>
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

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

import RoomService, { type Service } from '../../components/Common/RoomService.vue'
import { ref, watch, onMounted } from 'vue'
import fetchAPI from '../../mixin/fetchAPI'
import Swal from 'sweetalert2'
// @ts-ignore
import CityCountyData from '../../assets/json/CityCountyData'

import type { CityCounty, AreaListData } from '../../interface/signup'

const editInfo = ref<boolean>(false)

const userData = JSON.parse(localStorage.getItem('user') as string)
const data = ref({
  userId: userData._id,
  name: userData.name,
  phone: userData.phone,
  birthday: new Date(userData.birthday).toLocaleDateString(),
  address: {
    zipcode: userData.address.zipcode,
    detail: userData.address.detail
  }
})

const userAddress = ref<string>('')

// 地址轉換
const cityData = ref<CityCounty>({
  CityName: '',
  CityEngName: '',
  AreaList: []
})
onMounted(() => {
  CityCountyData.forEach((city: CityCounty) => {
    const currCity = city.AreaList.find((area) => Number(area.ZipCode) === userData.address.zipcode)
    if (currCity) {
      cityName.value = city.CityName
      cityData.value = city
    }
  })
  setAreaList()
  fullAddress()
  LoadRoomPriceDetailInfoRoomId()
})
function fullAddress() {
  const address = data.value.address
  userAddress.value =
    cityData.value.CityName +
    cityData.value.AreaList.find(
      (area: { ZipCode: string }) => Number(area.ZipCode) === address.zipcode
    )!.AreaName +
    address.detail
}

// 日期區間設定
const birthArr: string[] = data.value.birthday.split('/')

const birthYear = ref(Number(birthArr[0]))
const birthMonth = ref(Number(birthArr[1]))
const birthDay = ref(Number(birthArr[2]))
const daysRange = ref<number>(31)
const setDaysRange = () => {
  if (birthMonth.value === 2) {
    daysRange.value = birthYear.value % 4 ? 28 : 29
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(birthMonth.value)) {
    daysRange.value = 31
  } else {
    daysRange.value = 30
  }
}
function autoCompleteMemberData() {}
const roomId = ref<string>('')
const _areaInfo = ref<string>('')
const _bedInfo = ref<string>('')
const _facilityInfo = ref<Array<Service>>([]) //房內設備
const _amenityInfo = ref<Array<Service>>([]) //備品提供
const _maxPeople = ref<string>('')

const _name = ref<string>('')
const _price = ref<string>('')

async function LoadRoomPriceDetailInfoRoomId() {
  const roomID = '65bbdc5e8f690417bdd17ae3' //localStorage.getItem('roomId')

  const res = await fetchAPI(`/api/v1/rooms/${roomID}`, 'GET', '')
  console.log(res)
  const { status } = res
  if (status) {
    const { areaInfo, bedInfo, amenityInfo, facilityInfo, maxPeople, name, price } = res.result
    _areaInfo.value = areaInfo
    _bedInfo.value = bedInfo
    _maxPeople.value = `1-${maxPeople}人`
    _name.value = name
    _price.value = price
    _facilityInfo.value = facilityInfo
    _amenityInfo.value = amenityInfo
  }
}
watch(() => birthYear.value, setDaysRange)
watch(() => birthMonth.value, setDaysRange)

// 地址設定
const areaList = ref<AreaListData[]>([])
const cityName = ref<string>('')
const setAreaList = () => {
  const currCity = CityCountyData.find((item: CityCounty) => item.CityName === cityName.value)
  areaList.value = currCity.AreaList
}
</script>
