import Vue from 'vue'
import Router from 'vue-router'
import Todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: Todolist
    }
  ]
})
