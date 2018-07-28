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

export const saveBoard = board =>
  fetch(`${api}/board/`, {
    method: "post",
    body: JSON.stringify(board),
    headers: { "Content-Type": "application/json" }
  }).then(res => {
    if (res.status !== 200) throw res
    return res.json()
  })

export const addList = (boardId, list) =>
  fetch(`${api}/board/${boardId}/list/`, {
    method: "post",
    body: JSON.stringify(list),
    headers: { "Content-Type": "application/json" }
  }).then(res => {
    if (res.status !== 200) throw res
    return res.json()
  })
