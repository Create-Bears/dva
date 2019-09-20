import Login from '../view/login'
import VisualDisplay from '../view/visualDisplay'
import AllList from '../view/allList'

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
    path: '/',
    redirect: '/login'
  }
]
