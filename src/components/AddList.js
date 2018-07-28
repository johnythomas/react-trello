import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { addList } from "../actions/list"
import "./AddList.css"

class AddList extends Component {
  static propTypes = {
    saveList: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    isAddEnabled: false,
    listName: ""
  }

  toggleAddEnabled = () => {
    this.setState(currentState => ({
      isAddEnabled: !currentState.isAddEnabled
    }))
  }

  handleInputChange = e => {
    const { value } = e.target
    this.setState(() => ({
      listName: value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { listName } = this.state
    if (!listName) return
    this.props.saveList(this.props.match.params.id, {
      list: {
        name: listName
      }
    })
    this.setState(() => ({
      isAddEnabled: false,
      listName: ""
    }))
  }

  render() {
    return (
      <div>
        {this.state.isAddEnabled ? (
          <div className="add-list-form">
            <form onSubmit={this.handleSubmit}>
              <input
                className="list-name-input"
                type="text"
                value={this.state.listName}
                onChange={this.handleInputChange}
                placeholder="Enter list name"
              />
              <div className="add-list-form-action">
                <button className="submit-btn" type="submit">
                  Add List
                </button>
                <button
                  type="button"
                  className="fa fa-times cancel-btn"
                  onClick={this.toggleAddEnabled}
                />
              </div>
            </form>
          </div>
        ) : (
          <button className="add-list" onClick={this.toggleAddEnabled}>
            <span className="add-list-text">Add a list...</span>
          </button>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = {
  saveList: addList
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(AddList))
