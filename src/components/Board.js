import React from "react"
import PropTypes from "prop-types"
import "./Board.css"

const Board = ({ board, lists, items }) => {
  console.log(lists)
  return (
    <div className="board">
      {lists.map(list => (
        <div className="list" key={list.id}>
          <h3 className="list-heading">{list.name}</h3>
          {list.items.map(itemId => (
            <div className="list-item" key={itemId}>
              <span className="list-item-text">{items[itemId].title}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="add-list">
        <span className="add-list-text">Add a list...</span>
      </div>
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  items: PropTypes.shape({
    id: PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired
    })
  }).isRequired
}

export default Board
