import Sockette from 'sockette'
import { socketURL } from '@/config'
import store from '@/store'
import { SEND_MSG_COUNT, SEND_NEW_CHAT_MSG } from '@/config/actionTypes'

const ws = new Sockette(socketURL, {
  timeout: 10e3,
  maxAttempts: 10,
  onopen: (e) => {
    console.log('Connected!', e)
    ws.json({
      event: 'auth',
      message: store.getState().userState.token,
    })
  },
  onmessage: (e) => {
    // console.log('Received:', e)
    const obj = JSON.parse(e.data)
    switch (obj.event) {
      case 'noauth':
        console.log('noauth: ', obj.event)
        break
      case 'heartbeat': // 心跳检测
        ws.json({
          event: 'heartbeat',
          message: 'pong',
        })
        break
      case 'chatMsg':
        console.log(' %c 🐱‍🏍 obj.message: ', 'font-size:20px;background-color: #42b983;color:#fff;', obj.message)
        store.dispatch({ type: SEND_NEW_CHAT_MSG, payload: obj.message })
        break
      case 'unreadMsg':
        console.log(' %c 🐱‍🏍 unreadMsg.message: ', 'font-size:20px;background-color: #42b983;color:#fff;', obj)
        store.dispatch({ type: SEND_MSG_COUNT, payload: obj.message })

      // default:
      // store.dispatch('message', obj)
    }
  },
  onreconnect: (e) => console.log('Reconnecting...', e),
  onmaximum: (e) => console.log('Stop Attempting!', e),
  onclose: (e) => console.log('Closed!', e),
  onerror: (e) => console.log('Error:', e),
})

export default ws
