import Vue from 'vue'
import Router from 'vue-router'

import helloCom from '../components/1-2.vue'
import dataOperate from '../components/2-1.vue'
import forOperate from '../components/2-2.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: helloCom
  },
   {
    path: '/2-1',
    component: dataOperate
  },  
   {
    path: '/2-2',
    component: forOperate
  }

]

export default new Router({
  routes
})