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

      const mockData = roomTypeData.result
      const mockDataMap = new Map(mockData.map(item => [item._id, item]))
      // 合併 roomList 和 mockData 都有的資料
      let mergedData = res.result.map(item => {
        const target = mockDataMap.get(item._id)
        return target ? Object.assign({}, item ,target) : item
      });

      // 合併只有在 mockData 才有的資料
      mockData.forEach(mockItem => {
        if (!mergedData.find(item => item._id === mockItem._id)) {
          mergedData.push(mockItem)
        }
      });

      // 删除重複 name 的房間
      const roomSet = new Set()
      mergedData = mergedData.filter(item => {
        const isDuplicate = roomSet.has(item.name)
        roomSet.add(item.name)
        return !isDuplicate
      })

      this.roomList = mergedData
      this.roomStatus = res.status
    },
    async getRoomInfo(id: string): Promise<void> {
      const res: {result: Room, status: boolean} = await fetchAPI(`/api/v1/rooms/${id}`, 'GET')
      this.roomInfo = res.result
    },
  }
})
