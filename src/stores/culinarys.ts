import { defineStore } from 'pinia'
import fetchAPI from '../mixin/fetchAPI'

export const culinaryStore = defineStore('culinaryStore', {
  state() {
    return {
      culinaryList: [],
      culinaryInfo: {},
    }
  },
  actions: {
    async getCulinaryList(): Promise<void> {
      const res: any = await fetchAPI('/api/v1/culinary', 'GET')
      this.culinaryList = res.result
    },
    async getCulinaryInfo(id: string): Promise<void> {
      const res: {} = await fetchAPI(`/api/v1/rooms/${id}`, 'GET')
      this.culinaryInfo = res
    }
  }
})
