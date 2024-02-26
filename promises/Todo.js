import fetchTodo from './helpers.js';

export default class Todo {
  static async getTodo() {
    return fetchTodo();
  }
}
