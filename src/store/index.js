import {createStore, combineReducers} from "redux"

import userReducer from "../reducer/userReducer"

const reducer = combineReducers({
  userReducer
})

const store = createStore(reducer)

export default store
