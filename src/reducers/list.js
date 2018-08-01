import {
  BOARD_FETCHED,
  LIST_ADDED,
  ITEM_ADDED,
  LIST_UPDATED
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
    default:
      return state
  }
}

export default list
