import { createRouter, createWebHashHistory } from 'vue-router'
import globalMix from '../mixin/globalMix'
const { checkAuth } = globalMix.methods

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
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
      component: () => import('../views/room/RoomsView.vue')
    },
    {
      path: '/room/:id',
      name: 'roomDetail',
      component: () => import('../views/room/DetailView.vue')
    },
    {
      path: '/roomsReserved',
      name: 'roomsReserved',
      component: () => import('../views/room/RoomReserved.vue')
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
