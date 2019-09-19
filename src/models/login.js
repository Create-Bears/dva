import { UserLogin, UserRegister } from '../services/login'

export default {
  namespace: 'login',
  state: {
  },
  effects: {
    // *login({ payload }, { call, put }) {
    //   console.log(payload)
    //   const result = yield call(UserLogin,payload)
    //   console.log(result,'result----')
    //   yield put({ type: '_login', payload: result.data })
    // }
  },
  reducers: {
    // _login(state, action) {
    //   state.data=action.payload
    //   return {...state,data:{...state.data}}
    // }
  }
}