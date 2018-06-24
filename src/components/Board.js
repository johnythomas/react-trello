import React from "react"
import "./Board.css"

const Deck = () => (
  <div className="board">
    <div className="list">
      <h3 className="list-heading">List Name</h3>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
    </div>
    <div className="list">
      <h3>List Name</h3>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
      <div className="list-item">
        <span className="list-item-text">list item text</span>
      </div>
    </div>
    <div className="add-list">
      <span className="add-list-text">Add a list...</span>
    </div>
  </div>
)

export default Deck
