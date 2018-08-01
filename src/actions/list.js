import { normalize } from "normalizr"
import List from "../schemas/List"
import * as API from "../utils/API"
import { LIST_ADDED, LIST_UPDATED } from "../utils/types"

export const listAdded = (boardId, entities) => ({
  type: LIST_ADDED,
  boardId,
  entities
})

export const listUpdated = list => ({
  type: LIST_UPDATED,
  list
})

export const addList = (boardId, list) => async dispatch => {
  try {
    const addedList = await API.addList(boardId, list)
    dispatch(listAdded(boardId, normalize(addedList, List).entities))
  } catch (err) {
    console.error(err)
  }
}

export const updateList = (boardId, list) => async dispatch => {
  try {
    await API.updateList(boardId, list)
    dispatch(listUpdated(list))
  } catch (err) {
    console.error(err)
  }
}
