import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import JobDetail from '@/views/JobDetail'
import JobList from '@/components/JobList'
import ApplyForm from '@/components/ApplyForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobList
    },
    {
      path: '/jobs/:jobCategory/:jobId',
      name: 'JobDetail',
      component: JobDetail,
      props: true
    },
    {
      path: '/apply/:jobId',
      name: 'ApplyForm',
      component: ApplyForm,
      props: true
    }
  ]
})
