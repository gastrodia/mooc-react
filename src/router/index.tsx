import {createBrowserRouter} from 'react-router-dom'
import type {RouteObject} from 'react-router-dom'
import {lazyLoad} from './lazyLoad.tsx'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: lazyLoad(() => import('@/pages/login'))
  },
  {
    path: '/',
    element: lazyLoad(() => import('@/layout')),
    children: [
      {
        path: 'dashboard',
        element: lazyLoad(() => import('@/pages/dashboard'))
      }
    ]
  },
  {
    path: '/404',
    element: <div>404</div>
  }
]


const router = createBrowserRouter(routes, {
  basename: '/mooc-react'
})

export {
  router
}