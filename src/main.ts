import './assets/scss/main.scss'
import fetchAPI from './mixin/fetchAPI.ts'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mixin(fetchAPI)

app.directive('tel', {
  mounted(el) {
    el.addEventListener('input', (el:any) => {
      if(el.target.tagName === 'INPUT') {
        el.target.value =  el.target.value.replace(/[^\d\s()+-]/g, '')
      }
    })
  }
})




app.mount('#app')
