import React from "react"
import { string, shape, arrayOf, number } from "prop-types"
import "./style.less"

const TodoList = ({ todos = [] }) => (
  <div className="TodoList__Container">
    <ol className="TodoList">
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  </div>
)

TodoList.propTypes = {
  todos: arrayOf(
    shape({
      id: number,
      title: string
    })
  )
}

export default TodoList
