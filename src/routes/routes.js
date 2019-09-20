import Login from '../view/login'
import Registry from '../view/registry'
import VisualDisplay from '../view/visualDisplay'
import Leader from '../view/leader'

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registry',
    component: Registry
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
