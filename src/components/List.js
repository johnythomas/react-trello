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
  }

  render() {
    const { list, items, boardId } = this.props
    const { titleEditMode, title } = this.state
    return (
      <div className="list" key={list.id}>
        {titleEditMode ? (
          <div>
            <input
              className="list-title-input"
              type="text"
              ref={input => {
                this.titleInput = input
              }}
              value={title}
              onChange={this.handleTitleChange}
              onBlur={this.toggleEditMode}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.toggleEditMode()
                }
              }}
            />
          </div>
        ) : (
          <button className="list-heading" onClick={this.toggleEditMode}>
            {list.name}
          </button>
        )}
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
