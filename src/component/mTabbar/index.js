import { useHistory, useLocation } from "react-router-dom"
import {TabBar} from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import "./index.css"
import {FC} from "react";

const MTabBar: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
  const setRouteActive = (value) => {
    console.log(' %c 🐱‍🏍 location: ', 'font-size:20px;background-color: #42b983;color:#fff;', location)
    console.log(' %c 🐱‍🏍 value: ', 'font-size:20px;background-color: #42b983;color:#fff;', value)
    history.push(value)
  }
  const tabs = [
    {
      key: '/index',
      title: '首页',
      icon: <AppOutline />,
      badge: '5',
    },
    {
      key: '/Hot',
      title: '热门',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: '/message',
      title: '我的消息',
      icon: (active: false) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: '/me',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  return (
    <div className={'m-tab-bar'}>
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )

}

export default MTabBar
