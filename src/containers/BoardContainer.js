import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Board from "../components/Board"
import { fetchBoard } from "../actions/boards"

class BoardContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    getBoard: PropTypes.func.isRequired,
    board: PropTypes.shape({})
  }

  static defaultProps = {
    board: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getBoard(id)
  }

  render() {
    return this.props.board ? <Board {...this.props} /> : <div>Loading...</div>
  }
}

const mapStateToProps = (state, props) => {
  const board = state.boards[props.match.params.id]
  const { lists, items } = state
  const boardLists =
    !!board && board.lists ? board.lists.map(listId => lists[listId]) : []
  return {
    board,
    lists: boardLists,
    items
  }
}

const mapDispatchToProps = {
  getBoard: fetchBoard
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer)
