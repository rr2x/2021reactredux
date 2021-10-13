const redux = require('redux')
const reduxLogger = require('redux-logger')

// action type
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creator
const buyCake = () => ({ type: BUY_CAKE, info: '1st redux action' })
const buyIceCream = () => ({ type: BUY_ICECREAM, info: '2nd redux action' })

// initial state
const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCreams: 20,
}

// reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state, // get original state, then merge with new update
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

// reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

// combine multiple reducers into one
const rootReducer =
  redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  })

// middleware
const loggerMiddleware = reduxLogger.createLogger()

// setup store and it's listener, and then apply middleware
const store = redux.createStore(
  rootReducer,
  redux.applyMiddleware(loggerMiddleware)
)

console.log('INITIAL STATE: ', store.getState())

// get handler
const unsubscribe = store.subscribe(() => { })

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


unsubscribe()