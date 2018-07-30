import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import AddListItem from "./AddListItem"
import "./List.css"

class List extends Component {
  static propTypes = {
    boardId: PropTypes.number.isRequired,
    list: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    items: PropTypes.shape({
      id: PropTypes.shape({
        id: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired
      })
    }).isRequired
  }

  state = {}

  render() {
    const { list, items, boardId } = this.props
    return (
      <div className="list" key={list.id}>
        <h3 className="list-heading">{list.name}</h3>
        {list.items &&
          list.items.map(itemId => (
            <div className="list-item" key={itemId}>
              <span className="list-item-text">{items[itemId].title}</span>
            </div>
          ))}
        <AddListItem board={boardId} list={list.id} />
      </div>
    )
  }
}

const mapStateToProps = (state, { boardId, listId }) => ({
  boardId,
  list: state.lists[listId],
  items: state.items
})

export default connect(mapStateToProps)(List)
