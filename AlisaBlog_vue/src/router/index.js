import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AboutMe from '@/components/AboutMe'
import Tel from '@/components/Tel'
import FileDetail from '@/components/FileDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/about_me",
      component:AboutMe
    },
    {
      path:"/tel",
      component:Tel
    },
    {
      path:"/file_detail/:id",
      component:FileDetail
    }
  ]
})
