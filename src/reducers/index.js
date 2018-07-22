import { combineReducers } from "redux"
import boards from "./boards"
import list from "./list"
import item from "./item"

export default combineReducers({
  boards,
  list,
  item
})
