import React from "react"
import { Route, Switch } from "react-router-dom"
import ListBoards from "./ListBoards"
import Board from "./Board"
import "./App.css"

const App = () => (
  <div className="container">
    <div className="title-container">
      <h1 className="title">React Trello</h1>
    </div>
    <Switch>
      <Route exact path="/" component={ListBoards} />
      <Route exact path="/board" component={Board} />
    </Switch>
  </div>
)

export default App
