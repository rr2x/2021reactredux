const redux = require('redux')
const axios = require('axios')
const loggerMiddleware = require('redux-logger').createLogger()
const thunkMiddleware = require('redux-thunk').default


// setup initial-state
const initialState = {
  loading: false,
  users: [],
  error: ''
}

// setup action-types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// setup action-creators
const fetchUsersRequest = () =>
  ({ type: FETCH_USERS_REQUEST })

const fetchUsersSuccess = users =>
  ({ type: FETCH_USERS_SUCCESS, payload: users })

const fetchUsersFailure = error =>
  ({ type: FETCH_USERS_FAILURE, payload: error })

// setup reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        users: [],
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

// redux-thunk needs an action that returns a function
const fetchUsers = () => (
  dispatch => {

    dispatch(fetchUsersRequest())

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        dispatch(fetchUsersSuccess(res.data.map(u => u.id)))
      })
      .catch(err => {
        dispatch(fetchUsersFailure(err.message))
      })
  }
)

// setup store and apply thunk middleware
const store = redux.createStore(
  reducer,
  redux.applyMiddleware(thunkMiddleware, loggerMiddleware)
)

store.subscribe(() => { })

store.dispatch(fetchUsers())