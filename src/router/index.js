import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import register from '@/components/register'
import home from '@/components/home'
import homeMain from '@/components/homeMain'
import activePublic from '@/components/activePublic'
import activeManage from '@/components/activeManage'
import personal from '@/components/personal'
import order from '@/components/order'
import myJob1 from '@/components/myJob1'
import myJob2 from '@/components/myJob2'
import myJob3 from '@/components/myJob3'

Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/',
          name: 'homeMain',
          component: homeMain,
          children:[
            {
              path:'/',
              name:'activePublic',
              component:activePublic
            },
            {
              path:'/activePublic',
              name:'activePublic',
              component:activePublic
            },
            {
              path:'/activeManage',
              name:'activeManage',
              component:activeManage
            }
          ]
        },
        {
          path: '/homeMain',
          name: 'homeMain',
          component: homeMain,
          children:[
            {
              path:'/',
              name:'activePublic',
              component:activePublic
            },
            {
              path:'/activePublic',
              name:'activePublic',
              component:activePublic
            },{
              path:'/activeManage',
              name:'activeManage',
              component:activeManage
            }
          ]
        },
        {
          path: '/personal',
          name: 'personal',
          component: personal
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/myJob1',
          name: 'myJob1',
          component: myJob1
        },
        {
          path: '/myJob2',
          name: 'myJob2',
          component: myJob2
        },
        {
          path: '/myJob3',
          name: 'myJob3',
          component: myJob3
        }
      ]
    }
  ]
})
