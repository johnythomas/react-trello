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
    board: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      lists: PropTypes.arrayOf(PropTypes.number.isRequired)
    })
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

const mapStateToProps = (state, props) => ({
  board: state.boards[props.match.params.id]
})

const mapDispatchToProps = {
  getBoard: fetchBoard
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer)
