import Vue from 'vue'
import Router from 'vue-router'
import ApplicationPage from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: ApplicationPage
    }
  ]
})
