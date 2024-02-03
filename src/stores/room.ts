import { defineStore } from 'pinia'
import fetchAPI from '../mixin/fetchAPI'
import type { Room } from '@/interface/room';
import roomTypeData from '@/assets/mockData/roomType.json';

export const roomTypeStore = defineStore('roomTypeStore', {
  state() {
    return {
      roomList: [] as Room[],
      roomInfo: {} as Room,
      roomStatus: true,
    }
  },
  actions: {
    async getRoomList(): Promise<void> {
      const res: {result: Room[], status: boolean} = await fetchAPI('/api/v1/rooms', 'GET')
      this.roomList = res.result.concat(roomTypeData.result)
      this.roomStatus = res.status
    },
    async getRoomInfo(id: string): Promise<void> {
      const res: {result: Room, status: boolean} = await fetchAPI(`/api/v1/rooms/${id}`, 'GET')
      this.roomInfo=res.result
    },
  }
})
