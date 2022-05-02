import './index.css'
import { PictureOutline, SmileOutline } from 'antd-mobile-icons'
import { Mask } from 'antd-mobile'
import { useEffect, useRef } from 'react'

function Editor(props) {
  const { closeMask } = props
  const refInf = useRef()
  useEffect(() => {})
  const editorOnload = () => {
    const infId = document.querySelector('#refInf')
    infId.focus()
    console.log(' %c 🐱‍🏍 refInf: ', 'font-size:20px;background-color: #42b983;color:#fff;', refInf)
    setTimeout(() => {
      console.log('到时间')
      // refInf.current.focus().select(0, 0)
      infId.select(0, 0)
    }, 500)
    // refInf.current.input()
  }
  return (
    <div className={'m-editor'}>
      <Mask color="white" style={{ '--z-index': 9998 }} onMaskClick={closeMask} />
      <div className={'editor-box'}>
        <div className={'editor-inp-box'}>
          <div className={'editor-inp'}>
            <input type="text" name="" id="refInf" ref={refInf} />
            {/*<TextArea placeholder="请输入内容" autoSize={{ minRows: 3, maxRows: 5 }} ref={refInf} />*/}
          </div>
          <div className={'editor-img'} />
        </div>
        <div className={'editor-action-box'}>
          <div>
            <SmileOutline />
          </div>
          <div>
            <PictureOutline />
          </div>
        </div>
      </div>
      <img src="http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg" alt="" onLoad={editorOnload} />
    </div>
  )
}

export default Editor
