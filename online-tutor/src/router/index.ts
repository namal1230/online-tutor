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
import Courses from '@/pages/user/Courses.vue';
import CourseDetails from '@/pages/user/CourseDetails.vue';
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
         {
          path:"Courses",
          component:Courses,

        },
        {
          path:"course-details",
          component:CourseDetails,

        },
      ]
    },
  ],
})

export default router
