import { normalize } from "normalizr"
import Item from "../schemas/Item"
import { ITEM_ADDED, ITEM_DELETED } from "../utils/types"
import * as API from "../utils/API"

export const itemAdded = (boardId, listId, entities) => ({
  type: ITEM_ADDED,
  boardId,
  listId,
  entities
})

export const itemDeleted = (listId, itemId) => ({
  type: ITEM_DELETED,
  listId,
  itemId
})

export const addItem = (boardId, listId, item) => async dispatch => {
  try {
    const addedItem = await API.addItem(boardId, listId, item)
    dispatch(itemAdded(boardId, listId, normalize(addedItem, Item).entities))
  } catch (err) {
    console.error(err)
  }
}

export const deleteItem = (boardId, listId, itemId) => async dispatch => {
  try {
    await API.deleteItem(boardId, listId, itemId)
    dispatch(itemDeleted(listId, itemId))
  } catch (err) {
    console.log(err)
  }
}
