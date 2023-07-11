import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayersView from '../views/PlayersView.vue'
import RandomTeamView from '../views/RandomTeamView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-players',
      name: 'add-players',
      component: PlayersView
    },
    {
      path: '/generate-team',
      name: 'generate-team',
      component: RandomTeamView
    },
    {
      path: '/:notFound',
      name: 'notFound',
      component: NotFoundView
    },
  ]
})

export default router
