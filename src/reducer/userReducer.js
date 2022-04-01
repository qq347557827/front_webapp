import { SENDTOKEN } from '../config/actionTypes'

const initState = {
  token: ''
}

const userReducer = (state = initState, action) => {
  console.log(SENDTOKEN)
  switch (action.type) {
    case 'send_token':
      return {...state, token: action.data}
    default:
      return state
  }
}

export default userReducer
