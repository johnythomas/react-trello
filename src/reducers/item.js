import {
  BOARD_FETCHED,
  ITEM_ADDED,
  LIST_DELETED,
  ITEM_DELETED
} from "../utils/types"

const item = (state = {}, action) => {
  switch (action.type) {
    case BOARD_FETCHED:
    case ITEM_ADDED:
      return {
        ...state,
        ...action.entities.items
      }
    case LIST_DELETED:
      return Object.keys(state).reduce(
        (acc, itemId) =>
          Number(state[itemId].listId) === action.listId
            ? acc
            : {
                ...acc,
                [itemId]: state[itemId]
              },
        {}
      )
    case ITEM_DELETED: {
      const newState = { ...state }
      delete newState[action.itemId]
      return { ...newState }
    }
    default:
      return state
  }
}

export default item
