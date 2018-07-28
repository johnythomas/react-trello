import { normalize } from "normalizr"
import List from "../schemas/List"
import * as API from "../utils/API"

export const ADD_LIST = "ADD_LIST"
export const LIST_ADDED = "LIST_ADDED"

export const listAdded = (boardId, entities) => ({
  type: LIST_ADDED,
  boardId,
  entities
})

export const addList = (boardId, list) => async dispatch => {
  try {
    const addedList = await API.addList(boardId, list)
    dispatch(listAdded(boardId, normalize(addedList, List).entities))
  } catch (err) {
    console.error(err)
  }
}
