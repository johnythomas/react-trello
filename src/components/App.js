import React from "react"
import ListDecks from "./ListDecks"
import "./App.css"

const App = () => (
  <div className="container">
    <div className="title-container">
      <h1 className="title">React Trello</h1>
    </div>
    <ListDecks />
  </div>
)

export default App
