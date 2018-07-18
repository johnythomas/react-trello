import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import ListBoards from "./ListBoards"
import Board from "./Board"
import "./App.css"
import { fetchBoards } from "../actions/boards"

class App extends Component {
  async componentDidMount() {
    return this.props.getBoards()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="title-container">
            <h1 className="title">React Trello</h1>
          </div>
          <Switch>
            <Route exact path="/" component={ListBoards} />
            <Route exact path="/board/:id" component={Board} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  getBoards: PropTypes.func.isRequired
}

export default connect(
  null,
  { getBoards: fetchBoards }
)(App)
