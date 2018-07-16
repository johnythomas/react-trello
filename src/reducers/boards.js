import { BOARDS_FETCHED } from "../actions/boards"

const boards = (state = {}, action) => {
  switch (action.type) {
    case BOARDS_FETCHED:
      return action.boards.reduce(
        (acc, board) => ({
          ...acc,
          [board.id]: board
        }),
        {}
      )
    default:
      return state
  }
}

export default boards
