import * as API from "../utils/API"
import { normalize } from "normalizr"
import Board from "../schemas/Board"

export const BOARDS_FETCHED = "BOARDS_FETCHED"
export const BOARD_FETCHED = "BOARD_FETCHED"
export const BOARD_ADDED = "BOARD_ADDED"

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
