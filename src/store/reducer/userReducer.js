import { SEND_TOKEN, SEND_USERINFO } from '@/config/actionTypes'
import { getToken, getUuid, setToken, getUserInfo, tokenIsPast, setUserInfo } from '@/libs/utils'

const sid = getUuid()
const isLogin = tokenIsPast()
const token = getToken()
const userInfo = getUserInfo()

const initState = {
  isLogin,
  sid,
  token,
  userInfo,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_TOKEN:
      setToken(action.data)
      return { ...state, token: action.data, isLogin: true }
    case SEND_USERINFO:
      console.log(' %c 🐱‍🏍 send_userInfo: ', 'font-size:20px;background-color: #42b983;color:#fff;', action.data)
      setUserInfo(action.data)
      return { ...state, userInfo: action.data }
    default:
      return state
  }
}

export default userReducer
