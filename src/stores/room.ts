import { defineStore } from 'pinia'
import fetchAPI from '../mixin/fetchAPI'

export const roomTypeStore = defineStore('roomTypeStore', {
  state() {
    return {
      roomList: [],
      roomInfo: {},
    }
  },
  actions: {
    async getRoomList(): Promise {
      const res: [] = await fetchAPI('/api/v1/rooms', 'GET')
      this.roomList = res.result
    },
    async getRoomInfo(id: string): Promise {
      const res: {} = await fetchAPI(`/api/v1/rooms/${id}`, 'GET')
      this.roomInfo = res
    },
  }
})
