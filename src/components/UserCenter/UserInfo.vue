<template>
  <div>
    <h2 class="title">基本資料</h2>

    <div v-if="!editInfo">
        <p class="mb-2 text-neutral-80 fw-medium">姓名</p>
        <p class="mb-3 mb-lg-5 fw-bold">{{ data.name }}</p>
        <p class="mb-2 text-neutral-80 fw-medium">手機號碼</p>
        <p class="mb-3 mb-lg-5 fw-bold">{{ data.phone }}</p>
        <p class="mb-2 text-neutral-80 fw-medium">生日</p>
        <p class="mb-3 mb-lg-5 fw-bold">{{ birthYear }} 年 {{ birthMonth }} 月 {{ birthDay }} 日</p>
        <p class="mb-2 text-neutral-80 fw-medium">地址</p>
        <p class="mb-5 mb-lg-7 fw-bold">{{ userAddress }}</p>
        <input type="button" class="btn btn-outline-primary py-3 px-6 fw-bold" value="編輯" @click="editInfo = true">
    </div>
    <form v-else @submit.prevent="editUserInfo">
      <div class="mb-5">
        <label for="userName" class="form-label fw-bold">姓名</label>
        <input
          type="text"
          class="form-control p-3 rounded-3"
          id="userName"
          placeholder="請輸入姓名"
          v-model="data.name"
        />
      </div>
      <div class="mb-5">
        <label for="userName" class="form-label fw-bold">手機號碼</label>
        <input
          type="tel"
          class="form-control p-3 rounded-3"
          id="userName"
          placeholder="請輸入手機號碼"
          v-model="data.phone"
          v-tel
        />
      </div>
      <div class="mb-5">
        <label for="birth" class="form-label fw-bold">生日</label>
        <div class="d-flex gap-2">
          <select id="birth" class="form-select p-3 rounded-3" v-model="birthYear">
            <option v-for="i in 100" :key="i" :value="new Date().getFullYear() - (100 - i)">
            {{ new Date().getFullYear() - (100 - i) }} 年
          </option>
          </select>
          <select class="form-select p-3 rounded-3" v-model="birthMonth">
            <option v-for="i in 12" :key="i" :value="i">{{ i }} 月</option>
          </select>
          <select class="form-select p-3 rounded-3" v-model="birthDay">
            <option v-for="i in daysRange" :key="i" :value="i">{{ i }} 日</option>
          </select>
        </div>
      </div>
      <div class="mb-5 mb-lg-7">
        <label for="address" class="form-label fw-bold">地址</label>
        <div class="d-flex gap-2 mb-3">
          <select id="address" class="form-select p-3 rounded-3" v-model="cityName">
            <option v-for="city in CityCountyData" :key="city.CityName" :value="city.CityName">
            {{ city.CityName }}
          </option>
          </select>
          <select class="form-select p-3 rounded-3" v-model="data.address.zipcode">
            <option v-for="area in areaList" :key="area.ZipCode" :value="area.ZipCode">
            {{ area.AreaName }}
          </option>
          </select>
        </div>
        <input
          type="text"
          class="form-control p-3 rounded-3"
          placeholder="請輸入詳細地址"
          v-model="data.address.detail"
        />
      </div>
      <input type="submit" class="btn btn-primary py-3 px-6 rounded-3 w-100 w-lg-auto" value="儲存設定">
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import fetchAPI from '../../mixin/fetchAPI'
import Swal from 'sweetalert2'
// @ts-ignore
import CityCountyData from '/public/CityCountyData'
import type {CityCounty,AreaListData} from '../../interface/signup'

const editInfo = ref<boolean>(false)

const userData = JSON.parse(localStorage.getItem('user') as string)
const data = ref({
  userId: userData._id,
  name: userData.name,
  phone: userData.phone,
  birthday: new Date(userData.birthday).toLocaleDateString(),
  address: {
    zipcode: userData.address.zipcode,
    detail:  userData.address.detail
  }
})
const userAddress = ref<string>('')

// 修改個資
const newFetch = fetchAPI()
async function editUserInfo() {
  data.value.birthday = `${birthYear.value}/${birthMonth.value}/${birthDay.value}`
  const res = await newFetch._fetch('/api/v1/user/', 'PUT', data.value)

  Swal.fire({
    icon: res.status ? 'success' : 'error',
    title: res.status ? '個資修改成功' : res.message
  })
  if(res.status) {
    localStorage.setItem('user', JSON.stringify(res.result))
    editInfo.value = false
    const {address, birthday, name, phone} = res.result
    data.value.name = name
    data.value.phone = phone
    data.value.address = address
    data.value.birthday = new Date(birthday).toLocaleDateString()
    fullAddress()
  }
  
}



// 地址轉換
const cityData = ref<CityCounty>({
  CityName: '',
  CityEngName: '',
  AreaList: []
})
onMounted(() => {
  CityCountyData.forEach((city: CityCounty) => {
    const currCity = city.AreaList.find(area => Number(area.ZipCode) === userData.address.zipcode)
    if(currCity) {
      cityName.value = city.CityName
      cityData.value = city
    }
  })
  setAreaList()
  fullAddress()
})
function fullAddress() {
  const address = data.value.address
  userAddress.value = cityData.value.CityName + cityData.value.AreaList.find((area: {ZipCode: string}) => Number(area.ZipCode) === address.zipcode)!.AreaName + address.detail
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