import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'

const rootReducer =
  combineReducers(
    {
      r_cake: cakeReducer,
      r_iceCream: iceCreamReducer,
      r_user: userReducer,
    }
  )

export default rootReducer