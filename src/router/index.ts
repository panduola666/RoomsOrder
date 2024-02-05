import { createRouter, createWebHashHistory } from 'vue-router'
import globalMix from '../mixin/globalMix'
const { checkAuth } = globalMix.methods

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        hiddenHeader: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import('../views/room/RoomsView.vue'),
      meta: {
        hiddenHeader: true
      }
    },
    {
      // path: '/room/:id',
      path: '/roomdetail/:id',
      name: 'roomDetail',
      component: () => import('../views/room/DetailView.vue')
    },
    {
      path: '/roomsReserved/:id/:startdate/:days/:people',
      name: 'roomsReserved',
      beforeEnter: async () => checkAuth(),
      component: () => import('../views/room/RoomReserved.vue')
    },

    {
      path: '/BookingResult',
      name: 'BookingResult',
      component: () => import('../views/room/BookingResult.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/UserIndex.vue'),
      beforeEnter: async () => checkAuth(),
      children: [
        {
          path: '',
          name: 'userInfo',
          component: () => import('../views/user/UserView.vue')
        },
        {
          path: 'myOrder',
          name: 'myOrder',
          component: () => import('../views/user/MyOrder.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: '/login'
    }
  ]
})

export default router
