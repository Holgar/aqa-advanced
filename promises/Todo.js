import { fetchTodo } from "./helpers.js";

export class Todo {
  static async getTodo() {
    return await fetchTodo();
  }
}
