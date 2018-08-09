import * as API from "../utils/API"
import { normalize } from "normalizr"
import Board from "../schemas/Board"
import {
  BOARDS_FETCHED,
  BOARD_FETCHED,
  BOARD_ADDED,
  BOARD_DELETED
} from "../utils/types"

export const boardsFetched = boards => ({
  type: BOARDS_FETCHED,
  boards
})

export const boardFetched = entities => ({
  type: BOARD_FETCHED,
  entities
})

export const boardAdded = board => ({
  type: BOARD_ADDED,
  board
})

export const boardDeleted = boardId => ({
  type: BOARD_DELETED,
  boardId
})

export const fetchBoards = () => async dispatch => {
  const boards = await API.getBoards()
  dispatch(boardsFetched(normalize(boards, [Board]).entities.boards))
}

export const fetchBoard = id => async dispatch => {
  const board = await API.getBoard(id)
  dispatch(boardFetched(normalize(board, Board).entities))
}

export const addBoard = board => async dispatch => {
  try {
    const addedBoard = await API.saveBoard(board)
    dispatch(boardAdded(normalize(addedBoard, Board).entities.boards))
  } catch (err) {
    console.error(err)
  }
}

export const deleteBoard = boardId => async dispatch => {
  try {
    await API.deleteBoard(boardId)
    dispatch(boardDeleted(boardId))
  } catch (err) {
    console.log(err)
  }
}
