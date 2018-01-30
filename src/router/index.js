import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Disclaimer from '@/components/Disclaimer'
import UserInfo from '@/components/UserInfo'
import Budget from '@/components/Budget'
import Home from '@/components/Home'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/budget',
      name: 'Budget',
      component: Budget
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
