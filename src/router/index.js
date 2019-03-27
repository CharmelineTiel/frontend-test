import Vue from 'vue'
import Router from 'vue-router'
import JobDetail from '@/components/JobDetail'
import JobList from '@/components/JobList'
import ApplyForm from '@/components/ApplyForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobList
    },
    {
      path: '/jobs/:jobId',
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
