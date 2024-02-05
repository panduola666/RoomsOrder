<template>
  <main class="bg-primary-10">
    <div class="container">
      <div class="row">
        <div class="p-5 d-flex gap-3 align-item-center">
          <button
            type="button"
            class="p-0 border-0 text-primary"
            @click="$router.push(`/roomdetail/${form.roomId}`)"
          >
            <img class="rounded img-fluid" src="../../assets/svg/back.svg" alt="Room Image" />
          </button>
          <button
            type="button"
            class="p-0 border-0"
            @click="$router.push(`/roomdetail/${form.roomId}`)"
          >
            確認訂房資訊
          </button>
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
                {{ roomInfo.name }}
              </span>
              <button
                type="button"
                class="p-0 border-0 text-primary"
                @click="$router.push(`/rooms`)"
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
                入住：{{ getDate(form.checkInDate) }}
                <br />
                退房：{{ getDate(form.checkOutDate) }}
              </span>
              <button
                type="button"
                class="p-0 border-0 text-primary"
                @click="$router.push(`/roomdetail/${form.roomId}?start=${new Date(form.checkInDate).getTime()}&end=${new Date(form.checkOutDate).getTime()}&people=${form.peopleNum}`)"
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
                <input v-if="editPeoPle" type="number" v-model.number="form.peopleNum">
                <span v-else>{{ form.peopleNum }} 人</span>
              </span>
              <button
                type="button"
                class="p-0 border-0 text-primary"
                @click="editPeoPle = !editPeoPle"
              >
                編輯
              </button>
            </div>

            <br />
            <hr />

            <div class="py-1 d-flex justify-content-between">
              <h3>訂房人資訊</h3>

              <button
                type="button"
                class="p-0 border-0 text-primary"
                @click="setUserData"
              >
                套用會員資料
              </button>
            </div>
            <form class="py-5">
              <label class="" for="name">姓名</label>
              <input
                v-model="form.userInfo.name"
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
                v-model="form.userInfo.phone"
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
                v-model="form.userInfo.email"
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
                <select id="address" class="form-select p-3 rounded-3" v-model="cityIndex">
                  <option
                    v-for="(city, index) in CityCountyData"
                    :key="city.CityName"
                    :value="index"
                  >
                    {{ city.CityName }}
                  </option>
                </select>
                <select class="form-select p-3 rounded-3" v-model="form.userInfo.address.zipcode">
                  <option v-for="area in CityCountyData[cityIndex].AreaList" :key="area.ZipCode" :value="Number(area.ZipCode)">
                    {{ area.AreaName }}
                  </option>
                </select>
              </div>
              <div class="py-3" />

              <input
                v-model="form.userInfo.address.detail"
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
                <div>{{ roomInfo.areaInfo }}</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomBed.svg"
                  alt="Room Image"
                />
                <div>{{ roomInfo.bedInfo }}</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomPeople.svg"
                  alt="Room Image"
                />
                <div>{{ roomInfo.maxPeople }} 人</div>
              </span>
            </div>
            <div class="py-3" />

            <template v-if="roomInfo.layoutInfo">
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
                 <!-- @vue-skip -->
                <RoomService :service="roomInfo.layoutInfo" />
              </div>
              <div class="py-3" />
            </template>

            <template v-if="roomInfo.facilityInfo">
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
                 <!-- @vue-skip -->
                <RoomService :service="roomInfo.facilityInfo" />
              </div>
              <div class="py-3" />
            </template>

            <template v-if="roomInfo.amenityInfo">
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
                 <!-- @vue-skip -->
                <RoomService :service="roomInfo.amenityInfo" />
              </div>
            </template>
          </div>
          <div class="p-5 col-md-5 rounded bg-white h-25 text-black">
            <div class="">
              <img class="rounded img-fluid" :src="roomInfo.imageUrl" />
            </div>
            <div class="py-3">
              <h3 class="fw-bold">價格詳情</h3>
            </div>
            <div class="py-1 d-flex justify-content-between">
              <span> NT$ {{ roomInfo.price }} X {{ routeParams.days }} 晚 </span>
              <span> NT$ {{ roomInfo.price * Number(routeParams.days) }} </span>
            </div>

            <div class="py-2 d-flex justify-content-between">
              <span> 住宿折扣 </span>
              <span> -NT$ 0 </span>
            </div>
            <div class="py-2 fw-bold d-flex justify-content-between">
              <span> 總價 </span>
              <span> NT$ {{ roomInfo.price * Number(routeParams.days) }} </span>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary w-100" @click="createOrder">確認訂房</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add this after your main template -->
     <!-- <div
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
          </div>
        </div>
      </div>
    </div> -->
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
import { mapActions, mapState } from 'pinia'
import { roomTypeStore } from '../../stores/room'
import orderStore from '../../stores/orders'
// @ts-ignore
import CityCountyData from '../../assets/json/cityCountyData.json'
import RoomService from '../../components/Common/RoomService.vue'
import Swal from 'sweetalert2'
import mixin from '../../mixin/globalMix'

