import { SEND_IS_SAFARI, SEND_COMMENT_VAL, SEND_COMMENT_IMG, SEND_NEW_CHAT_MSG } from '@/config/actionTypes'

const initState = {
  isSafari: false,
  newChatMsg: '',
  commentVal: '',
  commentImg: '',
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_IS_SAFARI:
      return Object.assign({}, state, { isSafari: true })

    case SEND_COMMENT_VAL:
      return Object.assign({}, state, { commentVal: action.payload })

    case SEND_COMMENT_IMG:
      return Object.assign({}, state, { commentImg: action.payload })

    case SEND_NEW_CHAT_MSG:
      return Object.assign({}, state, { newChatMsg: action.payload })
    default:
      return state
  }
}

export default appReducer
