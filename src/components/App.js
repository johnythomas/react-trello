import React from "react"
import ListBoards from "./ListBoards"
import "./App.css"

const App = () => (
  <div className="container">
    <div className="title-container">
      <h1 className="title">React Trello</h1>
    </div>
    <ListBoards />
  </div>
)

export default App