export default {
  mixins: [mixin],
  data() {
    return {
      editPeoPle: false,
      cityIndex: 0,
      form: {
        roomId: '',
        checkInDate: 0,
        checkOutDate: 0,
        peopleNum: 0,
        userInfo: {
          address: {
            zipcode: 802,
            detail: '文山路23號'
          },
          name: '',
          phone: '',
          email: ''
        }
      },
      CityCountyData
    }
  },
  components: {
    RoomService
  },
  computed: {
    ...mapState(roomTypeStore, ['roomInfo']),
    routeParams() {
      return this.$route.params
    },
    user () {
      return JSON.parse(localStorage.getItem('user') as string)
    }
  },
  mounted() {
    const { id, days, people, startdate } = this.routeParams
    this.form.roomId = id as string
    this.form.checkInDate = Number(startdate)
    this.form.checkOutDate = Number(startdate) + Number(days) * 24 * 60 * 60 * 1000
    this.form.peopleNum = Number(people)
    this.getRoomInfo(id as string)
  },
  methods: {
    ...mapActions(roomTypeStore, ['getRoomInfo']),
    ...mapActions(orderStore, ['postOrder']),
    setUserData() {
      const { address, name, phone, email } = JSON.parse(JSON.stringify(this.user))
      this.form.userInfo.address = address
      this.form.userInfo.name = name
      this.form.userInfo.phone = phone
      this.form.userInfo.email = email
      this.setCity(address.zipcode)
    },
    setCity(zipcode: number) {
      this.CityCountyData.forEach((city: any, index: number) => {
        city.AreaList.forEach((area: any) => {
          if(Number(area.ZipCode) === Number((zipcode))) {
            this.cityIndex = index
          }
        })
      })
    },
    createOrder() {
      console.log(this.form)
      const options: any = { year: "numeric", month: "2-digit", day: "2-digit" };
      const {name, phone, email, address} = this.form.userInfo
      if(!name || !phone || !email || !address.zipcode || !address.detail) {
        Swal.fire({
          icon: 'error',
          title: '有資訊未填寫'
        })
        return
      }
      this.postOrder({
        ...this.form,
        checkInDate: new Date(this.form.checkInDate).toLocaleDateString('zh-TW', options),
        checkOutDate: new Date(this.form.checkOutDate).toLocaleDateString('zh-TW', options)
      })
      .then(() => {
        this.$router.push('/BookingResult')
      })
    }
  },
}
</script>

<!-- <script setup lang=ts>
import { useRoute, useRouter } from 'vue-router'
// import {} from 'sweetalert2'
import { type userInfo } from '@/interface/user'
const router = useRoute()
const _router = useRouter()

import RoomService from '../../components/Common/RoomService.vue'
import { type Service } from '@/interface/order'
import { ref, watch, onMounted } from 'vue'
import fetchAPI from '../../mixin/fetchAPI'
import dayjs from 'dayjs'
// @ts-ignore
import CityCountyData from '../../assets/json/CityCountyData'
import type { CityCounty, AreaListData } from '../../interface/signup'
const userData = JSON.parse(localStorage.getItem('user') as string)
console.log(userData)


const { id, startdate, days, people } = router.params
const numericDays = parseInt(days as string, 10) // 將 days 轉換為數字
const _startdate = dayjs(startdate as string).format('YYYY/MM/DD')

console.log(router.params)
// 將 startdate 轉換為日期物件
const startDateObject = dayjs(_startdate)

// 使用 dayjs 的 add 方法加上指定天數，得到結束日期
const endDateObject = startDateObject.add(numericDays, 'day') // 將字串轉換為數字

