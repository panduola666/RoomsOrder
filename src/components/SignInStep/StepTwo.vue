<template>
  <form class="needs-validation mb-3" @submit.prevent="singup">
    <div class="mb-3">
      <label for="name" class="form-label">姓名</label>
      <input
        type="text"
        class="form-control p-3"
        id="name"
        aria-describedby="userName"
        placeholder="請輸入姓名"
        required
        v-model="userInfo.name"
      />
    </div>
    <div class="mb-3">
      <label for="phoneNum" class="form-label">手機號碼</label>
      <input
        type="tel"
        class="form-control p-3"
        id="phoneNum"
        aria-describedby="password"
        autocomplete="on"
        placeholder="請輸入手機號碼"
        required
        v-tel
        v-model="userInfo.phone"
      />
    </div>
    <div class="mb-3">
      <label for="year" class="form-label">生日</label>
      <div class="d-flex gap-2">
        <select id="year" class="form-select p-3" v-model="birthYear">
          <option v-for="i in 100" :key="i" :value="new Date().getFullYear() - (100 - i)">
            {{ new Date().getFullYear() - (100 - i) }} 年
          </option>
        </select>
        <select id="month" class="form-select p-3" v-model="birthMonth">
          <option v-for="i in 12" :key="i" :value="i">{{ i }} 月</option>
        </select>
        <select id="day" class="form-select p-3" v-model="birthDay">
          <option v-for="i in daysRange" :key="i" :value="i">{{ i }} 日</option>
        </select>
      </div>
    </div>
    <div class="mb-3 d-flex flex-column gap-3">
      <label class="form-label">地址</label>
      <div class="d-flex gap-2">
        <select id="address" class="form-select p-3" v-model="cityName">
          <option v-for="city in CityCountyData" :key="city.CityName" :value="city.CityName">
            {{ city.CityName }}
          </option>
        </select>
        <select class="form-select p-3" v-model.number="userInfo.address.zipcode">
          <option v-for="area in areaList" :key="area.ZipCode" :value="area.ZipCode">
            {{ area.AreaName }}
          </option>
        </select>
      </div>
      <input
        type="text"
        class="form-control p-3"
        id="address"
        aria-describedby="address"
        autocomplete="on"
        placeholder="請輸入詳細地址"
        required
        v-model="userInfo.address.detail"
      />
    </div>
    <div class="form-check mb-7">
      <input class="form-check-input" type="checkbox" value="" id="finish" required />
      <label class="form-check-label" for="finish">我已閱讀並同意本網站個資使用規範 </label>
    </div>
    <input type="submit" class="btn btn-primary w-100 py-3 px-6" value="立即註冊" />
  </form>
</template>
<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from 'vue'
import type {AccountData,UserInfoData,SignInBody,CityCounty,AreaListData} from '../../interface/signup'
// @ts-ignore
import CityCountyData from '/public/CityCountyData'
import fetchAPI from '../../mixin/fetchAPI'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const props = defineProps<{ account: AccountData }>()
const router = useRouter()

// 日期區間設定
const birthYear = ref(new Date().getFullYear() - 25)
const birthMonth = ref(1)
const birthDay = ref(1)
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
onMounted(() => {
  cityName.value = CityCountyData[0].CityName
  setAreaList()
})
watch(
  () => cityName.value,
  () => setAreaList()
)
const setAreaList = () => {
  const currCity = CityCountyData.find((item: CityCounty) => item.CityName === cityName.value)
  areaList.value = currCity.AreaList
  userInfo.value.address.zipcode = Number(currCity.AreaList[0].ZipCode)
}

const userInfo = ref<UserInfoData>({
  name: '',
  phone: '',
  birthday: '',
  address: {
    zipcode: null,
    detail: ''
  }
})
async function singup() {
  if(userInfo.value.name.length < 2) {
    Swal.fire({
      icon: 'error',
      title: '姓名至少兩個字'
    })
    return
  }
  userInfo.value.birthday = `${birthYear.value}/${birthMonth.value}/${birthDay.value}`
  const data: SignInBody = {
    ...props.account,
    ...userInfo.value
  }

  const res = await fetchAPI('/api/v1/user/signup', 'POST', data)
  const swal = await Swal.fire({
    icon: res.status ? 'success' : 'error',
    title: res.status ? '註冊成功' : res.message
  })
  if (swal.isConfirmed || swal.isDismissed) {
    router.push('/login')
  }
}
</script>
