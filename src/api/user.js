import Axios from '../libs/axios'

export const getCaptcha = (sid) => {
  return Axios.get('public/getCaptcha', {
    params: {
      sid,
    },
  })
}

export const login = (data) => {
  return Axios.post('/login/login', data)
}

export const getMsgList = (page) => {
  return Axios.get('user/getMsgList', {
    params: {
      page,
    },
  })
}
