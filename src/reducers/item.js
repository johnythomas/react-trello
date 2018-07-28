import { BOARD_FETCHED } from "../actions/boards"

const item = (state = {}, action) => {
  switch (action.type) {
    case BOARD_FETCHED:
      return {
        ...state,
        ...action.entities.items
      }
    default:
      return state
  }
}

export default item
