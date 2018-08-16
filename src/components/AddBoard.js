import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./AddBoard.css"
import { addBoard } from "../actions/boards"

class AddBoard extends Component {
  static propTypes = {
    storeBoard: PropTypes.func.isRequired
  }

  state = {
    isAddEnabled: false,
    boardName: ""
  }

  handleNameChange = e => {
    const { value } = e.target
    this.setState(() => ({
      boardName: value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { boardName } = this.state
    if (!boardName) return
    this.props.storeBoard({
      board: {
        name: boardName
      }
    })
    this.setState(() => ({ boardName: "", isAddEnabled: false }))
  }

  toggleAddEnabled = () => {
    this.setState(currentState => ({
      isAddEnabled: !currentState.isAddEnabled
    }))
  }

  render() {
    return (
      <Fragment>
        {this.state.isAddEnabled ? (
          <div className="board-list-item add-board-form-container">
            <form onSubmit={this.handleSubmit}>
              <input
                className="add-board-input"
                type="text"
                placeholder="board name"
                value={this.state.boardName}
                onChange={this.handleNameChange}
              />
              <button className="add-board-btn" type="submit">
                Add Board
              </button>
              <button
                type="button"
                className="fa fa-times cancel-btn"
                onClick={this.toggleAddEnabled}
              />
            </form>
          </div>
        ) : (
          <button
            className="board-list-item add-board"
            onClick={this.toggleAddEnabled}
          >
            Add board
          </button>
        )}
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  storeBoard: addBoard
}

export default connect(
  null,
  mapDispatchToProps
)(AddBoard)
