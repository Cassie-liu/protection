import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/LayOut'
import Home from '@/components/Home'
import Company from '@/components/Company'
import News from '@/components/News'
import NewsDetail from '@/components/NewsDetail'
import Project from '@/components/Project'
import ProjectDetail from '@/components/ProjectDetail'
import Case from '@/components/Case'
import CaseDetail from '@/components/CaseDetail'
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
          path: 'news/:id',
          name: 'NewsDetail',
          component: NewsDetail
        },
        {
          path: 'project',
          name: 'Project',
          component: Project
        },
        {
          path: 'project/:id',
          name: 'ProjectDetail',
          component: ProjectDetail
        },
        {
          path: 'case',
          name: 'Case',
          component: Case
        },
        {
          path: 'case/:id',
          name: 'CaseDetail',
          component: CaseDetail
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
