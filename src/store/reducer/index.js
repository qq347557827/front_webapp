import { combineReducers } from 'redux'
import userReducer from '@/store/reducer/userReducer'
import appReducer from '@/store/reducer/appReducer'
import msgReducer from '@/store/reducer/msgReducer'

const rootReducer = combineReducers({
  userState: userReducer,
  appState: appReducer,
  msgState: msgReducer,
})

export default rootReducer
