import Login from '../view/login'
import Registry from '../view/registry'

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
    path: '/',
    redirect: '/login'
  }
]
