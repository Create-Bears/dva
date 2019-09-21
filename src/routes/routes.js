import Login from '../view/login'
import VisualDisplay from '../view/visualDisplay'
import AllList from '../view/allList'
import Leader from '../view/leader'

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/allList',
    component: AllList
  },
  {
    path: '/visual',
    component: VisualDisplay
  },
  {
    path: '/leader',
    component: Leader
  },
  {
    path: '/',
    redirect: '/login'
  }
]
