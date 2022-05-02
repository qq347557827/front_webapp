import { Button, Mask, TextArea } from 'antd-mobile'
import { PictureOutline, SmileOutline } from 'antd-mobile-icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SEND_COMMENT_VAL } from '@/config/actionTypes'

function CommentBox(props) {
  const { isShow, showHandle, commentHandle, refCommentBox } = props
  const dispatch = useDispatch()
  const isSafari = useSelector((state) => state.appState.isSafari)
  const commentVal = useSelector((state) => state.appState.commentVal)
  const commentImg = useSelector((state) => state.appState.commentImg)

  const changeCommentVal = (val) => {
    dispatch({ type: SEND_COMMENT_VAL, payload: val })
  }

  const inpFocus = () => {
    showHandle(true)
  }
  useEffect(() => {
    // window.addEventListener('resize', function () {
    //   if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    //     window.setTimeout(function () {
    //       if ('scrollIntoView' in document.activeElement) {
    //         document.activeElement.scrollIntoView(false)
    //       } else {
    //         document.activeElement.scrollIntoViewIfNeeded(false)
    //       }
    //     }, 0)
    //   }
    // })
    return () => {}
  }, [])

  return (
    <div>
      <div>
        {isShow && <Mask color="white" style={{ '--z-index': 9998 }} onMaskClick={showHandle.bind(null, false)} />}
        <div className={'editor-box'}>
          <div className={'editor-inp-box'}>
            <div className={'editor-inp'}>
              <TextArea
                ref={refCommentBox}
                value={commentVal}
                placeholder="请输入评论"
                autoSize={{ minRows: isShow ? 3 : 1, maxRows: isShow ? 5 : 1 }}
                onFocus={inpFocus}
                onChange={(val) => {
                  console.log(' %c 🐱‍🏍 val: ', 'font-size:20px;background-color: #42b983;color:#fff;', val)
                  changeCommentVal(val)
                }}
              />
            </div>
            <div className={'editor-img'} />
          </div>
          {isShow && (
            <div className={`editor-action-box ${isSafari && 'safari-style'}`}>
              <div className={'editor-action-box-L'}>
                <span>
                  <SmileOutline fontSize={24} />
                </span>

                <span>
                  <PictureOutline fontSize={24} />
                </span>
              </div>
              <div className={'editor-action-box-R'}>
                <Button color="primary" size="mini" onClick={commentHandle}>
                  评论
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommentBox
