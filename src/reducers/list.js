import { BOARD_FETCHED } from "../actions/boards"
import { LIST_ADDED } from "../actions/list"

const list = (state = {}, action) => {
  switch (action.type) {
    case BOARD_FETCHED:
    case LIST_ADDED:
      return {
        ...state,
        ...action.entities.lists
      }
    default:
      return state
  }
}

export default list
