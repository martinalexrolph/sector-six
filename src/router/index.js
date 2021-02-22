import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Load from '../views/Load.vue'
import Complete from '../views/Complete.vue'
import New from '../views/New.vue'
import Learn from '../views/Learn.vue'
import AllQuestions from '../views/AllQuestions.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/load',
    name: 'Load',
    component: Load
  },
  {
    path: '/complete',
    name: 'Complete',
    component: Complete
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/all-questions',
    name: 'All Questions',
    component: AllQuestions
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
