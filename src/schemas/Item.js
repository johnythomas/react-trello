import { schema } from "normalizr"

const item = new schema.Entity("items", {}, { idAttribute: "id" })

export default item
