import { BOARDS_FETCHED, BOARD_FETCHED, BOARD_ADDED } from "../actions/boards"

const boards = (state = {}, action) => {
  switch (action.type) {
    case BOARDS_FETCHED:
      if (!action.boards) return state
      return Object.keys(action.boards).reduce(
        (acc, boardId) => ({
          ...acc,
          [boardId]: state[boardId] ? state[boardId] : action.boards[boardId]
        }),
        {}
      )
    case BOARD_FETCHED:
      return {
        ...state,
        ...action.entites.boards
      }
    case BOARD_ADDED:
      return {
        ...state,
        ...action.board
      }
    default:
      return state
  }
}

export default boards
