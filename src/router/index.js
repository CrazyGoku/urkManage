import Vue from 'vue'
import Router from 'vue-router'
import _import from './_import'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashbord',
      component: _import('Dashbord/Dashbord')
    }
  ]
})
