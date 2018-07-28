import { BOARD_FETCHED, LIST_ADDED } from "../utils/types"

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
