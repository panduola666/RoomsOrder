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
          useRouter().push('/login')
        }
        return
      }
    }
  }
}

export default mixin;