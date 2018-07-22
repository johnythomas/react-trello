import { getBoards, getBoard } from "../utils/API"
import { normalize } from "normalizr"
import Board from "../schemas/Board"

export const BOARDS_FETCHED = "BOARDS_FETCHED"
export const BOARD_FETCHED = "BOARD_FETCHED"

export const boardsFetched = boards => ({
  type: BOARDS_FETCHED,
  boards
})

export const boardFetched = entites => ({
  type: BOARD_FETCHED,
  entites
})

export const fetchBoards = () => async dispatch => {
  const boards = await getBoards()
  dispatch(boardsFetched(normalize(boards, [Board]).entities.boards))
}

export const fetchBoard = id => async dispatch => {
  const board = await getBoard(id)
  dispatch(boardFetched(normalize(board, Board).entities))
}
