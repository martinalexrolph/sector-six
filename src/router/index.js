import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:gameId',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Game
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
