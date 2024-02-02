import { defineStore } from 'pinia'
import fetchAPI from '../mixin/fetchAPI'
import Swal from 'sweetalert2'

const orderStore = defineStore('orderStore', {
  state() {
    return {
      orderList: []
    }
  },
  actions: {
    async getOrders():Promise<void> {
      const res = await fetchAPI('/api/v1/orders', 'GET')
      this.orderList = res.result
    },
    async deleteOrder(id: string):Promise<void> {
        const res: any = await fetchAPI(`/api/v1/admin/orders/65b1138e11f699788b5bc832`, 'DELETE')
        if (res.status) {
          Swal.fire('已成功取消')
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message
          })
        }
    }
  }
})

export default orderStore