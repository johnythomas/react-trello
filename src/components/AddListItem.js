import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import "./AddListItem.css"
import { addItem } from "../actions/Items"

class AddListItem extends Component {
  static propTypes = {
    board: PropTypes.number.isRequired,
    list: PropTypes.number.isRequired,
    saveItem: PropTypes.func.isRequired
  }

  state = {
    isAddEnabled: false,
    itemText: ""
  }

  toggleIsAddEnabled = () => {
    this.setState(currentState => ({
      isAddEnabled: !currentState.isAddEnabled
    }))
  }

  handleItemTextChange = e => {
    const { value } = e.target
    this.setState(() => ({
      itemText: value
    }))
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.saveItem(this.props.board, this.props.list, {
      item: {
        title: this.state.itemText
      }
    })
    this.setState(() => ({
      isAddEnabled: false,
      itemText: ""
    }))
  }

  render() {
    return this.state.isAddEnabled ? (
      <div className="add-list-item-form">
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input
              type="text"
              className="add-list-item-form-input"
              placeholder="Enter item text"
              onChange={this.handleItemTextChange}
              value={this.state.itemText}
            />
          </div>
          <div className="add-list-item-form-action">
            <button type="submit" className="submit-btn">
              Add Item
            </button>
            <button
              type="button"
              className="fa fa-times cancel-btn"
              onClick={this.toggleIsAddEnabled}
            />
          </div>
        </form>
      </div>
    ) : (
      <button className="add-list-item-btn" onClick={this.toggleIsAddEnabled}>
        <i className="fas fa-plus" />
        <span className="add-list-item-btn-text">Add new item</span>
      </button>
    )
  }
}

const mapDispatchToProps = {
  saveItem: addItem
}

export default connect(
  null,
  mapDispatchToProps
)(AddListItem)
