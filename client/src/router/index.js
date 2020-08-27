import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/dashboard/Dashboard'
import Contractors from '@/components/contractors/Contractors'
import Test from '@/components/worksnaps/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/contractors',
      name: 'contractors',
      component: Contractors
    },
    {
      path: '/api/worksnaps',
      name: 'worksnaps',
      component: Test
    }
  ]
})
