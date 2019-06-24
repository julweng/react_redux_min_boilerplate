import React from "react"
import { TodoContainer } from "components"
import "./App.less"

const todos = [
  {
    id: 1,
    title: "have lunch with friends"
  },
  {
    id: 2,
    title: "practice react hooks"
  }
]

const App = () => (
  <>
    <h1 className="App__Header">Hello World from React Redux boilerplate</h1>
    <TodoContainer todos={todos} />
  </>
)

export default App
