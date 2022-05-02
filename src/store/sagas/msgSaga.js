import { call, put, takeEvery } from 'redux-saga/effects'
import { getMsgList } from '@/api/user'
import { PUSH_MSG_LIST, SET_MSG_LIST } from '@/config/actionTypes'

function* sendMsgList(payload) {
  const { listPage } = payload
  console.log('sendMsgList')
  try {
    const res = yield call(getMsgList, listPage)
    if (res.data.code === 200) {
      const actionType = listPage > 0 ? PUSH_MSG_LIST : SET_MSG_LIST
      yield put({ type: actionType, payload: res.data.data })
    }
  } catch (err) {
    console.log(' %c 🐱‍🏍 err123: ', 'font-size:20px;background-color: #42b983;color:#fff;', err)
  }
}

export default function* msgSaga() {
  yield takeEvery('get_msg_list', sendMsgList)
}
