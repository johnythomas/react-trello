import {
  BOARD_FETCHED,
  LIST_ADDED,
  ITEM_ADDED,
  LIST_UPDATED,
  LIST_DELETED,
  ITEM_DELETED,
  BOARD_DELETED
} from "../utils/types"

const list = (state = {}, action) => {
  switch (action.type) {
    case BOARD_FETCHED:
    case LIST_ADDED:
      return {
        ...state,
        ...action.entities.lists
      }
    case ITEM_ADDED: {
      const { listId, entities } = action
      const itemId = Number(Object.keys(entities.items)[0])
      return {
        ...state,
        [listId]: {
          ...state[listId],
          items: state[listId].items
            ? state[listId].items.concat([itemId])
            : [itemId]
        }
      }
    }
    case LIST_UPDATED: {
      const { id, name } = action.list
      return {
        ...state,
        [id]: {
          ...state[id],
          name
        }
      }
    }
    case LIST_DELETED: {
      const newState = { ...state }
      delete newState[action.listId]
      return { ...newState }
    }
    case ITEM_DELETED: {
      const { listId, itemId } = action
      return {
        ...state,
        [listId]: {
          ...state[listId],
          items: state[listId].items.filter(id => Number(id) !== itemId)
        }
      }
    }
    case BOARD_DELETED:
      return Object.keys(state)
        .filter(id => state[id].boardId === action.boardId)
        .reduce(
          (acc, id) => ({
            ...acc,
            id: state[id]
          }),
          {}
        )
    default:
      return state
  }
}

export default list
