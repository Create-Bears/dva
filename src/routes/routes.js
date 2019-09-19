import Login from '../view/login'
import Registry from '../view/registry'
import VisualDisplay from '../view/visualDisplay'

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
    path: '/',
    redirect: '/login'
  }
]
