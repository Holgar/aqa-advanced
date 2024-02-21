import { BASE_URL } from "./helpers.js";

const fetchTodo = () => {
  return fetch(`${BASE_URL}/todos/1`).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }
    return response.json();
  });
};

const fetchUser = () => {
  return fetch(`${BASE_URL}/users/1`).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  });
};

Promise.all([fetchTodo(), fetchUser()])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));

Promise.race([fetchTodo(), fetchUser()])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
