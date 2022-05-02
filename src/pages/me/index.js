import { Card, NavBar, Avatar } from 'antd-mobile'
import { useSelector } from 'react-redux'
import './index.scss'
import { useEffect } from 'react'
import { FileOutline } from 'antd-mobile-icons'

function me() {
  const userInfo = useSelector((state) => state.userState.userInfo)
  useEffect(() => {
    console.log(' %c 🐱‍🏍 userInfo: ', 'font-size:20px;background-color: #42b983;color:#fff;', userInfo)
  }, [])
  return (
    <div className={'personal-center'}>
      <NavBar title="个人主页" backArrow={false} style={{ '--border-bottom': '1px solid #eeeeee', background: '#fff' }}>
        个人主页
      </NavBar>
      <div className={'top-backgroud'} />
      <div className={'center-main'}>
        <Card>
          <div className={'user-box'}>
            <div className={'user-img'}>
              <Avatar src={userInfo.pic} style={{ '--size': ' 65px', '--border-radius': '50%' }} />
            </div>
            <div className={'user-name-box'}>
              <div className={'user-name-box-C'}>
                <div className="user-name">{userInfo.name}</div>
                <div>
                  <span className="user-integral">积分:{userInfo.favs}</span>
                </div>
              </div>
              <div className={'user-name-box-R'}>个人主頁</div>
            </div>
            <div className="user-statistics">
              <div>
                <div>3</div>
                <div>我的帖子</div>
              </div>
              <div>
                <div>3</div>
                <div>收藏夹</div>
              </div>
              <div>
                <div>3</div>
                <div>最近浏览</div>
              </div>
            </div>
          </div>
          <div className="user-bottom-box" />
        </Card>
        <Card className={'user-action'}>
          <div className={'user-action-T'}>
            <div>
              <div>
                <FileOutline fontSize={24} color="#66CC99" />
              </div>
              <div>我的帖子</div>
            </div>
            <div>
              <div>
                <FileOutline fontSize={24} color="#66CC99" />
              </div>
              <div>修改设置</div>
            </div>
            <div>
              <div>
                <FileOutline fontSize={24} color="#66CC99" />
              </div>
              <div>修改密码</div>
            </div>
            <div>
              <div>
                <FileOutline fontSize={24} color="#66CC99" />
              </div>
              <div>签到中心</div>
            </div>
            <div>
              <div>
                <FileOutline fontSize={24} color="#66CC99" />
              </div>
              <div>购买记录</div>
            </div>
            <div>
              <div>
                <FileOutline fontSize={24} color="#66CC99" />
              </div>
              <div>赞助商</div>
            </div>
          </div>
          {/*<div className={'user-action-B'}>*/}
          {/*  */}
          {/*  <div></div>*/}
          {/*</div>*/}
        </Card>
      </div>
    </div>
  )
}

export default me
