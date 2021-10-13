import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer =
  combineReducers(
    {
      r_cake: cakeReducer,
      r_iceCream: iceCreamReducer,
    }
  )

export default rootReducer