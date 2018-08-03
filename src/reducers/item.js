import { BOARD_FETCHED, ITEM_ADDED, LIST_DELETED } from "../utils/types"

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
    default:
      return state
  }
}

export default item
