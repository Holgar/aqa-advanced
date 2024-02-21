import { Todo } from "./Todo.js";
import { Users } from "./Users.js";

const getTodo = await Todo.getTodo()
const getUser = await Users.getUser()

console.log(getTodo)
console.log(getUser)