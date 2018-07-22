import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchBoard } from "../actions/boards"
import "./ListBoards.css"

const ListBoards = ({ boards, history, getBoard }) => (
  <Fragment>
    <div className="board-list">
      <a className="board-list-item add-board" href="#">
        Add board
      </a>
      {boards.map(board => (
        <Fragment key={board.id}>
          <button
            className="board-list-item board-list-board bottom-shadow"
            onClick={() => {
              getBoard(board.id)
              history.push(`/board/${board.id}`)
            }}
          >
            <h2 className="board-name">{board.name}</h2>
          </button>
        </Fragment>
      ))}
    </div>
  </Fragment>
)

ListBoards.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  boards: Object.values(state.boards)
})

export default connect(
  mapStateToProps,
  { getBoard: fetchBoard }
)(withRouter(ListBoards))
