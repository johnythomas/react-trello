import React from "react"
import PropTypes from "prop-types"
import AddList from "./AddList"
import List from "./List"
import "./Board.css"

const Board = ({ board }) => (
  <div className="board">
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
  }).isRequired
}

export default Board
