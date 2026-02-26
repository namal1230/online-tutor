/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import Index from '@/pages/index.vue';
import Home from '@/pages/user/Home.vue';
import Dashboard from '@/pages/Dashboard.vue';
import Recordings from '@/pages/user/Recordings.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Dashboard,
      children:[
        {
          path:"",
          component:Home,

        },
        {
          path:"Recordings",
          component:Recordings,

        },
        {
          path:"Home",
          component:Home,

        },
      ]
    },
  ],
})

export default router
