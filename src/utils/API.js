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

export const deleteBoard = boardId =>
  fetch(`${api}/board/${boardId}`, {
    method: "delete"
  }).then(res => {
    if (res.status !== 200) throw res
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

export const deleteList = (boardId, listId) =>
  fetch(`${api}/board/${boardId}/list/${listId}`, {
    method: "delete"
  }).then(res => {
    if (res.status !== 200) throw res
  })

export const updateList = (boardId, list) =>
  fetch(`${api}/board/${boardId}/list/${list.id}`, {
    method: "put",
    body: JSON.stringify({ list: { name: list.name } }),
    headers: { "Content-Type": "application/json" }
  }).then(res => {
    if (res.status !== 200) throw res
    return res.json()
  })

export const addItem = (boardId, listId, item) =>
  fetch(`${api}/board/${boardId}/list/${listId}/item`, {
    method: "post",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" }
  }).then(res => {
    if (res.status !== 200) throw res
    return res.json()
  })

export const deleteItem = (boardId, listId, itemId) =>
  fetch(`${api}/board/${boardId}/list/${listId}/item/${itemId}`, {
    method: "delete"
  }).then(res => {
    if (res.status !== 200) throw res
  })
