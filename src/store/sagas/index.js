import { all } from 'redux-saga/effects'
import userSaga from '@/store/sagas/userSaga'
import msgSaga from '@/store/sagas/msgSaga'

function* rootSagas() {
  yield all([userSaga(), msgSaga()])
}

export default rootSagas
