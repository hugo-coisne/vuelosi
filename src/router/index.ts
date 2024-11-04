import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: HomeView,
    },
    {
      path: '/nous-rejoindre',
      name: 'Nous rejoindre',
      component: AboutView,
    },
    {
      path: '/actualites',
      name: 'Actus',
      component: HomeView,
    },
    {
      path: '/organisme-de-formation',
      name: 'Formations',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: HomeView,
    },
    {
      path: '/rse',
      name: 'RSE',
      component: HomeView,
    },
  ],
})

export default router
