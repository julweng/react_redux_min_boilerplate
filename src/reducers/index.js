import { combineReducers } from "redux"
import RequestStatusStore from "./RequestStatus"
import TodoListStore from "components/TodoContainer/reducers/todoListStore"

const rootReducer = combineReducers({
  TodoListStore,
  RequestStatusStore
})

export default rootReducer
