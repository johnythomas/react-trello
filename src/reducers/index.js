import { combineReducers } from "redux"
import boards from "./boards"
import lists from "./list"
import items from "./item"

export default combineReducers({
  boards,
  lists,
  items
})
