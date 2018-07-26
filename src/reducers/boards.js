import { BOARDS_FETCHED, BOARD_FETCHED } from "../actions/boards"

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
    default:
      return state
  }
}

export default boards
