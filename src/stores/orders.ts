import { defineStore } from 'pinia'
import fetchAPI from '../mixin/fetchAPI'
const orderStore = defineStore('orderStore', {
  state() {
      return{
       orderList: [] 
      }
  },
  actions: {
    async getOrders() {
      const res = await fetchAPI('/api/v1/orders', 'GET')
      this.orderList = res.result
    }
  }
})

export default orderStore