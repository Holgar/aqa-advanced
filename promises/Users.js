import fetchUser from './helpers.js';

export default class Users {
  static async getUser() {
    return fetchUser();
  }
}
