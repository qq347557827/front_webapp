import { Badge, Image, List } from 'antd-mobile'
import { useSelector } from 'react-redux'
import { baseURL } from '@/config'
import { BellOutline } from 'antd-mobile-icons'

function MsgList(props) {
  const msgList = useSelector((state) => state.msgState.msgList)
  return (
    <div className="msg-list">
      <List header="消息列表">
        {msgList.map((item) =>
          item.msgType === 'chatMsg' ? (
            <List.Item
              key={item._id}
              prefix={
                <Image
                  src={baseURL + item.fromUid.pic}
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={40}
                  height={40}
                />
              }
              description={item.msg}
            >
              <div className="msg-item-top">
                <div className="msg-item-top-name">{item.fromUid.name}</div>
                <div>{item.isReaded && <Badge content={item.isReaded} style={{ marginRight: 'auto' }} />}</div>
              </div>
            </List.Item>
          ) : (
            <List.Item
              key={item._id}
              prefix={<BellOutline fontSize={28} color="var(--adm-color-primary)" style={{ width: '40px' }} />}
              description={item.comment_id.content}
            >
              <div className="msg-item-top">
                <div className="msg-item-top-name">
                  <span>{item.fromUid.name}</span>
                  <span style={{ fontSize: '12px', marginLeft: '12px', color: '#666' }}>点赞了你的评论</span>
                </div>
                <div>{item.isReaded && <Badge content={item.isReaded} style={{ marginRight: 'auto' }} />}</div>
              </div>
            </List.Item>
          ),
        )}
      </List>
    </div>
  )
}

export default MsgList
