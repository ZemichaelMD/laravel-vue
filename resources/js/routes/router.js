import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: '',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../components/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('../components/views/dashboard/Dashboard'),
        },
      ],
    },
  ],
})
