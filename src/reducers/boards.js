import { BOARDS_FETCHED, BOARD_FETCHED } from "../actions/boards"

const boards = (state = {}, action) => {
  switch (action.type) {
    case BOARDS_FETCHED:
      return {
        ...action.boards
      }
    case BOARD_FETCHED:
      return {
        ...state,
        ...action.entites.boards
      }
    default:
      return state
  }
}

export default boards
