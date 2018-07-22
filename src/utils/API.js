const api = "http://localhost:8080"

const headers = {
  Accept: "application/json"
}

export const getBoards = async () => {
  const boards = await fetch(`${api}/board`, headers).then(res => res.json())
  return boards
}

export const getBoard = async id => {
  const board = await fetch(`${api}/board/${id}`, headers).then(res =>
    res.json()
  )
  return board
}
