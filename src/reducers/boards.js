import { BOARDS_FETCHED, BOARD_FETCHED, BOARD_ADDED } from "../actions/boards"
import { LIST_ADDED } from "../actions/list"

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
        ...action.entities.boards
      }
    case BOARD_ADDED:
      return {
        ...state,
        ...action.board
      }
    case LIST_ADDED: {
      const { boardId, entities } = action
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          lists: [
            ...state[boardId].lists,
            Number(Object.keys(entities.lists)[0])
          ]
        }
      }
    }
    default:
      return state
  }
}

export default boards
