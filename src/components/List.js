import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import AddListItem from "./AddListItem"
import "./List.css"
import { updateList, deleteList } from "../actions/list"
import Item from "./Item"

class List extends Component {
  static propTypes = {
    boardId: PropTypes.number.isRequired,
    list: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    saveUpdatedListName: PropTypes.func.isRequired,
    removeList: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      titleEditMode: false,
      title: props.list.name
    }
  }

  componentDidUpdate = prevProps => {
    if (this.props.list.name !== prevProps.list.name) {
      this.setState(() => ({
        title: this.props.list.name
      }))
    }
  }

  handleTitleChange = e => {
    const { value } = e.target
    this.setState(() => ({
      title: value
    }))
  }

  toggleEditMode = async () => {
    await this.setState(currentState => ({
      titleEditMode: !currentState.titleEditMode
    }))
    if (this.state.titleEditMode && !!this.titleInput) {
      this.titleInput.focus()
    }
    const { boardId, list } = this.props
    if (!this.state.titleEditMode && list.name !== this.state.title) {
      this.props.saveUpdatedListName(boardId, {
        id: list.id,
        name: this.state.title
      })
    }
  }

  render() {
    const { list, boardId, removeList } = this.props
    const { titleEditMode, title } = this.state
    return (
      <div className="list" key={list.id}>
        <div className="list-title-container">
          {titleEditMode ? (
            <div className="list-title-container-column">
              <input
                className="list-title-input"
                type="text"
                ref={input => {
                  this.titleInput = input
                }}
                value={title}
                onChange={this.handleTitleChange}
                onBlur={this.toggleEditMode}
                onKeyPress={e => e.key === "Enter" && this.toggleEditMode()}
              />
            </div>
          ) : (
            <div className="list-title-container-column">
              <button className="list-heading" onClick={this.toggleEditMode}>
                {list.name}
              </button>
            </div>
          )}
          <div className="list-title-container-column">
            <button
              className="list-action-btn"
              type="button"
              onClick={() => removeList(boardId, list.id)}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </div>
        {list.items &&
          list.items.map(itemId => (
            <Item
              key={itemId}
              itemId={itemId}
              listId={list.id}
              boardId={boardId}
            />
          ))}
        <AddListItem board={boardId} list={list.id} />
      </div>
    )
  }
}

const mapStateToProps = (state, { boardId, listId }) => ({
  boardId,
  list: state.lists[listId]
})

const mapDispatchToProps = {
  saveUpdatedListName: updateList,
  removeList: deleteList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
