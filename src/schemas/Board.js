import { schema } from "normalizr"
import List from "./List"

const board = new schema.Entity(
  "boards",
  {
    lists: [List]
  },
  { idAttribute: "id" }
)

export default board
