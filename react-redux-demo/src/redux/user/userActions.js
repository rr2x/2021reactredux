import axios from 'axios'

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";


// action creator that returns an action object
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST })
export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users })
export const fetchUsersFailure = error => ({ type: FETCH_USERS_FAILURE, payload: error })

// async action creator, return function... used by redux-thunk
export const fetchUsers = () => {
  return async dispatch => {
    try {
      dispatch(fetchUsersRequest())
      const r = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      dispatch(fetchUsersSuccess(r.data))
    } catch (e) {
      dispatch(fetchUsersFailure(e.message))
    }
  }
}