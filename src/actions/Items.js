import { normalize } from "normalizr"
import Item from "../schemas/Item"
import { ITEM_ADDED } from "../utils/types"
import * as API from "../utils/API"

export const itemAdded = (boardId, listId, entities) => ({
  type: ITEM_ADDED,
  boardId,
  listId,
  entities
})

export const addItem = (boardId, listId, item) => async dispatch => {
  try {
    const addedItem = await API.addItem(boardId, listId, item)
    dispatch(itemAdded(boardId, listId, normalize(addedItem, Item).entities))
  } catch (err) {
    console.error(err)
  }
}
