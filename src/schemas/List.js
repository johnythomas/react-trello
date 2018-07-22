import { schema } from "normalizr"
import Item from "./Item"

const list = new schema.Entity(
  "lists",
  {
    items: [Item]
  },
  {
    idAttribute: "id"
  }
)

export default list
