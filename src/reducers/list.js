import { BOARD_FETCHED } from "../actions/boards"

const list = (state = {}, action) => {
  switch (action.type) {
    case BOARD_FETCHED:
      return {
        ...state,
        ...action.entites.lists
      }
    default:
      return state
  }
}

export default list
