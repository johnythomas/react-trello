import React, { Fragment } from "react"
import { connect } from "react-redux"
import "./ListBoards.css"

const ListBoards = ({ boards }) => (
  <Fragment>
    <div className="board-list">
      <a className="board-list-item add-board" href="#">
        Add board
      </a>
      {boards.map(board => (
        <Fragment key={board.id}>
          <div className="board-list-item board-list-board bottom-shadow">
            <h2 className="board-name">{board.name}</h2>
          </div>
        </Fragment>
      ))}
    </div>
  </Fragment>
)

const mapStateToProps = state => ({
  boards: Object.values(state.boards)
})

export default connect(mapStateToProps)(ListBoards)
