import { getBoards } from "../utils/API"

export const BOARDS_FETCHED = "BOARDS_FETCHED"

export const boardsFetched = boards => ({
  type: BOARDS_FETCHED,
  boards
})

export const fetchBoards = () => async dispatch => {
  const boards = await getBoards()
  dispatch(boardsFetched(boards))
}
