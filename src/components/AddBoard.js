import React, { Component, Fragment } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./AddBoard.css"

class AddBoard extends Component {
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
            <form>
              <input
                className="add-board-input"
                type="text"
                placeholder="board name"
                value={this.state.boardName}
                onChange={this.handleNameChange}
              />
              <button onClick={this.handleSubmit}>Add Board</button>
              <button
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

export default AddBoard
