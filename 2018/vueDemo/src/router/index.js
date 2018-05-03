import Vue from 'vue'
import Router from 'vue-router'

import helloCom from '../components/1-2.vue'
import dataOperate from '../components/2-1.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: helloCom
  },
   {
    path: '/2-1',
    component: dataOperate
  }

]

export default new Router({
  routes
})