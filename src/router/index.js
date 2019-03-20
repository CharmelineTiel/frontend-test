import Vue from 'vue'
import Router from 'vue-router'
import ApplicationPage from '@/Pages/ApplicationPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ApplicationPage',
      component: ApplicationPage
    }
  ]
})
