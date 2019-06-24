import { combineReducers } from "redux"

import LoadingStore from "./LoadingStore"
import ErrorStore from "./ErrorStore"

const RequestStatusStore = combineReducers({
  LoadingStore,
  ErrorStore
})

export default RequestStatusStore
