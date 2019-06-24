import axios from "axios"
import ActionTypes from "./actionTypes"

const getTodoListRequest = () => {
  return {
    type: ActionTypes.GET_TODO_LIST_REQUEST
  }
}

const getTodoListSuccess = list => {
  return {
    type: ActionTypes.GET_TODO_LIST_SUCCESS,
    list
  }
}

const getTodoListFailure = err => {
  return {
    type: ActionTypes.GET_TODO_LIST_FAILURE,
    err
  }
}

const getTodoList = () => {
  return dispatch => {
    dispatch(getTodoListRequest())

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(
        res => {
          dispatch(getTodoListSuccess(res.data))
        },
        err => dispatch(getTodoListFailure(err))
      )

      .catch(err => {
        dispatch(dispatch(getTodoListFailure(err)))
      })
  }
}

export default getTodoList
