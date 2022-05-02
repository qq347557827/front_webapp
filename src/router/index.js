import loadable from '@loadable/component'
import { Redirect } from 'react-router-dom'
import HomeSkeleton from '@/skeleton/homeSkeleton'
import store from '@/store'

const Home = loadable(() => import('@p/home'), {
  fallback: <HomeSkeleton />,
})
// import Home from '@p/home'
const Hot = loadable(() => import('@p/hot'))
// import Hot from '@p/hot'
const Message = loadable(() => import('@p/message'))
const Me = loadable(() => import('@p/me'))
const Detail = loadable(() => import('@p/detail'))
const Login = loadable(() => import('@p/login/login'))
const TsDome = loadable(() => import('@/pages/tsDemo'))

const routes = [
  { path: '/', exact: true, render: () => <Redirect to={'/index'} /> },
  {
    path: '/index',
    component: Home,
  },
  {
    path: '/hot',
    component: Hot,
  },
  {
    path: '/message',
    component: Message,
  },
  {
    path: '/me',
    render: () => {
      return store.getState().userState.isLogin ? <Me /> : <Redirect to={'/login'} />
    },
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/tsDemo',
    component: TsDome,
  },
]

export default routes
