import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { connect } from "react-redux"
import ListBoards from "./ListBoards"
import "./App.css"
import { fetchBoards } from "../actions/boards"
import BoardContainer from "../containers/BoardContainer"

class App extends Component {
  async componentDidMount() {
    return this.props.getBoards()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="title-container">
            <Link className="title" to="/">
              React Trello
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={ListBoards} />
            <Route exact path="/board/:id" component={BoardContainer} />
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
