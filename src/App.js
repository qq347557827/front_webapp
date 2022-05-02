import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Suspense, useEffect} from 'react'

import {renderRoutes} from 'react-router-config'
import routes from '@/router'
import {Provider} from 'react-redux'

import store from './store'
import MTabBar from './component/mTabbar'
import './App.css'
import '@/assets/css/base.scss'
import {SEND_IS_SAFARI} from '@/config/actionTypes'
import socket from '@/libs/sock'

function App() {
  useEffect(() => {
    //console.log(' %c 🐱‍🏍 socket: ', 'font-size:20px;background-color: #42b983;color:#fff;', socket)
    //console.log(socket);

    const message = (event) => {

      console.log("🚀 ~ file:App method:message line:25 -----", event)
      //console.log(' %c 🐱‍🏍 event: ', 'font-size:20px;background-color: #42b983;color:#fff;', event)
      JSON.stringify({
        event: 'heartbeat',
        message: 'pong',
      })
    }
    const timer = setTimeout(() => {
      // socket.send(
      //   JSON.stringify({
      //     event: 'auth',
      //     message:
      //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBmN2VlOTQ3MzkzMDI1Y2NjMmVmYzYiLCJpYXQiOjE2NTAwMzUyOTUsImV4cCI6MTY1MDY0MDA5NX0.YWGKN7VOCdaosNWzVLuHzyLzPKpJWLwNNreEAxZznbs',
      //   }),
      // )
      socket.json({
        event: 'chatMsg',
        message: '这是一条新消息',
      })
      // socket.onmessage = (event) => {
      //   console.log(' %c 🐱‍🏍 event: ', 'font-size:20px;background-color: #42b983;color:#fff;', event)
      //   const obj = JSON.parse(event.data)
      //   console.log(' %c 🐱‍🏍 obj: ', 'font-size:20px;background-color: #42b983;color:#fff;', obj)
      //   if (obj.event === 'heartbeat' && obj.message === 'ping')
      //     socket.send(JSON.stringify({ event: 'heartbeat', message: 'pong' }))
      // }
      const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
      isSafari && store.dispatch({type: SEND_IS_SAFARI})
    })
    // document.body.addEventListener(
    //   'touchmove',
    //   function (e) {
    //     console.log(' %c 🐱‍🏍 e._isScroller: ', 'font-size:20px;background-color: #42b983;color:#fff;', e)
    //     if (e._isScroller) return
    //     // 阻止默认事件
    //     e.preventDefault()
    //   },
    //   {
    //     passive: false,
    //   },
    // )
    // document.querySelector('.App').addEventListener(
    //   'touchmove',
    //   function (e) {
    //     e.stopPropagation()
    //   },
    //   false,
    // )
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Router initialEntries={['/index']}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Provider store={store}>
            <Switch>
              {/*<Route exact path={'/'}>*/}
              {/*  <Redirect to={'/index'} />*/}
              {/*</Route>*/}
              {/*{routes.map((route) => (*/}
              {/*  <Route*/}
              {/*    key={route.path}*/}
              {/*    exact={route.exact}*/}
              {/*    path={route.path}*/}
              {/*    render={(props) => <route.component {...props} />}*/}
              {/*  />*/}
              {/*))}*/}
              {renderRoutes(routes)}
              {/*<Route exact path="/">*/}
              {/*  <Redirect to={'/index'} />*/}
              {/*</Route>*/}
              {/*<Route exact path="/index" component={Home} />*/}
              {/*<Route exact path="/hot" component={Hot} />*/}
              {/*<Route exact path="/message" component={Message} />*/}
              {/*<Route exact path="/me" render={MeRender} />*/}
              {/*<Route exact path={'/detail/:id'} component={Detail} />*/}
              {/*<Route exact path={'/login'} component={Login} />*/}
            </Switch>
            <MTabBar/>
          </Provider>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
