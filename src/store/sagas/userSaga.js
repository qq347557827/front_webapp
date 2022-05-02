import { put, call, takeEvery } from 'redux-saga/effects'
import { login } from '@/api/user'
// import axios from 'axios'

// const logins = (data) => {
//   console.log(' %c 🐱‍🏍 data: ', 'font-size:20px;background-color: #42b983;color:#fff;', data)
//   login(data).then()
// }

function* loginAsync(payload) {
  try {
    const res = yield call(login, payload.payload.data)
    if (res.data.code === 200) {
      yield put({ type: 'send_userInfo', data: res.data.data })
      yield put({ type: 'send_token', data: res.data.token })
    }
    payload.payload.resolve(res)
  } catch (err) {
    payload.payload.reject(err)
  }

  // const res = yield call(axios.post, 'http://127.0.0.1:3008/login/login', data.data)

  // return new Promise((resolve, reject) => {
  //   if (res.data.code === 200) {
  //     put({ type: 'send_userInfo', data: res.data.data })
  //     resolve(res)
  //   } else {
  //     reject(res)
  //   }
  // })
}

export default function* userSaga() {
  yield takeEvery('submit_login', loginAsync)
}
