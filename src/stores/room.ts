import { defineStore } from 'pinia'
import fetchAPI from '../mixin/fetchAPI'

export const roomTypeStore = defineStore('roomTypeStore', {
  state: () => ({
    roomList: [],
    roomInfo: {},
  }),
  actions: {
    async getRoomList(): Promise<void> {
      const res: {result: [], status: boolean} = await fetchAPI('/api/v1/rooms', 'GET')
      this.roomList = res.result
    },
    async getRoomInfo(id: string): Promise<void> {
      const res: {result: {}, status: boolean} = await fetchAPI(`/api/v1/rooms/${id}`, 'GET')
      this.roomInfo = res
    },
  }
})
