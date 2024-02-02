import { defineStore } from 'pinia'
import fetchAPI from '../mixin/fetchAPI'

export const newsStore = defineStore('newsStore', {
  store() {
    return {
      newsList: [],
      newsInfo: {},
    }
  },
  actions: {
    async getNewsList(): Promise<void> {
      const res: any = await fetchAPI('/api/v1/home/news', 'GET')
      this.newsList = res.result
    },
    async getNewsInfo(id: string): Promise<void> {
      const res: {} = await fetchAPI(`/api/v1/home/news/${id}`, 'GET')
      this.newsInfo = res
    },
  }

})
