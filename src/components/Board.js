import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import AddList from "./AddList"
import List from "./List"
import "./Board.css"
import { deleteBoard } from "../actions/boards"

const Board = ({ board, removeBoard, history }) => (
  <div className="board">
    <div className="board-title-container">
      <span className="board-title">{board.name}</span>
      <button
        className="delete-board-btn"
        type="button"
        onClick={() => {
          removeBoard(board.id)
          history.push("/")
        }}
      >
        <i className="fas fa-trash-alt" />{" "}
        <span className="delete-board-btn-text">Delete Board</span>
      </button>
    </div>
    {board.lists &&
      board.lists.map(listId => (
        <List key={listId} listId={listId} boardId={board.id} />
      ))}
    <AddList />
  </div>
)

Board.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lists: PropTypes.arrayOf(PropTypes.number.isRequired)
  }).isRequired,
  removeBoard: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

const mapDispatchToProps = {
  removeBoard: deleteBoard
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Board))
