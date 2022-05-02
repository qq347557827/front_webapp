import { Card } from 'antd-mobile'
import { useEffect, useMemo } from 'react'
import { MessageOutline, TextDeletionOutline } from 'antd-mobile-icons'
import ProsTypes from 'prop-types'

import { baseURL } from '@/config'

function Comment(props) {
  const { commentList, replyToComment } = props
  const replyHandle = () => {
    replyToComment()
  }
  useMemo(() => {})
  useEffect(() => {
    console.log(' %c 🐱‍🏍 props: ', 'font-size:20px;background-color: #42b983;color:#fff;', props)
    console.log(' %c 🐱‍🏍 commentListssss: ', 'font-size:20px;background-color: #42b983;color:#fff;', commentList)
  }, [])
  return (
    <div className={'top-borer-1'}>
      <Card title={'评论区'}>
        {
          <div>
            {commentList.map((item, index) => (
              <div key={index} className={'comment-item'}>
                <div className={'comment-user'}>{item.cuid.name}</div>
                <div className={'comment-content'} dangerouslySetInnerHTML={{ __html: item.content }} />
                <div className={'comment-img'}>{<img src={baseURL + item.commentImg} alt="" />}</div>
                <div className={'comment-action-bar'}>
                  <div className={'action-bar-L'}>
                    <MessageOutline fontSize={24} onClick={replyHandle} />
                  </div>
                  <div className={'action-bar-R'}>
                    <TextDeletionOutline fontSize={20} color="var(--adm-color-danger)" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </Card>
    </div>
  )
}

Comment.prototype = {
  commentList: ProsTypes.array,
}

export default Comment