// 將結束日期格式化為 'YYYY/MM/DD'
const formattedEndDate = endDateObject.format('YYYY/MM/DD')

const data = ref<userInfo>({
  _id: userData?._id,
  name: '',
  phone: '',
  birthday: new Date(userData?.birthday).toLocaleDateString(),
  address: {
    zipcode: 100,
    detail: ''
  },
  email: '',
  createdAt: '',
  updatedAt: ''
})
function autoCompleteMemberData() {
  data.value.name = userData.name
  data.value.phone = userData.phone
  data.value.address.detail = userData.address.detail
  data.value.email = userData.email
  data.value.address.zipcode = userData.address.zipcode
}
const userAddress = ref<string>('')

// 地址轉換
const cityData = ref<CityCounty>({
  CityName: '',
  CityEngName: '',
  AreaList: []
})
onMounted(() => {
  // if (userData === null) {
  //   console.log('replace')
  //   _router.push('login')
  //   return
  // }
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

  // userAddress.value =
  //   cityData.value.CityName +
  //   cityData.value.AreaList.find(
  //     (area: { ZipCode: string }) => Number(area.ZipCode) === address.zipcode
  //   )!.AreaName +
  //   address.detail
}

const toRoomDetail = (id: string) => {
  _router.push({ name: 'roomDetail', params: { id } })
  // window.scrollTo({ top: 0, behavior: 'smooth' })
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

async function createOrder() {
  if (
    data.value.name.length === 0 ||
    data.value.phone.length === 0 ||
    data.value.email.length === 0 ||
    data.value.address.detail.length === 0
  ) {
    alert('有資訊未填寫')
    return
  }
  console.log(data.value.name)
  console.log(data.value.phone)
  console.log(data.value.address.detail)

  // const res = await fetchAPI(`/api/v1/user/check`, 'GET', '')
  // console.log(res)
  // const { status } = res
  // if(!status) {
  //   _router.push('/login')
  //   return
  // }
    const _sendData = {
      roomId: id,
      checkInDate: _startdate,
      checkOutDate: formattedEndDate,
      peopleNum: people,
      userInfo: {
        address: {
          zipcode: 802,
          detail: data.value.address.detail
        },
        name: data.value.name,
        phone: data.value.phone,
        email: data.value.email
      }
    }
    const postOrderRes = await fetchAPI(`/api/v1/orders`, 'POST', _sendData)
    // console.log(postOrderRes)
    if (postOrderRes.status) {
      _router.push(`/BookingResult`)
    }
}
const roomId = ref<string>('')
const _areaInfo = ref<string>('')
const _bedInfo = ref<string>('')
const _layoutInfo = ref<Array<Service>>([])
const _facilityInfo = ref<Array<Service>>([]) //房內設備
const _amenityInfo = ref<Array<Service>>([]) //備品提供
const _maxPeople = ref<string>('')
const _imageUrl = ref<string>('')

const _name = ref<string>('')
const _price = ref<string>('')

async function LoadRoomPriceDetailInfoRoomId() {
  const roomID = id //'65b1142f11f699788b5bc8ca' //localStorage.getItem('roomId')

  const res = await fetchAPI(`/api/v1/rooms/${roomID}`, 'GET', '')
  console.log(res)
  const { status } = res
  if (status) {
    const {
      areaInfo,
      bedInfo,
      amenityInfo,
      facilityInfo,
      layoutInfo,
      maxPeople,
      name,
      price,
      imageUrl
    } = res.result
    _areaInfo.value = areaInfo
    _layoutInfo.value = layoutInfo
    _bedInfo.value = bedInfo
    _maxPeople.value = `1-${maxPeople}人`
    _name.value = name
    _price.value = price
    _facilityInfo.value = facilityInfo
    _amenityInfo.value = amenityInfo
    _imageUrl.value = imageUrl
  } else {
    console.log(res)
  }
}
watch(() => birthYear.value, setDaysRange)
watch(() => birthMonth.value, setDaysRange)

// 地址設定
const areaList = ref<AreaListData[]>([])
const cityName = ref<string>('')
const setAreaList = () => {
  const currCity = CityCountyData.find((item: CityCounty) => item.CityName === cityName.value)

  console.log(currCity)
  areaList.value = currCity.AreaList
}
</script> -->
