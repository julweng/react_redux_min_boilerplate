import { createSelector } from "reselect"
import { get } from "lodash"
import ActionTypes from "../actions/actionTypes"

const getStore = rootState => get(rootState, "TodoListStore", {})

const defaultState = {
  todos: []
}

export default function TodoListStore(state = defaultState, action = {}) {
  const { type, list } = action
  switch (type) {
    case ActionTypes.GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        todos: list
      }
    default:
      return defaultState
  }
}

export const todoListSelector = createSelector(
  getStore,
  state => get(state, "todos", [])
)
