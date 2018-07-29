import { BOARD_FETCHED, ITEM_ADDED } from "../utils/types"

const item = (state = {}, action) => {
  switch (action.type) {
    case BOARD_FETCHED:
    case ITEM_ADDED:
      return {
        ...state,
        ...action.entities.items
      }
    default:
      return state
  }
}

export default item
