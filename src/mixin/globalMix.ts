import fetchAPI from './fetchAPI';
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const mixin = {
  data () {
    return {
      
    }
  },
  methods: {
    fetchAPI,
    async checkAuth () {
      const res = await fetchAPI('/api/v1/user/check')
      if (!res.status) {
        const swal = await Swal.fire({
          icon: 'error',
          title: res.message
        })
        if (swal.isConfirmed || swal.isDismissed) {
          localStorage.removeItem('token')
          useRouter().push('/')
        }
        return
      }
    },
    getDate(timer: string | number) {
      const weekStr = ['日', '一', '二', '三', '四', '五', '六']
      const date = new Date(timer)
      return `${date.getMonth() + 1} 月 ${date.getDate()} 日星期${weekStr[date.getDay()]}`
    },
    getHour(timer: string | number) {
      const date = new Date(timer)
      const hour = date.getHours().toString().padStart(2, '0')
      const min = date.getMinutes().toString().padStart(2, '0')

      return `${hour}:${min}`
    },
    moneyFormat(num: number) { // 千分位
      if (isNaN(num) || num === null || num === undefined) {
        return '';
      }
      const reg= new RegExp(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/, 'g')
      return num.toString().replace(reg, ',')
    }
  }
}

export default mixin;