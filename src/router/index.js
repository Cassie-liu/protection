import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/LayOut'
import Home from '@/components/Home'
import Company from '@/components/Company'
import News from '@/components/News'
import Project from '@/components/Project'
import Case from '@/components/Case'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/index',
      component: LayOut,
      children: [
        {
          path: 'index',
          name: 'Home',
          component: Home
        },
        {
          path: 'company',
          name: 'Company',
          component: Company
        },
        {
          path: 'news',
          name: 'News',
          component: News
        },
        {
          path: 'project',
          name: 'Project',
          component: Project
        },
        {
          path: 'case',
          name: 'Case',
          component: Case
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        }
      ]
    }
  ]
})
