import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import jwt_decode from 'jwt-decode'

const UUID = 'uuid'
export const getUuid = () => {
  let uuid = localStorage.getItem(UUID)
  if (uuid) {
    return uuid
  } else {
    uuid = uuidv4()
    console.log(' %c 🐱‍🏍 uuid: ', 'font-size:20px;background-color: #42b983;color:#fff;', uuid)
    localStorage.setItem(UUID, uuid)
    return uuid
  }
}

const TOKEN = 'token'
const getLocalToken = () => {
  return localStorage.getItem(TOKEN)
}
export const tokenIsPast = () => {
  const token = getLocalToken()
  if (!token) return false
  const decoded = jwt_decode(token)
  const isBefore = dayjs().isBefore(dayjs(decoded.exp * 1000))
  console.log(' %c 🐱‍🏍 isBefore: ', 'font-size:20px;background-color: #42b983;color:#fff;', isBefore)
  if (!isBefore) {
    setToken('')
    setUserInfo('')
  }
  return isBefore
}
export const setToken = (token) => {
  localStorage.setItem(TOKEN, token)
}
export const getToken = () => {
  return getLocalToken()
}

const USERINFO = 'userinfo'
export const setUserInfo = (userInfo) => {
  const JsonData = JSON.stringify(userInfo)
  localStorage.setItem(USERINFO, JsonData)
}
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem(USERINFO))
}
