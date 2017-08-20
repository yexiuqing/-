import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'   //首页
import Download from '@/components/Download'  
import Show from '@/components/Show'    //作品展示
import FileDetail from '@/components/FileDetail'
import Blog from '@/components/Blog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/download",
      component:Download
    },
    {
      path:"/show",
      component:Show
    },
    {
      path:"/file_detail",
      component:FileDetail
    },
    {
      path:"/blog",
      component:Blog
    }
  ]
})
