import { SEND_MSG_COUNT, PUSH_MSG_LIST, SET_MSG_LIST } from '@/config/actionTypes'

const initState = {
  msgCount: 0,
  msgList: [],
}
const msgReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_MSG_COUNT:
      return Object.assign({}, state, { msgCount: action.payload })

    case SET_MSG_LIST:
      return Object.assign({}, state, { msgList: action.payload })
    case PUSH_MSG_LIST:
      console.log(' %c 🐱‍🏍 action.payload: ', 'font-size:20px;background-color: #42b983;color:#fff;', action.payload)
      return Object.assign({}, state, { msgList: [...state.msgList, ...action.payload] })

    default:
      return state
  }
}

export default msgReducer
