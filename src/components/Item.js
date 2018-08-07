import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deleteItem } from "../actions/Items"
import "./Item.css"

const Item = ({ boardId, listId, item, removeItem }) => (
  <div className="list-item">
    <span className="list-item-text">{item.title}</span>
    <button
      className="delete-item-btn"
      onClick={() => removeItem(boardId, listId, item.id)}
    >
      <i className="fas fa-trash-alt" />
    </button>
  </div>
)

Item.propTypes = {
  boardId: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  removeItem: PropTypes.func.isRequired
}

const mapStateToProps = (state, { itemId }) => ({
  item: state.items[itemId]
})

const mapDispatchToProps = { removeItem: deleteItem }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
