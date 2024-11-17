import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import NewsView from '@/views/NewsView.vue'
import StoryView from '@/views/StoryView.vue'

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
      component: HomeView,
    },
    {
      path: '/actualites',
      name: 'Actus',
      component: NewsView,
    },
    {
      path: '/actualites/:slug',
      component: StoryView,
    },
    {
      path: '/organisme-de-formation',
      name: 'Formations',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactUsView,
    },
    {
      path: '/rse',
      name: 'RSE',
      component: HomeView,
    },
  ],
})

export default router
