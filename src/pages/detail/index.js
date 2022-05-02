import { useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { escapeHtml } from '@/libs/escapeHtml'

import './index.css'
import DetailNavBar from '@p/detail/childCom/detailNavBar'
import { getCommentList, getPostDetail } from '@/api/content'
import Post from '@p/detail/childCom/post'
import Comment from '@p/detail/childCom/comment'
import CommentBox from '@p/detail/childCom/commentBox'
import { useSelector } from 'react-redux'
// import Editor from '@/component/editor'

function Detail() {
  const params = useParams()
  const history = useHistory()
  const refCommentBox = useRef()
  const id = params.id
  const [postData, setPostData] = useState([])
  const [commentList, setCommentList] = useState([])
  const [isShow, setShow] = useState(false)
  const commentVal = useSelector((state) => state.appState.commentVal)
  const showHandle = (flg) => {
    setShow(flg)
  }
  const onBack = () => {
    history.go(-1)
  }
  const commentHandle = () => {
    console.log(' %c 🐱‍🏍 commentVal: ', 'font-size:20px;background-color: #42b983;color:#fff;', commentVal)
  }
  const replyToComment = () => {
    console.log(' %c 🐱‍🏍 refCommentBox: ', 'font-size:20px;background-color: #42b983;color:#fff;', refCommentBox)
    refCommentBox.current.focus()
  }
  useEffect(() => {
    getPostDetail(id).then((res) => {
      const data = { ...res.data.data, htmlContent: escapeHtml(res.data.data.content) }
      setPostData(() => data)
    })
    getCommentList(id).then((res) => {
      const data = res.data.data
      setCommentList((state) => [...state, ...data])
    })
  }, [])
  return (
    <div className={'post-detail'}>
      <DetailNavBar onBack={onBack} />
      <Post postData={postData} />
      <Comment replyToComment={replyToComment} commentList={commentList} />
      <CommentBox refCommentBox={refCommentBox} isShow={isShow} showHandle={showHandle} commentHandle={commentHandle} />
      {/*{isShow && <Editor closeMask={closeEditor} />}*/}
    </div>
  )
}

export default Detail
