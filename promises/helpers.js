
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchTodo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/todos/1`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;

  }
};

const fetchUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/1`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { BASE_URL, fetchTodo, fetchUser };
