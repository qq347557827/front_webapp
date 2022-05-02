import { addResponseMessage, Widget, toggleWidget } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css'
import './index.scss'
import { useEffect, useState } from 'react'
import socket from '@/libs/sock'
import { useDispatch, useSelector } from 'react-redux'

import MsgList from '@p/message/childComps/msgList'

function Message() {
  const [listPage, setListPage] = useState(0)
  const newChatMsg = useSelector((state) => state.appState.newChatMsg)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'get_msg_list', payload: { listPage } })
    // bug 页面重新加载会 像后台请求，会添加同样的数据到 msgState。msglist里面，里面就会存在两份一样的数据，页面就报错，循环组件具有相同的key值
    // 解决，使用list上拉加载，后台返回总数据，定义pape页数判断
  }, [])
  useEffect(() => {
    addResponseMessage(newChatMsg)
  }, [newChatMsg])
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message throught the backend API
    const response = '这是一条新消息'
    socket.json({
      event: 'chatMsg',
      message: newMessage,
    })
  }
  return (
    <div>
      {/*<NavBar style={{ backgroundColor: '#fff', '--border-bottom': '1px #eee solid' }}>消息列表</NavBar>*/}
      <MsgList />
      <div onClick={toggleWidget} className="che-shi">
        {' '}
        sdfsdf
      </div>
      <div className={'chat-box'}>
        <Widget fullScreenMode={true} handleNewUserMessage={handleNewUserMessage} />
      </div>
    </div>
  )
}
// mapDispatchToProps
export default Message
// export default connect(null, mapDispatchToProps)(Message)
