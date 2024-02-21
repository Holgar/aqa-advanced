import { fetchUser } from "./helpers.js";

export class Users {
  static async getUser() {
    return await fetchUser();
  }
}
