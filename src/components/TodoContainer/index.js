import React, { Component } from "react"
import { shape, arrayOf, func } from "prop-types"
import { connect } from "react-redux"
import { getTodoList } from "./actions"
import { todoListSelector } from "./reducers/selectors"
import { TodoList } from "components"

class TodoContainer extends Component {
  componentDidMount() {
    this.props.getTodoList()
  }

  render() {
    const { todos } = this.props
    return (
      <div className="TodoContainer">
        {todos.length === 0 ? (
          <p>Nothing to see here!</p>
        ) : (
          <TodoList todos={todos} />
        )}
      </div>
    )
  }
}

TodoContainer.propTypes = {
  todos: arrayOf(shape({})),
  getTodoList: func
}

const mapStateToProps = state => ({
  todos: todoListSelector(state)
})

const mapDispatchToProps = {
  getTodoList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)
